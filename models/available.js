'use strict';
module.exports = (sequelize, DataTypes) => {
  var Available = sequelize.define('Available', {
    from: DataTypes.DATE,
    to: DataTypes.DATE
  }, {});
  Available.associate = function(models) {
    // associations can be defined here
      Available.belongsTo(models.User,{
        foreignKey: "userId",
        onDelete: "CASCADE"
      })
  };
  return Available;
};