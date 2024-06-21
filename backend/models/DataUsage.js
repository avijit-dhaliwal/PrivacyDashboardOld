const DataUsage = sequelize.define('DataUsage', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    dataType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING
    },
    lastAccessed: {
      type: DataTypes.DATE
    }
  });
  
  ConnectedApp.hasMany(DataUsage);
  DataUsage.belongsTo(ConnectedApp);