const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    birthday: { type: GraphQLString },
    sex: { type: GraphQLString }
    //categoryOptions: {type: CategoryOptionsType}
  })
});

//root query
const RootQuery = new GraphQLObjectType({
  name: "rootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return axios
          .post("http://ec2-52-23-171-165.compute-1.amazonaws.com:8000/graphql")
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
