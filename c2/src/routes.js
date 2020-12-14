const express = require('express');
const PeopleController = require('./Controller/PeopleController');

const router = require('express').Router();

router.route('/people')
    .get(PeopleController.index)
    .post(PeopleController.store);


router.route('/people/:id')
    .patch(PeopleController.update)
    .put(PeopleController.update)
    .delete(PeopleController.delete)

module.exports = router;