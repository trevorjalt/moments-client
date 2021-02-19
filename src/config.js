export default {
    API_ENDPOINT: (process.env.REACT_APP_ENV === 'production')
        ? 'https://moments-app-api.herokuapp.com/api'
        : 'http://localhost:8000/api',
    API_TOKEN: process.env.REACT_APP_API_TOKEN,
};