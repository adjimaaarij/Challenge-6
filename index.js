const express = require("express");
// const { json } = require("express/lib/response");
const app = express();
const { Article } = require("./models");

const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");

app.get("/articles/create", (req, res)=>{
  res.render("articles/create");
});

  // post
  app.post("/articles", (req, res) => {
    Article.create({
      title: req.body.title,
      body: req.body.body,
      // approved: req.body.approved,
    })
      .then((a) => res.status(200).json("Berhasil (´･ω･`)"))
      .catch((err) => res.status(400).json("gagal (╥_╥)"));
  });

  app.use(
    express.urlencoded({
      extended: false,
    })
  );
  app.set("view engine", "ejs");
  
  app.get("/articles/destroy", (req, res)=>{
    res.render("articles/destroy");
  });
  

// GET ALL DATA
app.get("/articles", (req, res) => {
    Article.findAll().then((a) => res.render("articles/index", {a}));
  });
  

  // GET BY ID
app.get("/articles/:id", (req, res) => {
    Article.findOne({
      where: { id: req.params.id },
    }).then ((a) => res.render("articles/show", {a}));
    // }).then((a) => res.status(200).json(a));
  });


  app.put("/articles/:id", (req, res) => {
    Article.update(
      {
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved,
      },
      {
        where: { id: req.params.id },
      }
    )
      .then((a) => res.status(201).json("Berhasil (´･ω･`)"))
      .catch((err) => res.status(400).json("gagal (╥_╥)"));
  });

app.listen(port, () => console.log(`running in ${port}`));
app.set('view engine','ejs')