import { IToDo } from '../interfaces/Todo'

const replaceItemAtIndex = (arr: IToDo[], index: number, newValue: IToDo) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr: IToDo[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export { removeItemAtIndex, replaceItemAtIndex }
