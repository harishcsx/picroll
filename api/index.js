const express = require("express");
const path = require("path");
const app = express();
hello
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/submit", (req, res) => {
    const rollNumber = req.query.rollno;
    let imageTag = "";
    
    if (rollNumber) {
        const imageUrl = `https://gietuerp.in/StudentDocuments/${rollNumber}/${rollNumber}.JPG?v=C0UW0kum3QRSiJg_sCLQYuGndgtTm0DayFHCD7x2GPI`;
        imageTag = `<img style="width:150px; border-radius:15px;" src="${imageUrl}">`;
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Image Finder</title>
            <style>
                /* Your CSS */
                 @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap');
        
        body {
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Fira Code', serif;
            background-color: black;
            background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
            text-align: center;
        }

        .box {
            background-color: rgb(213, 213, 213);
            padding: 30px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border: 0.01px solid rgb(60, 60, 60);
            max-width: 90%;
            width: 400px;
        }

        input {
            all: unset;
            width: 100%; /* Ensures the input takes the full width of the parent */
            margin: 20px 0;
            padding: 10px;
            border-radius: 10px;
            background-color: aliceblue;
            border: 0.01px solid rgb(60, 60, 60);
            text-align: center;
            font-size: 1em;
            box-sizing: border-box; /* Ensures padding and borders are included in the element's total width */
        }

        button {
            all: unset;
            background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
            color: white;
            padding: 10px 20px;
            border-radius: 15px;
            font-size: 1em;
        }

        button:hover {
            cursor: pointer;
            background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
        }

        @media (max-width: 600px) {
            body {
                padding: 20px;
            }

            .box {
                padding: 20px;
                width: 100%;
            }

            input {
                font-size: 0.9em;
            }

            button {
                font-size: 0.9em;
                padding: 8px 16px;
            }
        }
            </style>
        </head>
        <body>
            <div class="box">
                <h1>Submit Your Roll Number</h1>
                <form action="/submit" method="GET">
                    <input type="text" id="rollno" name="rollno" placeholder="ROLL NUMBER" required>
                    <button type="submit">Submit</button>
                </form>
                <div style="margin:25px;">${imageTag}</div>
            </div>
        </body>
        </html>
    `);
});

// This line is needed for Vercel
module.exports = app;
