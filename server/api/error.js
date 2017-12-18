

function ResourceNotFound(message) {
  this.status = 404;
  this.type = 'Resource Not Found';
  this.message = message || 'Resource Not Found';
}


function InternalServerError(message) {
  this.type = 'Resource Not Found';
  this.status = 500;
  this.message = message || 'Internal Server Error';
}


module.exports = {
  ResourceNotFound,
  InternalServerError,
};
