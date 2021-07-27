const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema(
  {
    nomeDoPedido: {
      type: String,
      required: true,
      unique: true,
    },
    precoEncomenda: {
      type: Decimal128,
      required: true,
    },
    valorTotal: {
      type: Decimal128,
      required: true,
    },
    dataEntrega: {
      type: String,
      required: true,
    },
    situaçãoPedido: {
      type: String,
      required: true,
    },
    lancadoEm: {
      type: String,
      required: true,
    },
    clienteId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pedido", PedidoSchema);
