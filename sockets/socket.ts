

/*
 * Aqui tendremos la implementacion de la logica de los sockets
 *
 * */

      import socketIO from 'socket.io';
    import { Socket } from 'socket.io';

       import { Mje } from '../interfaces/payload.interface';



 // Metodo que se encarga de ESCUCHAR cuando se dan 
 // las desconexiones de los "clientes-Sockets" CONECTADOS
    export const desconectar = (cliente: Socket) => 
      {
        cliente.on( 'disconnect', () => 
                      {
                        console.log( 'Cliente Desconectado - Sockets' );
                      } 
                  )
      }


 // Metodo que se encarga de ESCUCHAR los mensajes que un "cliente" EMITE
    export const mensaje = ( cliente: Socket, io: socketIO.Server ) => 
      {
     // se manda el evento == mensaje && el mensaje en si == payload y el callback
        cliente.on( 'mensaje', ( payload: Mje  /*  , callback */ ) => 
                      {
                        console.log( 'El Mensaje que se Recibe es: ', payload );

                        io.emit( 'mensaje-nuevo', payload );
                      } 
                  )
      }