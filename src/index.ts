import app from './server'
import { PORT } from './config/config'

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(PORT, () => console.log(`server is running on ${PORT}`))
