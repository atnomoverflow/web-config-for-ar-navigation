import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/Sign-up';
import ProtectedRoute from './utils/privateRoute';
import { ProtectedRouteProps } from './type';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home/Home';
import StandardLayout from './layout/StandardLayout';
import AddBuildingForm from './pages/Add-Building-Form/AddBuildingForm';
import LayerOverview from './pages/LayerOverview/Overview';
import AddLayerForm from './pages/Add-Layer-Form/AddLayerForm';
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
                    path="layer/:id"
                    element={
                        <ProtectedRoute
                            {...defaultProtectedRouteProps}
                            outlet={
                                <StandardLayout>
                                    <LayerOverview />
                                </StandardLayout>
                            }
                        ></ProtectedRoute>
                    }
                />
                <Route
                    path="layer/:id/add-layer"
                    element={
                        <ProtectedRoute
                            {...defaultProtectedRouteProps}
                            outlet={
                                <StandardLayout>
                                    <AddLayerForm />
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
