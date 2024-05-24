

        import express from 'express';
       import socketIO from 'socket.io';
           import http from 'http';
   import * as socketM from '../sockets/socket'

import { SERVER_PORT } from '../global/environment';


export default class Server
  {
  // Propiedades - Atributos

  // Propiedad Estatica 
     private static _instancia: Server;

  // Esta Propiedad es el SERVIDOR que vamos a levantar del server de express
     public app: express.Application ;
     public port: number;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *       Esta PROPIEDAD va tener la configuración de la conexion de los SOCKETS      *
   *      Y va ser la encargada de emitir eventos y escuchar los cambios, es decir,    *
   *  Es el encargado de los eventos tanto de emision como de recepcion de los sockets *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
     public io: socketIO.Server;


  // Esta Propiedad es el SERVIDOR que vamos a levantar en vez del server de express
     private httpServer: http.Server;  


  // Definicion del constructor
     private constructor() 
       {
      // Aqui se inicializa la propiedad app ->
      // Nota: 
      // Socket y express no Trabajan juntos directamente
      // por eso se usa un intermediario que es protocolo http
         this.app = express();

      // Aqui se inicializa la propiedad port
         this.port = SERVER_PORT;

      // Se inicializa el SERVIDOR http y se la manda como parametro 
      // la configuración que tiene la app de express
         this.httpServer = new http.Server( this.app );

      // Aqui se configura la propiedad -- io -- es decir el socket
      // this.io = new socketIO.Server( this.httpServer );
      // Tambien se puede resolver de esta otra forma
      // this.io = new socketIO.Server( this.httpServer, { cors: { origin: true, credentials: true } } );

      
      // Para darle permiso al servidor que entra por el puerto 4200
         this.io = new socketIO.Server( this.httpServer, { 
                                                           cors: { 
                                                                     origin: "http://localhost:4200", 
                                                                    methods: ["GET", "POST"]
                                                                 }
                                                         } );

      // Se llama el metodo para el monitoreo de sockets
         this.escucharSockets();
       }



  // Se hace la unica instancia de la clase Server por medio de un metodo estatico 
  // Este en particular es un metodo getter
     public static get instancia()
      {
        return this._instancia || ( this._instancia = new this() );
      }



  // Este metodo es para escuchar si los sockets se conectan o no
  // es decir se hacen la configuracion de un par de sockets
     private escucharSockets()
      {
        console.log( 'Escuchando Conexiones de Sockets' );

        this.io.on( 'connection', cliente => 
                      {
                        console.log( 'Cliente 01 Conectado' );

                        // Desconectar
                        socketM.desconectar
                      }
                  );
      }



  /* * * * * * * * * * * * * * * * * * * * * * * * * *
   *     Este Metodo start inicializa el servidor    *
   *               htttp   o   el express            *
   * * * * * * * * * * * * * * * * * * * * * * * * * */
     start = ( callback: (() => void) ) => 
               {
                // En vez de inicializar el servidor de express
                // this.app.listen( this.port, callback );

                // Se inicializa el servidor http
                   this.httpServer.listen( this.port, callback );
               };
  }