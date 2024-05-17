

import { Router, Request, Response } from 'express';

// Esta constante es con la que se va a crear los APIs END POINTS 
// o tambien llamados mis servicios REST 
// Para poder usarla se tiene que exportar
   const router = Router();


// Definicion del Servicio GET en un EndPoint llamado /mensajes
   router.get( '/mensajes', ( req: Request, resp: Response ) =>
                                {
                                  resp.json( 
                                      {
                                         ok: true,
                                        mje: 'Todo esta bien para el servicio GET'
                                      } 
                                    );
                                }
              );


// Definicion del Servicio POST en un EndPoint llamado /mensajes
    router.post( '/mensajes', ( req: Request, resp: Response ) =>
                                { // configuracion del bodyParse
                                  const cuerpo = req.body.cuerpo;
                                  const de     = req.body.de;

                                  resp.json( 
                                      {
                                           ok: true,
                                          mje: 'POST - Listo',
                                       cuerpo, 
                                           de
                                      } 
                                    );
                                }
              );


// Definicion del Servicio POST - Donde lo puedas leer por el URL en un EndPoint llamado /mensajes
   router.post( '/mensajes/:id', ( req: Request, resp: Response ) =>
                                    { 
                                  // configuracion del bodyParse
                                      const cuerpo = req.body.cuerpo;
                                      const de     = req.body.de;
                                      const id     = req.params.id;

                                      resp.json( 
                                          {
                                              ok: true,
                                              mje: 'POST - Listo',
                                          cuerpo, 
                                              de,
                                              id
                                          } 
                                        );
                                    }
              );

// Para Poder Exportar la Ruta (router) y que sea la primera
// tomada en cuenta y que ya tenga todos los atributos asignados
   export default router;

   
