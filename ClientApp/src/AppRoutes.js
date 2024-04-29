import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { LoginTest } from "./components/LoginTest";

const AppRoutes = [
  {
        index: true,
    //requireAuth: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
    },
   {
    path: '/login-test',
    element: <LoginTest />
    },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
