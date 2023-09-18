const db = require("../models");

// create main Model
const Lembur = db.lembur;

// main work

// 1. create lembur

const addLembur = async (req, res) => {
  let info = {
    tanggal: req.body.tanggal,
    jam_mulai: req.body.jam_mulai,
    jam_selesai: req.body.jam_selesai,
    tentang: req.body.tentang,
    alasan: req.body.alasan,
  };

  const lembur = await Lembur.create(info);
  res.status(200).send(lembur);
  console.log(lembur);
};

// 2. get all lembur

const getAllLemburs = async (req, res) => {
  let lemburs = await Lembur.findAll({
    attributes: ["tanggal", "jam_mulai", "jam_selesai", "tentang", "alasan"],
  });
  res.status(200).send(lemburs);
};

// 3.  get single lembur

const getOneLembur = async (req, res) => {
  let id = req.params.id;
  let lembur = await Lembur.findOne({ where: { id: id } });
  res.status(200).send(lembur);
};

// 4.  update lembur

const updateLembur = async (req, res) => {
  let id = req.params.id;

  const lembur = await Lembur.update(req.body, { where: { id: id } });

  res.status(200).send({ message: "Lembur is updated successfully", id: id });
};

// 5.  delete lembur by id

const deleteLembur = async (req, res) => {
  let id = req.params.id;
  await Lembur.destroy({ where: { id: id } });
  res.status(200).send({ message: "Lembur is deleted", id: id });
};

module.exports = {
  addLembur,
  getAllLemburs,
  getOneLembur,
  updateLembur,
  deleteLembur,
};
