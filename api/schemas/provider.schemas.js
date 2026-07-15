const mongoose = require('mongoose');
const providers = require('../models/providers.models');

const Schema = mongoose.Schema; // Para evitar no llamar al mismo objeto con palabras mas largas.

// Create company schema (child or sub-document) 
const companySchema = new Schema({
    "company_name": { type: String, required: true },
    "address": { type: String, required: true },
    "address2": String,
    "city": { type: String, required: true },
    "state": { type: String, required: true, min: 2, max: 2 },
    "postal_code": { type: String, required: true, min: 5 },
    "phone": { type: String, required: true },
    "email": { type: String, required: true },
    "description": String,
    "tagline": String
})

// Create provider Schema (top-level document)
const providerSchema = new Schema({
    "firstname": { type: String, required: true },
    "lastname": { type: String, required: true },
    "position": String,
    "company": companySchema
})

module.exports = { providerSchema, companySchema }