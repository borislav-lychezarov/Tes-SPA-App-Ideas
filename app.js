async function homeHandlerView(){
    this.partials = {
        header: await this.load('./templates/partials/header.hbs'),
        footer: await this.load('./templates/partials/footer.hbs')
    };
    this.partial('/templates/home.hbs');
}
async function registerHandlerView(){
    this.partials = {
        header: await this.load('./templates/partials/header.hbs'),
        footer: await this.load('./templates/partials/footer.hbs')
    };
    this.partial('/templates/partials/register.hbs'); 
}

async function loginHandlerView(){
    this.partials = {
        header: await this.load('./templates/partials/header.hbs'),
        footer: await this.load('./templates/partials/footer.hbs')
    };
    this.partial('/templates/partials/login.hbs'); 
}

// initialize the application
var app = Sammy('#main', function() {
    // include a plugin
    this.use('Handlebars', 'hbs');
  
    // define a 'route'
    this.get('#/', homeHandlerView);
    this.get('#/home', homeHandlerView);
    this.get('#/register', registerHandlerView);
    this.get('#/login', loginHandlerView);
  });
  
$(function(){
      // start the application
    app.run('#/');
});