const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
import GraphQL from './database/graphQL'
//import { graphql, buildSchema } from 'graphql'
//import graphqlHTTP from 'express-graphql'
import CloudAntHandler from './database/cloudAnt'


const app = express()
//const graphQL = new GraphQL(app);
//graphQL.runQuery();


const usernameCloudAnt = "a6098285-0d14-4577-b091-d825336caf8a-bluemix";
const passwordCloudAnt = "30e777f759473ea9e4b632a6b99c2e4e7338ccb5c93133953f3890965a8d0424";
const cloudAnt = new CloudAntHandler(usernameCloudAnt,passwordCloudAnt)


// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3000

// mount static frontend to express
app.use(express.static(path.join(__dirname, '..', 'dist')))

// mount parser for applicaton/json content
app.use(bodyParser.json({ limit: '1mb' }))

/*
 * API endpoints
 */
app.get('/api/example', (req, res) => {
    console.log('Test')
    res.send({ message: 'example GET endpoint' })
})

app.get('/api/getArrivals',(req,res)=>{

    /*return new Promise(function(resolve,reject){
        cloudAnt.getArrivals();

    })*/
    console.log('New Arrivals Requested');
    /*var arrivalPromise=Promise.resolve(cloudAnt.getArrivals()).then(function(){
        console.log('Done')
    })*/
    var promise=new Promise((resolve,reject)=>{
        cloudAnt.getArrivals(data=>{
            if(data){
                resolve(data);

            }else{
                console.log('didnt work')
            }
        });
    })


    promise.then(function(data) {
        res.send(data)
    })

//cloudAnt.getArrivals()
   //var promise=cloudAnt.getArrivals();

    /*cloudAnt.getArrivals((err, data) => {
        res.send(data)
    });
*/
    

})

// Construct a schema, using GraphQL schema language
/*const schema = buildSchema(`
  type Query {
    hello: String
  }
`);*/

// The root provides a resolver function for each API endpoint
/*var root = {
    hello: () => {
        return 'Hello world!';
    },
};*/


/*app.use('/api/query', graphqlHTTP({
 schema: schema,
 rootValue: root,
 graphiql: true,
 }));*/


// reroute all html (non-api) requests to index.html so browserHistory in react-router works
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

// Start the app
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
})
