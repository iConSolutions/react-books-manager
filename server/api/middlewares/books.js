
/* Import Collections */
const Book = require('../collections/book');

/* Import Error Object */
const Error = require('../error');


const get = (req, res, next) => {
  // resolve search params
  const filters = {
    search: req.query.q,
    limit: parseInt(req.query.limit, 10) || 10,
    page: parseInt(req.query.page, 10) || 1,
  };
  Book.paginate(filters.search !== '' ? { title: { $regex: `.*${filters.search}.*` } } : {}, {
    limit: filters.limit || 10,
    page: filters.page || 1,
  }, (err, result) => {
    if (err) {
      return next(Error.InternalServerError());
    }
    return res.json(result);
  });
};


/**
 * insert new book
 *
 * @param req
 * @param res
 * @return {Object}
 */
const insert = (req, res, next) => {
  // resolve book data from request's body
  const data = req.body;

  // create book instance
  const book = new Book({
    title: data.title,
    author: data.author,
    description: data.description ? data.description : '',
  });

  // save the book
  book.save((err) => {
    if (err) {
      return next(Error.InternalServerError(err.toString()));
    }
    return res.json({
      created: true,
    });
  });
};


/**
 * remove a book by id
 *
 * @param req
 * @param res
 * @return {Object}
 */
const remove = (req, res, next) => {
  // remove the selected book
  Book.findByIdAndRemove(req.params.id, (err, book) => {
    if (err) {
      return next(Error.InternalServerError(err.toString()));
    } else if (book === null) {
      return next(Error.ResourceNotFound(`Resource with id (${req.params.id}) not found`));
    }
    return res.json({
      deleted: true,
    });
  });
};


/**
 * update a book by id
 *
 * @param req
 * @param res
 * @param next
 * @return {Object}
 */
const update = (req, res, next) => {
  // resolve book data from request's body
  const data = req.body;

  // update the book
  Book.findByIdAndUpdate(req.params.id, data, (err, book) => {
    if (err) {
      return next(new Error.InternalServerError(err.toString()));
    } else if (book === null) {
      return next(new Error.ResourceNotFound(`Resource with id (${req.params.id}) not found`));
    }
    return res.json({
      updated: true,
    });
  });
};


module.exports = {
  get,
  insert,
  remove,
  update,
};
