

/* * * * * * * * * * * * * * * * * * * * * * * * * *
 *  Aqui definimos las constantes o variables que  *
 * queremos que sean globales en nuestro proyecto  *
 * * * * * * * * * * * * * * * * * * * * * * * * * */


// Si EXISTE process.env.PORT entonces sera ese el valor del puerto si no sera el puerto 5000 
   export const SERVER_PORT: number = Number(process.env.PORT) || 5000; 
