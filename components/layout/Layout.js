import { AuthProvider } from "../../context/AuthContext";
import Nav from "../Nav/Nav";
const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <Nav />
      {children}
    </AuthProvider>
  );
};

export default Layout;
