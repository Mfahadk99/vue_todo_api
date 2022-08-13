import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        description: { type: String, required: true },
        day: { type: String, required: true },
        reminder: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model('Task', taskSchema)

export default Task;
