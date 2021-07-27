const router = require("express").Router();
const Pedido = require("../models/Pedido");

router.post("/novo", async (req, res) => {
  try {
    const newPedido = new Pedido({
      nomeDoPedido: req.body.nomeDoPedido,
      precoEncomenda: req.body.precoEncomenda,
      valorTotal: req.body.valorTotal,
      dataEntrega: req.body.dataEntrega,
      situaçãoPedido: req.body.situaçãoPedido,
      lancadoEm: req.body.lancadoEm,
      clienteId: req.body.clienteId,
    });
    const pedido = await newPedido.save();
    res.status(200).json(pedido);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
