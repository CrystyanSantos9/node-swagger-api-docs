const express = require('express');
const router = express.Router();


router.get('/', (_, res)=>{
    res.send('Ola, galerianha')
})


router.post('/login', (req, res)=>{

/*

    #swagger.description = 'Route for user authentication'
*/

/*
    #swagger.parameters['email'] = {
        description: 'E-mail do usuário.',
        type:'string',
        required:true,
        in:'body',
        example:'user@email.com'
    },

    #swagger.parameters['password'] = {
        description: 'Senha do usuário.',
        type: 'string',
        required: true,
        in: 'body',
        example: 'sfffss!fs1',
    }
*/

    try{
        const {email, password} = req.body
        

        if(!(email && password)){
            res.status(400).send('Missing parameters. You must send email and password!')
        }else{
            res.status(200).send('OK')
        }
    }catch(e){
        res.status(500).send('Internal Server Error')
    }
})



router.get('/data', (req, res)=>{
    const consulta = req.query.consulta
    console.log(consulta)
    res.json({title: 'Data', content: 'Something'})
})

module.exports = router;