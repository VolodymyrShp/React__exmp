import express, { json, urlencoded } from "express"
import fs from 'fs'
import routes from './routes/route'
import cors from 'cors'
const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: '*',
}));
app.use(json())
app.use(urlencoded({ extended: false }));
app.use('/', routes)
app.all('*', (req, res) => res.status(400).send('Status: Bad Request'))
app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`))