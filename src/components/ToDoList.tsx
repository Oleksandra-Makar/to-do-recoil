import { List } from '@mui/material'
import ToDoItem from './ToDoItem'
import { useRecoilValue } from 'recoil'
import { todoState } from '../store/todoStore'

const ToDoList = () => {
    const todoList = useRecoilValue(todoState)

    return (
        <List>
            {todoList.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </List>
    )
}

export default ToDoList
