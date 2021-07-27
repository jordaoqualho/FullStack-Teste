const router = require("express").Router();
const Cliente = require("../models/Cliente");

router.post("/", async (req, res) => {
  try {
    const newCliente = new Cliente({
      nomeDoCliente: req.body.nomeDoCliente,
      celular: req.body.celular,
      logradouro: req.body.logradouro,
    });
    const cliente = await newCliente.save();
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json(err);
  }
});

//EDITAR CLIENTE
router.put("/:id", async (req, res) => {
  try {
    const updatedCliente = await Cliente.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedCliente);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETAR CLIENTE
router.delete("/:id", async (req, res) => {
  const cliente = await Cliente.findById(req.params.id);
  try {
    await cliente.delete();
    res.status(200).json("Cliente foi deletado...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET CLIENTE PELO ID
router.get("/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET TODOS CLIENTES
router.get("/", async (req, res) => {
  try {
    let clientes = await Cliente.find();
    if (req.query.nomeDoCliente) {
      clientes = await Cliente.find({
        nomeDoCliente: { $regex: req.query.nomeDoCliente, $options: "i" },
      });
    }
    res.status(200).json(clientes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
