import { nanoid } from "nanoid";

const todoReducer = (state, action) => {

    switch (action.type) {
        case 'init':
            return action.payload;
        
        case 'clear':
            return [];

        case 'add':
            return [...state, {
                id: nanoid(),
                title: action.payload,
                done: false,
            }]

        case 'remove':
            return state.filter((task) => task.id !== action.payload)

        case 'toggleDone':
            return state.map((task) => {
                if (task.id === action.payload) {
                    return { ...task, done: !task.done };
                }
                return task;
            })

        default:
            return state;
    }
}

export default todoReducer;