const express = require("express");
const mongoose= require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 3002;
// app.use(cors());
app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
app.use('/user', userRoutes);
const expenseRoutes = require("./routes/ExpenseRoutes");
app.use('/expense', expenseRoutes);
const expenseSubCatRoutes = require("./routes/ExpenseSubCatRoutes");
app.use('/expenseSubCat', expenseSubCatRoutes);

mongoose.connect("mongodb+srv://SujalNayak:Sujal@1504@cluster0.m2sykrx.mongodb.net/ExpenseManager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Connected Successfully...");
}).catch((err)=>{
    console.log("error..",err);
})


app.listen(PORT, () => {
    console.log("server started on port 3002...");
  });
