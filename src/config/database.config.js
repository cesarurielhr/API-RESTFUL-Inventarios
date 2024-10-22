import mongoose from 'mongoose';
import config from './config';
(async () => {
    try {
        const db = await mongoose.connect(config.CONNECTION_STRING, {
/*             useNewUrlParser: true,
            useUnifiedTopology: true, */
            dbName: config.DATABASE
        });
        console.log('Conexion exitosa a la base de datos : ', db.connection.name);
    } catch (error) {
        console.log('Error en la conexion: ', error);
    }
})();