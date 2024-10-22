/* import * as mongoose from 'mongoose';
//Commerce

const prodservSchema = new mongoose.Schema({
    IdProdServPK: { type : Number, required : true },
    IdProdServOK: { type : String },
    IdProdServBK: { type : String },
    //--
    IdProdServMaOK: { type : String },
    IdProdServMaBK: { type : String },
    //--
    DesProdServ: { type : String },
    IdMedidaOK: {  type : String },
    IdMedidaBK: {  type : String },
    //FIC: ESTATUS
    cat_prod_serv_estatus: [
      {
            IdTipoGenEstatusOk: { type : String },
            IdGenEstatusOk: { type : String },
            TipoEstatus: { type : String },
            Actual: { type: String },
            Observacion: { type: String },
            detail_row: {
                FechaReg: { type: Date, default: Date.now },
                UsuarioReg: { type: String }
            },
            _id: false,
        },
    ],
    //FIC: ARCHIVOS
    cat_prod_serv_archivos: [
        {
            DesArchivo: { type : String },
            RutaArchivo: { type : String },
            //FIC: Tipo Archivo
            IdTipoGenArchivoOK: { type : String },
            IdGenArchivoOK: { type : String },
            TipoArchivo: { type : String },
            //FIC: Sección
            IdTipoGenSeccionOK: { type : String },
            IdGenSeccionOK: { type : String },
            TipoSeccion: { type : String },
            //---
            Secuencia: { type : Number },
            Principal: { type : String },
            detail_row: {
                FechaReg: { type: Date, default: Date.now },
                UsuarioReg: { type: String },
                FechaUltMod: { type: Date, default: Date.now },
                UsuarioMod: { type: String },
                Activo: { type: String, default: 'S' },
                Borrado: { type: String, default: 'N' },
            _id: false,
            },
            _id: false,
        },
    ], 
    detail_row: {
          FechaReg: { type: Date, default: Date.now },
          UsuarioReg: { type: String },
          FechaUltMod: { type: Date, default: Date.now },
          UsuarioMod: { type: String },
          Activo: { type: String, default: 'S' },
          Borrado: { type: String, default: 'N' }
    }
});

export default mongoose.model(
    'cat_prod_serv',
    prodservSchema,
    'cat_prod_serv'
  ); */
//************************************************************************************************* */
import * as mongoose from 'mongoose';

// Define el esquema para la colección cat_Inventories
const inventorySchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    productName: { type: String },
    description: { type: String },
    category: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    status: { type: String },
    // Otros campos específicos que tengas en tu colección
    detail_row: {
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        createdBy: { type: String },
        updatedBy: { type: String },
        isActive: { type: Boolean, default: true }
    }
});

// Crea y exporta el modelo para la colección cat_Inventories
export default mongoose.model(
    'catinventories',  // Nombre del modelo
    inventorySchema,    // Esquema asociado
    'catinventories'   // Nombre de la colección en MongoDB
);
