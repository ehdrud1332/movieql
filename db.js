//Resolver 는 query를 resolve(해결) 한다.
export const people = [
    {
        id: "1",
        name: 'seong',
        age: 25,
        gender: "male"
    },
    {
        id: "2",
        name: "Jisu",
        age: 18,
        gender: "female"
    },
    {
        id: "3",
        name: "Japan Guy",
        age: 18,
        gender: "male"
    },
    {
        id: "4",
        name: "Daal",
        age: 18,
        gender: "male"
    },
    {
        id: "5",
        name: "JD",
        age: 18,
        gender: "male"
    },
    {
        id: "6",
        name: "moondaddi",
        age: 18,
        gender: "male"
    },
    {
        id: "7",
        name: "flynn",
        age: 18,
        gender: "male"
    }
];

export const getById = id => {
    // filter는 모든 대상을 거친 뒤 해당 조건에 맞는 걸 return 한다.
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}

