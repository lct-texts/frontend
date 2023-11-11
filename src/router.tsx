import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Conversation } from "./pages/conversation";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '/conversation/:id',
                element: <Conversation />
            }
        ]
    }
])