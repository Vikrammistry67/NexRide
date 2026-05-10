import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Approutes from './Routes/Approutes.jsx';

createRoot(document.getElementById('root')).render(
    <Approutes>
        <App />
    </Approutes>
)
