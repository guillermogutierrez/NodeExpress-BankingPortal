const fs = require('fs');
const path = require('path');
const express = require('express');
const { accounts, users, writeJSON } = require('./data.js');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

const app = express();

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));
app.get('/profile', (req, res) => res.render('profile', { user: users[0] }));
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function() {
    console.log('PS Project Running on port 3000!');
})