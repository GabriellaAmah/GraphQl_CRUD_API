import {buildSchema} from "graphql";

const bookSchema = buildSchema(`
type Author {
    name : String!
    address : String!
}

type Book {
    _id : ID!
    title : String!
    genre : String!
    author : Author!
}

input BookDetails {
    title : String!
    genre : String!
    authorName : String!
    authorAdd : String !
}

type message {
    text : String!
}

type Query {
    getBooks : [Book!]!
}

type Mutation {
    addBook(userInput : BookDetails) : Book!
    editBook(bookId : ID!,  userInput : BookDetails) : Book!
    deleteBook(bookId : ID!) : message !
}
`);

export default bookSchema;
