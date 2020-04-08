const express = require("express");
const _ = require("lodash");
const { asyncController } = require("../bin/middleware/asyncController");

const crudGenerator = (
  Model,
  { populateFields } = {
    createProtectecFields: [],
    extraFieldsCreate: () => ({}),
    populateFields: [],
  }
) => {
  const router = express.Router();

  //Recibimos listado del modelo
  router.get(
    "/",
    asyncController(async (req, res) => {
      const listObj = await Model.find().populate(populateFields);
      res.json({ listObj });
    })
  );

  //Crear
  router.post(
    "/create",
    asyncController(async (req, res, next) => {
      const { username, title } = req.body;
      const newModel = new Model(req.body);
      const existingName = await Model.findOne({ username });
      const existingTitle = await Model.findOne({ title });
      if (!existingName || !existingTitle) {
        const obj = await newModel.save();
        res.json(obj);
      }
      res.json({ status: "Data exists" });
    })
  );

  //Obtener Uno
  router.get(
    "/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      await Model.findOne({ _id: id }).then((obj) => {
        res.json(obj);
      });
    })
  );

  //Editar
  router.put(
    "/edit/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      Model.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      }).then((data) => res.json(data));
    })
  );

  //Borrar
  router.get(
    "/delete/:id",
    asyncController(async (req, res, next) => {
      const { id } = req.params;
      await Model.findByIdAndRemove(id);
      return res.json({ status: "Data deleted", id });
    })
  );
  return router;
};

module.exports = { crudGenerator };
