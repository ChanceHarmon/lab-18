'use strict';

const express = require('express');
const roleRouter = express.Router();

const auth = require('./middleware/auth.js');

roleRouter.get('/public-stuff', (req, res, next) => {
  res.send('public-stuff accessed');
});
roleRouter.get('/hidden-stuff', auth('read'), (req, res, next) => {
  res.send('hidden-stuff accessed');
});
roleRouter.get('/something-to-read', auth('read'), (req, res, next) => {
  res.send('something-to-read accessed');
});
roleRouter.post('/create-a-thing', auth('create'), (req, res, next) => {
  res.send('create-a-thing accessed');
});
roleRouter.put('/update', auth('update'), (req, res, next) => {
  res.send('update accessed');
});
roleRouter.patch('/jp', auth('update'), (req, res, next) => {
  res.send('/jp accessed');
});
roleRouter.delete('/bye-bye', auth('delete'), (req, res, next) => {
  res.send('bye-bye accessed');
});
roleRouter.get('/everything', auth('superuser'), (req, res, next) => {
  res.send('root accessed');
});

module.exports = roleRouter;