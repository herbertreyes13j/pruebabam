const express = require('express'); // inicializa la apliacion
const cors = require('cors');
const morgan = require('morgan');
const app = express();

let port = process.env.PORT || 9090


app.use(morgan('dev'))
app.use(cors())


app.use((req,res,next)=>{
    next();
})

//rutas

app.use('/obtener',require('./routes/info.routes'))

// inicio del servidor
app.get('/', (req, res) => {
   
    res.send('Servidor Iniciado !!!');
  });


app.listen(port,'0.0.0.0',()=>{
    console.log('Server on port',port);
})
