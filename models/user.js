"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      photoURL: DataTypes.STRING,
      lat: DataTypes.DOUBLE,
      lon: DataTypes.DOUBLE
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Available, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return User;
};
