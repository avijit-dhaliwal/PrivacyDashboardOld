const PrivacyPolicy = sequelize.define('PrivacyPolicy', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    fullText: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT
    },
    lastUpdated: {
      type: DataTypes.DATE
    }
  });
  
  ConnectedApp.hasOne(PrivacyPolicy);
  PrivacyPolicy.belongsTo(ConnectedApp);