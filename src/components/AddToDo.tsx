import { FormEvent, useCallback, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { todoState } from '../store/todoStore'
import { v4 as uuidv4 } from 'uuid'

const AddToDo = () => {
    const [title, setTitle] = useState<string>('')

    const setTodoList = useSetRecoilState(todoState)

    const handleSubmit = useCallback(
        (event: FormEvent<EventTarget>) => {
            event.preventDefault()
            if (title) {
                setTodoList((oldTodoList) => [
                    ...oldTodoList,
                    {
                        id: uuidv4(),
                        title: title,
                        completed: false,
                    },
                ])
                setTitle('')
            }
        },
        [title, setTodoList]
    )

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                label="To Do Item"
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
                Add Item
            </Button>
        </form>
    )
}

export default AddToDo
