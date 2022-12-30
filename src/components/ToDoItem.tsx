import { FC } from 'react'
import { IToDo } from '../interfaces/Todo'
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Checkbox,
    IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useRecoilState } from 'recoil'
import { todoState } from '../store/todoStore'
import { removeItemAtIndex, replaceItemAtIndex } from '../utils'

interface IToDoItemProps {
    todo: IToDo
}

const ToDoItem: FC<IToDoItemProps> = ({ todo }) => {
    const [todoList, setTodoList] = useRecoilState<IToDo[]>(todoState)
    const index = todoList.findIndex((listItem) => listItem.id === todo.id)

    const handleChangeStatus = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...todo,
            completed: !todo.completed,
        })
        setTodoList(newList)
    }

    const handleDelete = () => {
        const newList = removeItemAtIndex(todoList, index)
        setTodoList(newList)
    }

    return (
        <ListItem key={todo.id}>
            <ListItemText
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
            >
                {todo.title}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                <Checkbox edge="start" value={todo.completed} onChange={handleChangeStatus} />
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default ToDoItem
