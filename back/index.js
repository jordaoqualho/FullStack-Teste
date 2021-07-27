const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const clienteRoute = require("./routes/cliente");
const produtoRoute = require("./routes/produto");
const pedidoRoute = require("./routes/pedido");
const userRoute = require("./routes/user");

dotenv.config();
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(console.log("Conectado com MongoDB"))
  .catch((err) => console.log(err));

app.use("/cliente", clienteRoute);
app.use("/produto", produtoRoute);
app.use("/pedido", pedidoRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log("Backend está rodando!");
});
