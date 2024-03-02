import mongoose from mongoose

const sub_todosSchema = new mongoose.Schema( { } , {timestamps:true})


export const sub_todos = mongoose.model("sub_todos", sub_todosSchema)