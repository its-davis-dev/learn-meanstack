let providers = require('../models/providers.models');
 

// CRUD - Create (POST), READ (Get), Update (PUT), Delete

//POST
// url: /api/providers
module.exports.create = function(req, res) {
    let min = 100000;
    let max = 999999;
    let id = Math.floor(Math.random() * (max-min) + min);
    const {  firstname, lastname, position, company }= req.body;


    //Create new provider object    
    const provider = {
        id: id,
        firstname: firstname,
        lastname: lastname,
        position: position,
        company: {
            company_name: company.company_name,
            address: company.address,
            address2: company.address2,
            city: company.city,
            state: company.state,
            postal_code: company.postal_code,
            phone: company.phone,
            email: company.email,
            description: company.description,
            tagline: company.tagline,
        }
    }

    providers.push(provider);

    res.status(200);
    res.send(provider);
}

//GET ALL
// url: /api/providers
module.exports.readAll = function(req, res) {
    res.status(200);
    res.send(providers);
}

//GET ONE
// url: /api/providers/123
module.exports.readOne = function(req, res) {
    const id = req.params.id;
    const provider = providers.find(provider => provider.id == id);
    
    if(provider) {
        res.status(200);
        res.send(provider);
    }
}

//PUT
// url: /api/providers/123
module.exports.update = function(req, res) {
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
        res.send(provider);   
    }
}

//DELETE ALL
// url: /api/providers
module.exports.deleteAll = function(req, res) {
    providers = [];
    res.status(200);
    res.send(providers);
}

//DELETE ONE
// url: /api/providers/123
module.exports.deleteOne = function(req, res) {
    const id = req.params.id;
    const providerFound = providers.find(provider => provider.id == id);
    const idx = providers.indexOf(providerFound);

    // Elimino el elemento en la posicion de idX.
    providers.splice(idx, 1);

    res.status(200); // res.status();
    res.send(providerFound);
}