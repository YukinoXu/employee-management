const express = require('express');
const router = express.Router();
const { Employee } = require('../models/Employee');

router.get('/', (req, res, next) => {
  Employee.all((err, employees) => {
    if (err) {
      return next(err);
    }
    res.send(employees);
  });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Employee.find(id, (err, employee) => {
    if (err) {
      return next(err);
    }
    res.send(employee);
  })
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Employee.delete(id, (err) => {
    if (err) {
      return next(err);
    }
    res.send({ message: 'Deleted' });
  })
});

router.post('/', (req, res, next) => {
  const { first_name, last_name, email, department, hobby } = req.body;
  Employee.create({ first_name: first_name, last_name: last_name, email: email, department: department, hobby: hobby });
  res.send(req.body);
});

module.exports = router;