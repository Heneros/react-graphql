const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require('./schema');
const users = [{ id: 1, username: "Rustam", age: 9999999}];

const app = express();
app.use(cors());

const root = {
    getAllUsers: () => {
        return users;
    },
    getUser: ({ id }) => {
        return user.find(user => user.id == id)
    }
}


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))


app.listen(5000, () => console.log("Server started")) 