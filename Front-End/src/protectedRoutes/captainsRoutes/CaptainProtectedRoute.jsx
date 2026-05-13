import { useNavigate } from "react-router-dom";

const CaptainProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('captainToken');
    const navigate = useNavigate();
    return token ? children : navigate('/captain-login');
};

export default CaptainProtectedRoute