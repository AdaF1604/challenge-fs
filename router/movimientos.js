const express = require ('express');
const router = express.Router();

const movimientos = require('../models/movimiento');



router.get('/', async (req,res) => {

    try {

        const arrayMovimientosDB = await movimientos.find()
        console.log(arrayMovimientosDB)

        res.render("movimientos", {
            arrayMovimientos: arrayMovimientosDB
            
        })

    } catch (error) {
        console.log(error)
    }

  
})

router.get('/crear', (req, res) => {
    res.render('crear')

})

router.post('/', async (req, res) => {
    const body = req.body
    try {
        const movimientosDB = new movimientos(body)
        await movimientosDB.save()
        res.redirect('/movimientos')

    } catch (error) {
        console.log(error)
    }


    router.get('/:id', async (req, res) => {
        const id = req.params.id
    try {

        const movimientosDB = await movimientos.findOne({ _id: id })
        console.log(movimientosDB)

        res.render('detalle', {
            movimientos: movimientosDB,
            error: false
        })

        } catch (error) {
            console.log(error)
            res.render('detalle', {
              error: true,
                mensaje: 'No se encuentra el id seleccionado'
            })

        }
    })
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const movimientosDB = await movimientos.findByIdAndDelete({ _id: id})

        if (movimientosDB) {
            res.json ({
                estado: true,
                mensaje: 'eliminado',
            })        
        } else {
            res.json({
                estado: false,
                mensaje: ' fallo eliminar',
            }

            )

        }

    } catch (error) {
        console.log(error)
    }
}),

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    
    try {

        const movimientosDB = await movimientos.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log(movimientosDB)

        res.json({
            estado: true,
            mensaje: 'Editado'
        })
        
    } catch (error) {
        console.log(error)
        
        res.json({
            estado: false,
            mensaje: 'Fallamos!!'
        })
    }
})


module.exports = router;