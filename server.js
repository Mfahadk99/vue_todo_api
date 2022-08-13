import express from 'express'
import cors from 'cors'
import expressAsyncHandler from 'express-async-handler'
import mongoose from 'mongoose';
import Task from './model/taskModel.js';



var app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://mfkfahad:fahadk9422@vue-todo-cluster.eg0ykxs.mongodb.net/vue-todo").then(() => {
  console.log("Connected")
}).catch((err) => {
  console.log(err)
});



app.get('/', expressAsyncHandler(async (req, res) => {
  const data = await Task.find({});
  res.send(data)
}))


// app.get('/api/tasks/:id', expressAsyncHandler(async (req, res) => {
//   const data = await Task.findById(req.params.id);
//   res.send(data)
// }))

app.put('/api/tasks/:id', expressAsyncHandler(async (req, res) => {
  let task = await Task.findById(req.body.id);

  if (task) {

    // const updTask = { ...task, reminder: !task.reminder };

    task.reminder = !task.reminder

    console.log("updTask==>", task)

    const updateTask = await task.save();
    res.send(updateTask)
  }
}));

app.get('/api/tasks/:id', expressAsyncHandler(async (req, res) => {

  // const taskId = req.body.id
  // console.log(taskId)
  // await Task.findByIdAndRemove(taskId, (err, doc) => {
  //   if (!err) {
  //     res.status(200).send({ message: "User Deleted Successfully!" })
  //   } else {
  //     res.send({ message: "Uncaught Error!!" })
  //   }
  // });

  // console.log(task)

}))


const server = process.env.PORT || 9000;
app.listen(server, () => {
  console.log(`Serve at http://localhost:${server}`);
});
