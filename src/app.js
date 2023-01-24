import express from 'express';
import cargoRutas from './routes/cargo.routes.js';
import indexRoutes from './routes/index.ruotes.js';


const app = express();
app.use(express.json());

app.use(indexRoutes);
app.use('/api',cargoRutas);

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'enpoint not found'
    })
})

export default app;