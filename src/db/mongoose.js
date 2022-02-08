const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  // mongodb+srv://root:Abc123@cluster0.aszvs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  // useNewUrlParser: true,
  // useCreateIndex: true,
});

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// });

// const newTask = new Task({
//   description: "eat food",
// });

// newTask
//   .save()
//   .then(() => {
//     console.log(newTask);
//   })
//   .catch((e) => {
//     console.log("error!", e);
//   });
