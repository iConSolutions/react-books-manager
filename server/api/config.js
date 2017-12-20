
module.exports = {
  mongodb: {
    host: '192.168.1.64',
    port: '3001',
    database: 'book_manager',
    url() { return `mongodb://${this.host}:${this.port}/${this.database}`; },
  },
};
