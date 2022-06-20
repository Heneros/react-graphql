const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require('./schema');
const users = [{ id: 1, username: "Rustam", age: 9999999 }];
const products = [{ id: 12, name: "ds", price: 9999999, weight: 45 }];
const app = express();
app.use(cors());


const createUser = (input) => {
    const id = Date.now();
    return {
        id, ...input
    }
}

const createProduct = (input) => {
    const id = Date.now();
    return {
        id, ...input
    }
}


const root = {
    getAllProducts: () => {
        return products;
    },

    getProduct: ({ id }) => {
        return product.find(product => product.id == id)
    },

    createProduct: ({ input }) => {
        const product = createProduct(input)
        products.push(product)
        return product;
    },




    getAllUsers: () => {
        return users;
    },
    getUser: ({ id }) => {
        return user.find(user => user.id == id)
    },
    createUser: ({ input }) => {
        const user = createUser(input)
        users.push(user)
        return user;
    }
}


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))


app.listen(5000, () => console.log("Server started")) 