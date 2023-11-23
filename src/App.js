
import './App.css';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOutPage';
import ProductDetails from './features/product-list/components/ProductDetails';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected>
                <Home></Home>
            </Protected>
        ),
    },
    {
        path: "/login",
        element: (<LoginPage></LoginPage>),
    },
    {
        path: "/signup",
        element: (<SignUpPage></SignUpPage>),
    },
    {
        path: "/cart",
        element: (
            <Protected>
                <CartPage></CartPage>
            </Protected>
        ),
    },
    {
        path: "/checkout",
        element: (
            <Protected>
                <CheckOut></CheckOut>
            </Protected>
        ),
    },
    {
        path: "/productdetails/:id",
        element: (
            <Protected>
                <ProductDetailPage></ProductDetailPage>
            </Protected>
        ),
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
]);


function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);

    useEffect(() => {
        if (user) {
            dispatch(fetchItemsByUserIdAsync(user.id))
        }
    }, [dispatch, user])

    return (
        <div className='App'>
            <RouterProvider router={router} />
            {/* <Home></Home> */}
        </div>
    );
}

export default App;
