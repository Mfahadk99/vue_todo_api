import express from 'express'
import expressAsyncHandler from 'express-async-handler'


const taskRouter = express.Router();

taskRouter.get('/tasks', expressAsyncHandler((req, res, next) => {
    res.send("yes its working")
}))


export default taskRouter