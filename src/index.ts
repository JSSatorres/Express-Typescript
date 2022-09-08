import app from './server'
import { PORT } from './config/config'

app.listen(PORT, () => console.log(`server is running on ${PORT}`))
