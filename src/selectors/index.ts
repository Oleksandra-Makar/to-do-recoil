import { selector } from 'recoil'
import { todoState } from '../store/todoStore'

export const todoListInfo = selector({
    key: 'todoListInfo',
    get: ({ get }) => {
        const todoList = get(todoState)
        const totalNum = todoList.length
        const totalCompletedNum = todoList.filter((item) => item.completed).length

        return {
            totalNum,
            totalCompletedNum,
        }
    },
})
