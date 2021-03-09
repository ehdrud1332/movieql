//Resolver 는 query를 resolve(해결) 한다.
<<<<<<< HEAD
const movies = [
    {
        id: 0,
        name: 'Star Wars - The new one',
=======
let movies = [
    {
        id: 0,
        name: "Star Wars = The new one",
>>>>>>> master
        score: 1
    },
    {
        id: 1,
<<<<<<< HEAD
        name: 'Avengers',
        score: 23
    },
    {
        id: 2,
        name: 'The Godfater I',
        score: 34
    },
    {
        id: 3,
        name: 'Logan',
        score: 5
    }
=======
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    },
>>>>>>> master
];

export const getMovies = () => movies;

export const getById = id => {
    // filter는 모든 대상을 거친 뒤 해당 조건에 맞는 걸 return 한다.
<<<<<<< HEAD
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
=======
    const filteredPeople = movies.filter(movie => movie.id === String(id));
    return filteredPeople[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id))
    if(movies.length > cleanedMovies.length) {
        movie = cleanedMovies;
>>>>>>> master
        return true;
    } else {
        return false;
    }
};

<<<<<<< HEAD

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
=======
export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
>>>>>>> master
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

<<<<<<< HEAD

=======
>>>>>>> master

