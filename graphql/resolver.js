//Resolver 는 query를 resolve(해결) 한다.
const jaemin = {
    name: 'seong',
    age: 25,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => jaemin
    }
}

export default resolvers;
