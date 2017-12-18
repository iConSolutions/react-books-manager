
/* Import Third Party Dependencies */
const Router = require('express').Router;


const resolveApi = () => {
  // create api router instance
  const api = Router();

  // feed the router
  api.get('/books', (req, res) => res.json({ state: 'done' }));

  // return the api
  return api;
};


module.exports = resolveApi();
