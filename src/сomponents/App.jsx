import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes.js";
import Layout from "./Layout/Layout";
import { Loader } from "./Loader/Loader.jsx";
import { useDispatch } from "react-redux";
import { refreshThunk } from "../redux/auth/auth-operations.js";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const News = lazy(() => import("../pages/News"));
const Notices = lazy(() => import("../pages/Notices"));
const Friends = lazy(() => import("../pages/Friends"));
const Login = lazy(() => import("../pages/LoginPage"));
const Registration = lazy(() => import("../pages/RegisterPage"));

export const appRoutes = [
    {
        path: ROUTES.HOME_ROUTE,
        element: <HomePage />,
    },
    {
        path: ROUTES.NEWS_ROUTE,
        element: <News />,
    },
    {
        path: ROUTES.NOTICES_ROUTE,
        element: (
            // <PrivateRoute>
            <Notices />
            // </PrivateRoute>
        ),
    },
    {
        path: ROUTES.FRIENDS_ROUTE,
        element: (
            // <PrivateRoute>
            <Friends />
            // </PrivateRoute>
        ),
    },
    {
        path: ROUTES.LOGIN_ROUTE,
        element: (
            // <RestrictedRoute>
            <Login />
            // </RestrictedRoute>
        ),
    },
    {
        path: ROUTES.REGISTRATION_ROUTE,
        element: (
            // <RestrictedRoute>
            <Registration />
            // </RestrictedRoute>
        ),
    },
];

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshThunk());
    }, [dispatch]);

    return (
        <>
            <Layout>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {appRoutes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Suspense>
            </Layout>
            {/* <ToastContainer /> */}
        </>
    );
};

export default App;
