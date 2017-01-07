import { graphql, buildSchema } from 'graphql'
import graphqlHTTP from 'express-graphql'

class GraphQL {
    constructor(app) {


        this.app = app;
        this.schema = buildSchema(`
          type Query {
            hello: String
          }
        `);
        this.root = {
            hello: ()=> {
                return 'Hello World';
            }
        }


        console.log('GraphQL Handler Built');


        this.app.use('/api/query', graphqlHTTP({
            schema: this.schema,
            rootValue: this.root,
            graphiql: true,
        }));

    }
    
    runNetQuery() {

    }

    runQuery() {
        // Run the GraphQL query '{ hello }' and print out the response
        graphql(this.schema, '{ hello }', this.root).then((response) => {
            console.log(response);
        });

    }

}

export default GraphQL