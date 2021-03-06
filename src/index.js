const express=require('express');


const PORT= process.env.PORT || 3000
const app=express()

app.use(express.json())
app.get('/', function(req, res){
    res.status(200).send('ok-aws-gcp');
  })
app.get('/hello-world', function(req, res){
    res.status(200).send('hello-awscicd');
  })
app.get('*', function(req, res){
    res.status(400).send('ERROR: Invalid Path.');
  });


app.listen(PORT ,()=>
{
    console.log(`listening on Port ${PORT}`)
})
