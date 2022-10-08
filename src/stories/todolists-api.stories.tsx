import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {  //чисто д/сторибука. без нее работать не будет
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist().then((res) => {
            debugger
            setState(res.data);
        }).catch((error) => {
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [value, setValue] = useState<string>('')

    // useEffect(() => {
    //     todolistAPI.createTodolist(value).then((res) => {
    //         setState(res.data);
    //     })
    // }, [])

    const createTodolist = () => {
        todolistAPI.createTodolist(value).then((res) => {
            setState(res.data);
        })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
            <button onClick={createTodolist}>create todolist</button>
        </div>
    </div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')

    // useEffect(() => {
    //     const todolistId = '1eb4906a-9500-4504-8f5a-4ce80fa9327b';
    //     const promise = todolistAPI.deleteTodolist(todolistId)
    //     promise.then((res) => {
    //         setState(res.data);
    //     }).catch((error) => {
    //     })
    //
    // }, [])

    const deleteTodolist = () => {
        const promise = todolistAPI.deleteTodolist(todolistId)
        promise.then((res) => {
            setState(res.data);
        }).catch((error) => {
        })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)} />
            <button onClick={deleteTodolist}>delete todolist</button>
        </div>
    </div>
};

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    // useEffect(() => {
    //     //при проверке лучше пис разные Id, т.к. он уже удалил тодолист, а потом я хочу его обновить а его тупо нет и тогда ошибка 500
    //     const todolistId = 'afa147d5-e5fb-44a0-8264-00c2a97358bd'
    //     const promise = todolistAPI.updateTodolist(todolistId, 'TEST>>>>>>>>>')
    //     promise.then((res) => {
    //         setState(res.data)
    //     }).catch((error) => {
    //     })
    //
    // }, [])

    const updateTodolist = () => {
        const promise = todolistAPI.updateTodolist(todolistId, title)
        promise.then((res) => {
            setState(res.data)
        }).catch((error) => {
        })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'title'} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
            <input placeholder={'todolistId'} value={todolistId}
                   onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <button onClick={updateTodolist}>update todolist</button>
        </div>
    </div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    // useEffect(() => {
    //     const todolistId = 'ea066e0c-eb1f-439e-bc44-8212d8571db1';
    //     todolistAPI.getTasks(todolistId).then((res) => {
    //         setState(res.data)
    //     })
    // }, [])

    const getTasks = () => {
        todolistAPI.getTasks(todolistId).then((res) => {
            setState(res.data)
        })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <button onClick={getTasks}>get tasks</button>
        </div>
    </div>
}

export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    // useEffect(() => {
    //     const todolistId = 'e580a530-c33a-4666-ad3e-771de3dafbab';
    //     todolistAPI.createTasks(todolistId, 'new task').then((res) => {
    //         setState(res.data)
    //     })
    // }, [])

    const createTask = () => {
        // const todolistId = 'e580a530-c33a-4666-ad3e-771de3dafbab';
        todolistAPI.createTasks(todolistId, title).then((res) => {
            setState(res.data)
        })
    }
    return <div> {JSON.stringify(state)}

        <div>
            <input placeholder={'todolistId'} value={todolistId}
                   onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'title'} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
            <button onClick={createTask}>create task</button>
        </div>
    </div>
}

export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const [title, setTitle] = useState<string>('title 1')
    const [status, setStatus] = useState<number>(0)
    const [description, setDescription] = useState<string>('description 1')
    const [startDate, setStartDate] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')
    const [priority, setPriority] = useState<number>(0)

    // useEffect(() => {
    //     const todolistId = 'e580a530-c33a-4666-ad3e-771de3dafbab';
    //     const taskId = 'c4c3f2b4-f4d5-413f-90b7-52d990ccebb7'
    //     todolistAPI.updateTasks(todolistId, taskId, title).then((res) => {
    //         setState(res.data)
    //     })
    // }, [])

    const updateTask = () => {
        // const todolistId = 'e580a530-c33a-4666-ad3e-771de3dafbab';
        // const taskId = 'c4c3f2b4-f4d5-413f-90b7-52d990ccebb7'
        todolistAPI.updateTasks(todolistId, taskId, {
            title: title,
            description: description,
            status: status,
            priority: priority,
            startDate: '',
            deadline: '',
        }).then((res) => {
            setState(res.data)
        })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'title'} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
            <input placeholder={'todolistId'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => setTaskId(e.currentTarget.value)}/>
            <input placeholder={'startDate'} value={startDate} onChange={(e) => setStartDate(e.currentTarget.value)}/>
            <input placeholder={'description'} value={description} onChange={(e) => setDescription(e.currentTarget.value)}/>
            <input placeholder={'deadline'} value={deadline} onChange={(e) => setDeadline(e.currentTarget.value)}/>
            <input placeholder={'status'} value={status} onChange={(e) => setStatus(+e.currentTarget.value)}/>
            <input placeholder={'priority'} value={priority} onChange={(e) => setPriority(+e.currentTarget.value)}/>
            <button onClick={updateTask}>update task</button>
        </div>
    </div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    // useEffect(() => {
    //     const todolistId = 'e580a530-c33a-4666-ad3e-771de3dafbab';
    //     const taskId = 'c4c3f2b4-f4d5-413f-90b7-52d990ccebb7'
    //     todolistAPI.deleteTasks(todolistId, taskId).then((res) => {
    //         setState(res.data)
    //     })
    // }, [])

    const deleteTask = () => {
        todolistAPI.deleteTasks(todolistId, taskId).then((res) => {
            setState(res.data)
        })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={'taskId'} value={taskId} onChange={(e) => setTaskId(e.currentTarget.value)}/>
            <input placeholder={'todolistId'} value={todolistId}
                   onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <button onClick={deleteTask}>delete task</button>
        </div>
    </div>
}

