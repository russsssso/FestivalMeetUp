import {Events} from "./components/Events";
import {Post} from "./components/Post";
import {Feed} from "./components/Feed";
import LoginTest from "./components/LoginTest";
import {Profile} from "./components/Profile";
import {Messages} from "./components/Messages";

const AppRoutes = [
    {
        index: true,
        //requireAuth: true,
        element: <Feed/>
    },
    {
        path: '/events',
        element: <Events/>
    },
    {
        path: '/post',
        requireAuth: true,
        element: <Post/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/messages',
        element: <Messages/>
    },
    {
        path: '/login-test',
        element: <LoginTest/>
    }
];

export default AppRoutes;
