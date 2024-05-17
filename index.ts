

       import Server from './classes/server';
       import router from './routes/router';
   import bodyParser from 'body-parser';
         import cors from 'cors';


// Se construye el server
   const server = new Server();


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  El body-parser se debe configurar justo despues del server y antes *
 *     de la configuracion de las rutas porque en las rutas se usara   *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// Configuracion del BodyParser   
   server.app.use( bodyParser.urlencoded( { extended: true } ) );

// Lo que sea que posten se toma y se genera un objeto de JavaScript con un formato JSON
   server.app.use( bodyParser.json() );

// Configuracion del CORS - para cualquiera pueda llamar mis servicios
   server.app.use( cors( { origin: true, credentials: true } ) );



   
// Configuracion de las rutas de los servicios
   server.app.use( '/', router );


// Se llama la funcion start para inicializar el servidor con los atributos anteriores
   server.start( () => 
                  {
                     console.log(`Servidor corriendo en el puerto ${ server.port } `)
                  }
               )


   