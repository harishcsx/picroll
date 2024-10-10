const express = require("express");
const path = require("path");
const app = express();

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
