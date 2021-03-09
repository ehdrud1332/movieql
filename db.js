//Resolver 는 query를 resolve(해결) 한다.
const movies = [
    {
        id: 0,
        name: 'Star Wars - The new one',
        score: 1
    },
    {
        id: 1,
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
];

export const getMovies = () => movies;

export const getById = id => {
    // filter는 모든 대상을 거친 뒤 해당 조건에 맞는 걸 return 한다.
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};


export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};



