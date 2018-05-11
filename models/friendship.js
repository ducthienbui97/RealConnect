"use strict";
module.exports = (sequelize, DataTypes) => {
  var Friendship = sequelize.define(
    "Friendship",
    {
      friend1: DataTypes.INTEGER,
      friend2: DataTypes.INTEGER
    },
    {}
  );
  Friendship.associate = function(models) {
    // associations can be defined here
  };
  return Friendship;
};
