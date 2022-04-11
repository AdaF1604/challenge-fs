const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movimientosSchema = new Schema ({
    Concepto: String,
    Fecha: Date,
    Monto: Number,
    Tipo: String,
    
    

    
});

//crear modelo
const movimientos = mongoose.model('movimientos', movimientosSchema);

module.exports = movimientos;