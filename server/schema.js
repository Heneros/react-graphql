const { buildSchema } = require('graphql')

const schema = buildSchema(`
    
    type User {
        id: ID
        username: String
        age: Int
        posts: [Post]
    }

    type Product {
        id: ID
        name: String
        price: Int
        weight: Int
    }
    type Post {
        id: ID
        title: String
        content: String
    }
    input ProductInput{
        id: ID
        name: String!
        price: Int!
        weight: Int!
    }
    input UserInput {
        id: ID
        username: String!
        age: Int!
        posts: [PostInput]
    }
    input PostInput{
        id: ID
        title: String!
        content: String!
    }
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User

        getAllProducts: [Product]
        getProduct(id: ID): Product
  
    }
    type Mutation {
        createUser(input: UserInput): User
        createProduct(input: ProductInput): Product
    }
`)

module.exports = schema;