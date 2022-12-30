import { atom } from 'recoil'
import { IToDo } from '../interfaces/Todo'

const todoState = atom<IToDo[]>({
    key: 'Todos',
    default: [{ id: '2', title: 'Code', completed: false }],
})

export { todoState }
