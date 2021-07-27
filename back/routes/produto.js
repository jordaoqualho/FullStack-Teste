const router = require("express").Router();
const Produto = require("../models/Produto");

//ADICIONA NOVO PRODUTO
router.post("/", async (req, res) => {
  try {
    const newProduto = new Produto({
      nomeDoProduto: req.body.nomeDoProduto,
      precoEncomenda: req.body.precoEncomenda,
      precoVitrine: req.body.precoVitrine,
      vendidos: req.body.vendidos,
      tipoDoProduto: req.body.tipoDoProduto,
      vendidoPor: req.body.vendidoPor,
    });
    const produto = await newProduto.save();
    res.status(200).json(produto);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET TODOS PRODUTOS
router.get("/", async (req, res) => {
  try {
    let produtos = await Produto.find();
    if (req.query.tipoDoProduto || req.query.nomeDoProduto) {
      if (req.query.tipoDoProduto.length < 1) {
        produtos = await Produto.find({
          nomeDoProduto: { $regex: req.query.nomeDoProduto, $options: "i" },
        });
      } else {
        produtos = await Produto.find({
          nomeDoProduto: { $regex: req.query.nomeDoProduto, $options: "i" },
          tipoDoProduto: req.query.tipoDoProduto,
        });
      }
    }
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETA TODOS PRODUTOS
router.delete("/deletar-todos", async (req, res) => {
  try {
    await Produto.deleteMany();
    res.status(200).json("Todos produtos deletados!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUTO BY ID
router.get("/:id", async (req, res) => {
  try {
    let produto = await Produto.findById(req.params.id);

    res.status(200).json(produto);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE PRODUTO BY ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProduto = await Produto.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduto);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE PRODUTO BY ID
router.delete("/:id", async (req, res) => {
  try {
    await Produto.findByIdAndDelete(req.params.id);
    res.status(200).json("Produto deletado com sucesso!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
