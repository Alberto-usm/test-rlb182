import {pool} from '../db.js'


export const getCargos = async(req, res) => {
    const [rows] = await pool.query('SELECT * FROM cargo')
    res.send(rows);   
}

export const getCargo = async(reg, res) => {
    const [rows] = await pool.query('SELECT * FROM cargo WHERE idCargo = ?', [reg.params.id])
    if(rows.length <= 0) return res.status(404).json({
        message: 'El carno no existe'
    })
    res.send(rows[0])
}

export const createCargo = (req, res) => res.send('Creando Cargo');
export const updateCargo = (req, res) => res.send('Actulizando Cargo');
export const  deleteCargo = (req, res) => res.send('Elimiando Cargo');