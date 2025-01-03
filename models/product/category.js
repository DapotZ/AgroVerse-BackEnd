const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/config").sequelize;

const Category = sequelize.define(
  "category",
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Untuk memastikan nama kategori tidak duplikat
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "category", // Menentukan nama tabel yang benar
    timestamps: true, // Pastikan timestamps diaktifkan jika menggunakan createdAt dan updatedAt
  }
);

module.exports = Category;
