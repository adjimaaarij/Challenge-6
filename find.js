const { Article } = require("./models");

Article.findAll().then((a) => console.log(a));
// Article.findOne({
//   where: { id: 1 },
// })
//   .then((e) => console.log(e))
//   .catch((err) => console.log(err));
