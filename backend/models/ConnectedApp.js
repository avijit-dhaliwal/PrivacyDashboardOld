const ConnectedApp = sequelize.define('ConnectedApp', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provider: {
      type: DataTypes.ENUM('Google', 'Apple'),
      allowNull: false
    },
    appId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastAccessed: {
      type: DataTypes.DATE
    }
  });
  
  User.hasMany(ConnectedApp);
  ConnectedApp.belongsTo(User);