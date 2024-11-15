const sequelize = require('./db');
const User = require('./user');
const Post = require('./post');
const Likes = require('./likes');

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error creating database:', err);
    });
