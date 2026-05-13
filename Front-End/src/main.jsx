import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Approutes from './Routes/Approutes.jsx';
import UserContextProvider from './context/UserContextProvider.jsx';

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <Approutes>
            <App />
        </Approutes>
    </UserContextProvider>
)
