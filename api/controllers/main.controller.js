let providers = require('../models/providers.models');
const Provider = require('../db/db');
const { ObjectId } = require('mongodb');
 

// Util functions
// Check if list is empty
function isEmptyList(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0 );
}

// Check for existing provider ( Esto se comenta porque ya mongodb lo hará )
// function existsProvider(id) {
//     return providers.find( provider => provider.id == id);
// }

// Generate a unique provider ID ( Esto se comenta porque ya mongodb lo hará )
// function getUniquetID(provider) {
//     let min = 100000;
//     let max = 999999;

//     // Generate id until doesn't exist in provider list.
//     do {
//         var id = Math.floor(Math.random() * (max-min) + min);
//     } while(existsProvider(id))

//     return id;
// }

// CRUD - Create (POST), READ (Get), Update (PUT), Delete

//POST
// url: /api/providers
module.exports.create = function(req, res) {

    if(isEmptyList(providers)) {
        providers = [];
    }

    let id = req.body.id;
    if(existsProvider(id)) {
        res.status(400);
        res.send('Duplicate id not allowed.');
        id = getUniquetID(); // Obtiene nuevo ID si el id del body existe dentro de la lista.
    }

    let provider = req.body; // Get new provider
    provider.id = id;
    
    providers.push(provider);
    res.status(200);
    res.send(provider);
}

// Manejador de errores
function handlerError(res, error) {
    res.status(200);
    res.send('Something went wrong. \n' + error);
}

//GET ALL
// url: /api/providers
module.exports.readAll = function(req, res) {
    try{
        Provider.find()
            .then( result => {
                if( isEmptyList(providers) ) {
                        res.status(404);
                        res.send('List is empty.');
                }
                res.status(200);
                res.send(result);
            })
            .catch( error => handlerError(res, error))
    }catch(error) {
        handlerError(res, error);
    }
}

//GET ONE
// url: /api/providers/123
module.exports.readOne = function(req, res) {
    // const provider = providers.find(provider => provider.id == id);
    try {
        let id = new ObjectId(req.params.id);

        Provider.find({'_id': id})
            .then( result => {    
                if(isEmptyList(result)) {
                    res.status(400);
                    res.send('List is empty. Nothing to read.');
                }

                res.status(200);
                res.send(result);
            })
            .catch(error => handlerError(res, error))
    }catch(error) {
        handlerError(res, error);
    }
}

//PUT
// url: /api/providers/123
module.exports.update = function(req, res) {
    if( isEmptyList(providers) ) {
        res.status(404);
        res.send('List is empty. Nothing to update');
    }
    const id = req.params.id;
    const { company } = req.body;
    const providerFound = providers.find(provider => provider.id == id);


    if(providerFound) {
        providerFound.firstname = req.body.firstname;
        providerFound.lastname = req.body.lastname;
        providerFound.position = req.body.position;
        providerFound.company.company_name = company.company_name;
        providerFound.company.address = company.address;
        providerFound.company.address2 = company.address2;
        providerFound.company.city = company.city;
        providerFound.company.state = company.state;
        providerFound.company.postal_code = company.postal_code;
        providerFound.company.phone = company.phone;
        providerFound.company.email = company.email;
        providerFound.company.description = company.description;
        providerFound.company.tagline = company.tagline;

        res.status(200);
        res.send(providerFound);   
    }
}

//DELETE ALL
// url: /api/providers
module.exports.deleteAll = function(req, res) {
    if( isEmptyList(providers) ) {
        res.status(404);
        res.send('List is empty. Nothing to delete');
    }
    providers = [];
    res.status(200);
    res.send(providers);
}

//DELETE ONE
// url: /api/providers/123
module.exports.deleteOne = function(req, res) {
    if( isEmptyList(providers) ) {
        res.status(404);
        res.send('List is empty. Nothing to delete');
    }
    const id = req.params.id;
    const providerFound = providers.find(provider => provider.id == id);
    const idx = providers.indexOf(providerFound);

    // Elimino el elemento en la posicion de idX.
    providers.splice(idx, 1);

    res.status(200); // res.status();
    res.send(providerFound);
}