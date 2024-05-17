

        import express from 'express';
import { SERVER_PORT } from '../global/environment';
       import socketIO from 'socket.io';
           import http from 'http';


export default class Server
  {
  // Propiedad Estatica
     private static _instancia: Server;

  // Propiedades - Atributos
     public app: express.Application ;
     public port: number;
     public io: socketIO.Server;

  // este es el servidor que vamos a levantar en vez de el server de express
     private httpServer: http.Server;  


  // Definicion del constructor
     private constructor() 
       {
      // Aqui se inicializa la propiedad app
         this.app = express();

      // Aqui se inicializa la propiedad port
         this.port = SERVER_PORT;

      // Se inicializa el servidor http y se la manda como parametro 
      // la configuración que tiene la app de express
         this.httpServer = new http.Server( this.app );

      // Aqui se configura la propiedad -- io -- es decir el socket
      //   this.io = socketIO( this.httpServer ); sale un error
         this.io = new socketIO.Server( this.httpServer );
      //   this.io = new socketIO.Server( this.httpServer, { cors: { origin: true, credentials: true } } );

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
                      }
                  );
      }


  // Este metodo start inicializa el servidor
     start = ( callback: (() => void) ) => 
               {
                // En vez de inicializar el servidor de express
                // this.app.listen( this.port, callback );

                // Se inicializa el servidor http
                   this.httpServer.listen( this.port, callback );
               };
   
  }