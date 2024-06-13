import Header from "../Header/Header";

const Layout = ({ children, showHeader = true }) => {
    return (
        <>
            { showHeader && <Header /> }
            { children }

        </>
    );
};

export default Layout;
