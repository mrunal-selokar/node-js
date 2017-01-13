var mustache = require("mustache");//mustache is a template engine ejs pug 9jax

result = mustache.render("Hello {{first_name}} {{last_name}}", 
  {
    "first_name": 'Mrunal',
    "last_name": 'Selokar'
  }
)

console.log(result)