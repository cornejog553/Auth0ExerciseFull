var express = require('express')
var indexRouter = require('./routes/index.js');
const { auth } = require('express-openid-connect');
require('dotenv').config()

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUER,
    clientSecret: process.env.CLIENTSECRET,
    authorizationParams: {
        response_type: 'code',
        audience: "http://localhost:5000",
        scope: 'openid profile email read:data'
    }
  };

var app = express()
app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use('/', indexRouter)

app.listen(3000, () => {
    console.log('Express is running in port 3000');
})
