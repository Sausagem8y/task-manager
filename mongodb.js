// CRUD create read update delete

// const mongodb = require("mongodb");
// const mongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database!");
//     }

// const db = client.db(databaseName);

// db.collection("users").findOne({ name: "billy" }, (error, user) => {
//   if (error) {
//     return console.log("unable to fetch");
//   }

//   console.log(user);
// });

// db.collection("tasks").findOne(
//   { _id: new ObjectID("61de14cecae8a649340cb61e") },
//   (error, task) => {
//     console.log(task);
//   }
// );

// db.collection("tasks")
//   .find({ completed: false })
//   .toArray((error, tasks) => {
//     console.log(tasks);
//   });

// db.collection("users")
//   .find({ age: 27 })
//   .toArray((error, users) => {
//     console.log(users);
//   });

//     db.collection("users")
//       .find({ age: 27 })
//       .count((error, count) => {
//         console.log(count);
//       });

// const updatepromise = db
//   .collection("users")
//   .updateOne(
//     {
//       _id: new ObjectID("61de1091e7d3c904d83d4adc"),
//     },
//     {
//         $inc: {
//           age: -6,
//         },
//       }
//     )
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// db.collection("tasks")
// .updateMany(
//   {
//     completed: false,
//   },
//   {
//     $set: {
//       completed: true,
//     },
//   }
// )
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// });

// db.collection("users")
//   .deleteMany({
//     age: 27,
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//     db.collection("tasks")
//       .deleteOne({
//         _id: new ObjectID("61de14cecae8a649340cb61e"),
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// );
