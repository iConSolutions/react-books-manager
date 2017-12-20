
/* Import Third Party Dependencies */
const Router = require('express').Router;

/* Import middlewares */
const BooksMiddleware = require('./middlewares/books');


const resolveApi = () => {
  // create api router instance
  const api = Router();

  // feed the router
  api.get('/books', BooksMiddleware.get);
  api.post('/books', BooksMiddleware.insert);
  api.put('/books/:id', BooksMiddleware.update);
  api.delete('/books/:id', BooksMiddleware.remove);

  // return the api
  return api;
};


module.exports = resolveApi();
