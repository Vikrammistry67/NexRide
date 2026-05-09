import app from './src/app.js';
import _config from './src/config/config.js';
import connectToDB from './src/database/db.js';
const PORT = _config.PORT;


connectToDB();
app.listen(PORT, () => console.log(`Authentication Server is listening is running at PORT ${PORT}`));
