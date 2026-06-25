const providers = require('../models/providers');

// List 
module.exports.list = function(req, res) {
    res.render('providers/providers-list', { providers: providers })
}

// Detail
module.exports.details = function(req, res) {
    const id = req.params.id;
    const provider = providers.find(provider => provider.id == id);

    res.render('providers/providers-details', { id: id, title: 'Service Providers Details', company: provider.company })
}

// Edit form.
module.exports.edit = function(req, res) {
    const id = req.params.id;
    const provider = providers.find(provider => provider.id == id);

    res.render('providers/providers-edit', { id: id, title: 'Edit', provider: provider})
}

// Update form.
module.exports.update = function(req, res) {
    const id = req.params.id;
    const {  firstname, lastname, position, company_name, address, address2, city, state, postal_code, phone, email, description, tagline }= req.body;

    const providerFound = providers.find(provider => provider.id == id);

    providerFound.firstname = firstname;
    providerFound.lastname = lastname;
    providerFound.position = position;
    providerFound.company.company_name = company_name;
    providerFound.company.address = address;
    providerFound.company.address2 = address2;
    providerFound.company.city = city;
    providerFound.company.state = state;
    providerFound.company.postal_code = postal_code;
    providerFound.company.phone = phone;
    providerFound.company.email = email;
    providerFound.company.description = description;
    providerFound.company.tagline = tagline;

    res.render('providers/providers-update', { id: id, title: 'Update'})
}