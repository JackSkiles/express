const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const db = require('../../models');
const { Op } = require('sequelize');

// Gets all members
router.get('/', (req, res, next) => {
    res.render('invoice.ejs', {
        title: 'Login Page',
        errorMessage: '',
    });
});

router.get('/:id', (req, res) => {
    const found = members.some(member => member.invoice_number === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member =>
            member.invoice_number === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No invoice with the number of ${req.params.id}`})
    }
});

// Create Member
router.post('/', (req, res) => {
    db.Invoices.create({
        invoiceNumber: req.body.invoice_number,
        total: req.body.total,
        currency: req.body.currency,
        invoiceDate: req.body.invoice_date,
        dueDate: req.body.due_date,
        vendorName: req.body.vendor_name,
        address: req.body.remittance_address
    });
    // if(!invoice_number || !total || !currency
    //     || !invoice_date || !due_date || !vendor_name || !remittance_address) {
    //     return res.status(400).json({ msg: 'missing information'});
    // }
    res.status(200).json({ msg: "invoice submitted successfully"});
});

// Update Member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name
                member.email = updMember.email ? updMember.email : member.email

                res.json({ msg: `Member Updated`, member})
            }
        })
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }
});

module.exports = router;