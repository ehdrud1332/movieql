<<<<<<< HEAD
import { getMovies, getById, addMovie, deleteMovie } from '../db';
=======
import { getMovies, getById, addMovie } from '../db';
>>>>>>> master

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
<<<<<<< HEAD
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
=======
        addMovie: (_, {name, score}) => addMovie(name, score)
>>>>>>> master
    }
};

export default resolvers;

