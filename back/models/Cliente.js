const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema(
  {
    nomeDoCliente: {
      type: String,
      required: true,
      unique: true,
    },
    celular: {
      type: String,
      required: true,
    },
    logradouro: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cliente", ClienteSchema);
