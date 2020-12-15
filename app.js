/* eslint-disable node/no-extraneous-import */
import express from 'express';
import {default as bodyParser} from 'body-parser';
import {graphqlHTTP} from 'express-graphql';
import bookSchema from './graphQlSchema/schema.js';
import bookResolver from './graphqlResolver/resolver.js';
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

app.use(bodyParser.json());

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema : bookSchema,
    rootValue : bookResolver,
    graphiql : true
}))

mongoose.connect('mongodb://localhost:27017/gabbiee', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(8080, () => console.log('server connected'))
})
.catch(err => console.log(err))

