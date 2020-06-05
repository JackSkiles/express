'use strict';
module.exports = (sequelize, DataTypes) => {
  const Invoices = sequelize.define('Invoices', {
    invoiceNumber: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    invoiceDate: DataTypes.STRING,
    dueDate: DataTypes.STRING,
    vendorName: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Invoices.associate = function(models) {
    // associations can be defined here
  };
  return Invoices;
};