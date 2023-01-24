import {pool} from '../db.js'


export const getCargos = async(req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM cargo')
        res.send(rows);   
       
    }catch(error){
        return res.status(500).json({
            message:'Algo salió mal'
        })
    }
}

export const getCargo = async(reg, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM cargo WHERE idCargo = ?', [reg.params.id])
        if(rows.length <= 0) return res.status(404).json({
            message: 'El cargo no existe'
        })
        res.send(rows[0])
    
    }catch(error){
        return res.status(500).json({
          message : 'Algo salió mal'  
        })
    }
    
    }

export const createCargo = (req, res) => res.send('Creando Cargo');
export const updateCargo = (req, res) => res.send('Actulizando Cargo');
export const  deleteCargo = (req, res) => res.send('Elimiando Cargo');