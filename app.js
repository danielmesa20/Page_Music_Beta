const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Handlebars
app.engine('handlebars', exphbs ({ 
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
}));

app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

//Index routes
app.get('/', (req,res) => res.render('paginaPrincipal', {layout: 'main' })); 
app.use('/', require('./routes/rutas'));

const PORT  = process.env.PORT || 8080;
app.listen(PORT, console.log('Server started on port', PORT));
