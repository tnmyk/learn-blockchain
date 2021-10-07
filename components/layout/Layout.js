
import Nav from "../Nav/Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      
    </>
  );
};

export default Layout;
