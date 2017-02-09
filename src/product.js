var chalk = require('chalk');


class Product {
  constructor(name,price) {
  this.name = name;
  this.price = price;
  this.toString = (`$[currency], $[rateCurrency]`)
    const currency = currency || '$';
    const rateCurrency = rateCurrency || 1;
    return chalk.yellow(this.name) + ' cost ' + chalk.red(this.price * rateCurrency) + currency;
  }
}

class Book {
  constructor(name,price,isbn) {
    super (name, price)
    this.isbn = isbn
}
}
Book.prototype = Object.create(Product.prototype, {
  constructor: {value: Book}
});

class DVD {
  constructor(name, price, moovie) {
    super(name, price);
    this.moovie = moovie;
  }
}
DVD.prototype = Object.create(Product.prototype, {
  constructor: {value: DVD}
});
class VideoGame {
  constructor(name, price, platform) {
    super(name, price,platform);
    this.platform = platform;
  }
}
function VideoGame(name, price, platform) {
  Product.apply(this, [name, price]);
  this.platform = platform;
}
VideoGame.prototype = Object.create(Product.prototype, {
  constructor: {value: VideoGame}
});


module.exports = {
  Book: Book,
  DVD: DVD,
  VideoGame: VideoGame
};
