import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '7d5807d9-4ee9-47bf-981f-fcc2c567bea3'
    }
})

export const todolistAPI = {
    getTodolist() {
        return instance.get<Array<TodolistType>>(`todo-lists`)
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<ResponseType>(`todo-lists/${todolistId}`, {title: title})
        return promise
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title})
    },


    getTasks(todolistId: string) {
        return instance.get<TaskType>(`todo-lists/${todolistId}/tasks`)
    },
    createTasks(todolistId: string, title: string) {
        // return instance.post<ResponseType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {title})
        return instance.post<ResponseType<{item: TaskType }>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    updateTasks(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    },
    deleteTasks(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}
export type TaskType = {
    // items: {
    //     addedDate: string
    //     deadline: string
    //     description: string
    //     id: string
    //     order: number   //integer, double
    //     priority: number
    //     startDate: string
    //     status: number
    //     title: string
    //     todoListId: string
    //     isDone: boolean  //Димыч сказал в видео об этой строке
    // }
    // totalCount: number
    // error: null | string

    addedDate: string
    deadline: string
    description: string
    id: string
    order: number
    priority: TaskPriorities
    startDate: string
    status: TaskStatuses
    title: string
    todoListId: string
}
export type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

// type CreateTaskType = {
//     resultCode: number
//     messages: Array<string>
//     data:  {item: TaskType}
//     fieldsErrors: Array<string>
// }
//
// type UpdateTaskType = {
//     resultCode: number
//     messages: Array<string>
//     data: {}
//     fieldsErrors: Array<string>
// }
//
//  type DeleteTaskType = {
//      resultCode: number
//      messages: Array<string>
//      data: {}
//      fieldsErrors: Array<string>
//  }

export type TodolistType = {
    addedDate: string
    id: string
    order: number
    title: string
}

export type ResponseType<T={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}

