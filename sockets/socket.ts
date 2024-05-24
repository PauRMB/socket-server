

/*
 * Aqui tendremos la logica de los sockets
 *
 * */

    import { Socket } from 'socket.io';

    export const desconectar = (cliente: Socket) => 
     {
        cliente.on( 'disconnect', () => 
                      {
                        console.log( 'Cliente 01 Desconectado' );
                      } 
                  )
     }