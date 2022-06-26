var express = require('express')
var router = express.Router()
const { requiresAuth } = require('express-openid-connect')
const axios = require('axios')
var ManagementClient = require('auth0').ManagementClient;

var auth0 = new ManagementClient({
    domain: 'dev-udf2grvz.us.auth0.com',
    clientId: 'QNcjVxzA2HLaDYouDR18QWJOU3WfhvDI',
    clientSecret: '1YYYCv4JSqM-TYNDnJX-ADUlCJXknS538gC4oeWESFF2ldqgjuIvl-34Z9Qh_XDo'
  });

router.get('/', (req, res) => {
    res.render('index', {title: "Auth0 Management API Exercise", 
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
});
    
});



router.get('/secured', requiresAuth(), async (req, res) => {
    let data = {}
    let data2 = {}
    let apiData = {}
    var man_token = ""
    const {token_type, access_token} = req.oidc.accessToken
    
    
        try {
            const apiResponse = await axios.get('https://dev-udf2grvz.us.auth0.com/api/v2/clients',
            {
                headers:{
                    // authorization: `${token_type} ${access_token}`
                    Authorization: `Bearer ${await auth0.getAccessToken()}`
                }
            })
            const apiResponse2 = await axios.get('https://dev-udf2grvz.us.auth0.com/api/v2/actions/actions',
            {
                headers:{
                    // authorization: `${token_type} ${access_token}`
                    Authorization: `Bearer ${await auth0.getAccessToken()}`
                }
            })
            const apiResponse3 = await axios.get('http://localhost:5000/api/private-scoped',
            {
                headers:{
                    authorization: `${token_type} ${access_token}`
                }
            })
            
            data = apiResponse.data
            data2 = apiResponse2.data
            
            apiData = apiResponse3.data

        } catch (error) {
            console.log(error);
        }
        

        res.render('secured', {
            title: "Secure Page", 
            isAuthenticated: req.oidc.isAuthenticated(),
            user: req.oidc.user,
            data,
            data2,
            apiData
            });
       })
        
        

    
    //console.log(req.oidc.accessToken)

    

    //console.log(req.oidc.accessToken);
    
    

module.exports = router;