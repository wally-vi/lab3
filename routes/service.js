    var express = require('express');
    var router = express.Router();
    /* GET home page. */

    router.get('/', function(req, res, next) {
    res.status(200).json({msn: "Hola mundo"});        
    });

    router.post('/test', function(req, res, next) {
        req.body["msn"] = "Por el servidor";
        var data = req.body
        res.status(200).json(data);
    });

    router.post('/divisas', function(request, response, next) {
        var params = request.body;
        if (params.moneda ==null && params.cant == null && params.cambio ==  null) {
            response.status(500).json({"msn":"parametros incorrectos"
        });
        return;
        } 
        var dicc ={
            CAD: 1.260046,
            CHF: 0.933058,
            EUR: 0.806942,
            GBP: 0.719154, 
            USD: 1,
            BOB:6.96
        }
        //a dolar
        if(dicc[params.moneda]>1){
            var A_dolar = Number(params.cant)/dicc[params.moneda]
            //return A_dolar;
            
        }
        
        else {
            var A_dolar = Number(params.cant)*dicc[params.moneda]
            
        }
        
        //al destino
        if(dicc[params.cambio]>1){
            var Al_destino = A_dolar *dicc[params.cambio]
           // return A_dolar;
        }
        else {
            var Al_destino = A_dolar / dicc[params.cambio]
        }
        response.status(500).json({
            "moneda":params.moneda,
            "cambio":params.cambio,
            "resultado":Al_destino
        });

        //router.post('/interes, function(req, res, next) {
        //Algoritmo
        //});
    

    }); 
    module.exports = router;