const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema(
  {
    nomeDoProduto: {
      type: String,
      required: true,
      unique: true,
    },
    precoEncomenda: {
      type: Number,
      required: true,
    },
    precoVitrine: {
      type: Number,
      required: true,
    },
    vendidos: {
      type: Number,
      required: true,
    },
    tipoDoProduto: {
      type: String,
      required: true,
    },
    vendidoPor: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Produto", ProdutoSchema);
