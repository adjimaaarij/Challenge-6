const {Article} = require("./models");

Article.create({
    title: "h123",
    body: "kamu",
    approved: false,
}).then((article) => console.log(article));
