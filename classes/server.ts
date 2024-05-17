

        import express from 'express';
import { SERVER_PORT } from '../global/environment';


export default class Server
  {
  // Atributos
     public app: express.Application ;
     public port: number;


     
  // Definicion del constructor
     constructor() 
       {
      // Aqui se inicializa la propiedad app
         this.app = express();

      // Aqui se inicializa la propiedad port
         this.port = SERVER_PORT;
       }



  // El metodo start inicializa el servidor
     start = ( callback: (() => void) ) => 
               {
                 this.app.listen( this.port, callback );
               };
   
  }