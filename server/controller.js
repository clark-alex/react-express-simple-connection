const todoList = [{title:'sling some code',id:1}, {title: 'dont break my computer',id:2}]

module.exports = {
    read: (req,res)=>{
        res.status(200).send(todoList)
    }
}