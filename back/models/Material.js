const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema(
  {
    descricao: {
      type: String,
      required: true,
      unique: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    ativo: {
      type: Boolean,
      required: true,
    },
    dataInativacao: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Materiai", MaterialSchema);
