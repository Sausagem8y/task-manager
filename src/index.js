const express = require("express");
const mongoose = require("mongoose");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word document!"));
//     }

//     cb(undefined, true);

// cb(new Error)('Please upload an image')
// cb(undefined, true)
// cb(undefined, false)
//   },
// });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

// middle-ware example, use next to continue with the rest of the code.
// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

console.log(mongoose.connection.readyState);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const pet = {
  name: "hal",
};

// const Task = require("./models/task");

// const main = async () => {
//   // const task = await Task.findById("61f08b14ede951bc543a5899");
//   // await task.populate("owner");
//   // console.log(task.owner);

//   const user = await User.findById("61f08ad8ede951bc543a588d");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };

// main();

// console.log(JSON.stringify(pet));

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismysigniture", {
//     expiresIn: "7 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismysigniture");
//   console.log(data);
// };

// const bcrypt = require("bcryptjs");

// const myFunction = async () => {
//   const password = "red1234";
//   const hashedPass = await bcrypt.hash(password, 8);

//   const isMatch = await bcrypt.compare("red1234", hashedPass);
//   console.log(isMatch);
// };

// myFunction();
