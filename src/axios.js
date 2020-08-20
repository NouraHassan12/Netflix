
import axios from 'axios';

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3'
    ///discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22',
});

export default instance;
