
let express = require('express');

let ejs = require('ejs');

let path = require('path');

let app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res)=>{

	res.render('index');	
	
})

let PORT = 7000 || process.env.PORT;

app.listen(PORT, console.log(`Running on port ${PORT}`));
