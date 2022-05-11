import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Sign-up';
// import ProtectedRoute from './utils/privateRoute';
// import { ProtectedRouteProps } from './type';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

export default function App() {
    // const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    //     authenticationPath: '/login'
    // };
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    {/* <Route path="/sign-up" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<SginUp />}></ProtectedRoute>} /> */}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
