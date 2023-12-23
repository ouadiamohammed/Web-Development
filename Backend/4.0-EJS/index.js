import express from "express";


const app = express();
const port = 3000;

app.get("/", (rq, res) => {
    const today = new Date;
    const day = today.getDay();

    //console.log(day);
    let type = "a weekday";
    let adv = "it's time to word hard";

    if (day === 0 || day === 6) {
        type = "The Weekend";
        adv = "it's time to have fun";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});