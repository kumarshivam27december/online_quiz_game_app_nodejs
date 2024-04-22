import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

/** import connection file */
import connect from './database/conn.js';


const app = express();

/**app midddleware */

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();


/**application port */
const port = process.env.PORT||8080;


/**routes */
app.use('/api',router)/**apis */


app.get('/',(req,res)=>{
    try {
        res.json("get request")
    } catch (error) {
        res.json("error")
    }
})


/**start server only when we have valid connection */

connect().then(()=>{
    try {
        app.listen(8080,()=>{
            console.log(`Server connected to https://localhost:${port}`)
        })  
    } catch (error) {
        console.log("cannot connect to the server")
    }

}).catch(error=>{
    console.log("Invalid database connection");
})


