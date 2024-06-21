const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://dashboard_user:your_password@localhost:5432/privacy_dashboard');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  googleId: {
    type: DataTypes.STRING,
    unique: true
  },
  appleId: {
    type: DataTypes.STRING,
    unique: true
  },
  lastLogin: {
    type: DataTypes.DATE
  }
});

module.exports = User;