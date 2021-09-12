var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const uri="mongodb://pruebabam:s3jckEnQ2Aiesw5yCEzFgBvuY1COKz77JIax3Xrn98xM5GoaouNXACKOsvfnbv4T88vmMrtpge746ZouOWvQCA%3D%3D@pruebabam.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@pruebabam@"


const clientes = mongoose.model('clientes',mongoose.Schema({
    categoria:String,
    documento:String,
    mnt_trx_mm:String,
    num_trx:String,
    pct_mnt_tot:String,
    pct_num_trx_tot:String,
    tipo_doc:String
}))

async function obtener(req,res) {

    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("pruebabam");
        dbo.collection("clientes").find({documento:req.params.id}).toArray(function(err, result) {
          if (err) throw err;
          db.close();
          res.send(result)
          
        });
      });
      
    
  }


  module.exports={
      obtener
  }