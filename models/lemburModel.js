const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Lembur = sequelize.define("lembur", {
    tanggal: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    jam_mulai: {
      type: DataTypes.TIME,
    },
    jam_selesai: {
      type: DataTypes.TIME,
    },
    tentang: {
      type: DataTypes.TEXT,
    },
    alasan: {
      type: DataTypes.TEXT,
    },
  });

  return Lembur;
};
