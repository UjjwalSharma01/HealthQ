const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'users',
    timestamps: true
});

// Method to find a user by username
User.findByUsername = async function(username) {
    return await this.findOne({ where: { username } });
};

// Method to create a new user
User.createUser = async function(userData) {
    return await this.create(userData);
};

module.exports = User;