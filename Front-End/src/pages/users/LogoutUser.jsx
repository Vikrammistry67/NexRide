import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LogoutUser = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    try {
        axios.get('http://localhost:3000/api/auth/users/logout', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status == 200) {
                localStorage.removeItem('token');
                navigate('/user-login');
            }
        });
    } catch (error) {
        console.log(error)
    }

    return (
        <div>LogoutUser</div>
    )
}

export default LogoutUser