import express from 'express';
import  path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './src/App';

const app = express();

const PORT = 8000;
// any static files from public folder
app.use(express.static('public'));



app.get("*" , (req,res)=>{


    res.send(`
                <!DOCTYPE html>
                    <head>
                        <title>todo app</title>

                    </head>
                    <body>
                        <div id = "root">${renderToString(<App/>)} </div>
                    </body>
                </html>
        `)
})

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`App launched http://localhost/${PORT}`);
})