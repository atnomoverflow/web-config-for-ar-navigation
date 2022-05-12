import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Sign-up';
import ProtectedRoute from './utils/privateRoute';
import { ProtectedRouteProps } from './type';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home/Home';
import StandardLayout from './layout/StandardLayout';
import AddBuildingForm from './pages/Add-Building-Form/AddBuildingForm';
export default function App() {
    const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
        authenticationPath: '/login'
    };
    return (
        <AuthProvider>
            <Routes>
                <Route
                    path="add-building"
                    element={
                        <ProtectedRoute
                            {...defaultProtectedRouteProps}
                            outlet={
                                <StandardLayout>
                                    <AddBuildingForm />
                                </StandardLayout>
                            }
                        ></ProtectedRoute>
                    }
                />
                <Route
                    path=""
                    element={
                        <ProtectedRoute
                            {...defaultProtectedRouteProps}
                            outlet={
                                <StandardLayout>
                                    <Home />
                                </StandardLayout>
                            }
                        ></ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                {/* <Route path="/sign-up" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<SginUp />}></ProtectedRoute>} /> */}
            </Routes>
        </AuthProvider>
    );
}
