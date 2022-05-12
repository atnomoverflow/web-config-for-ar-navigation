import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
interface StandardLayoutProps {
    children?: React.ReactNode;
}
const StandardLayout: React.FC<StandardLayoutProps> = ({ children }) => {
    return (
        <>
            <ResponsiveAppBar />
            {children}
        </>
    );
};
export default StandardLayout;
