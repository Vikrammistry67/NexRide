import { useNavigate } from "react-router-dom";

const UserprotectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    return token ? children : navigate('/user-login');
}

export default UserprotectedRoute