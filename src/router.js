import { createBrowserRouter } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import App from "./App";
import Users from "./components/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Page Not Found</h1>,
        children: [
            {
                path: "/todo",
                element: <ToDoList />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/contacts",
                element: <h1>Contacts</h1>,
            },
        ]
    },

]);

export default router;