const numbers = [1, 2, 3, 4, 11, 13, 17];

const squares = numbers.map((n) => n * n);

let evens = [];
numbers.forEach((n) => {
  if (n % 2 === 0) {
    evens.push(n);
  }
});

console.log("even number", ...evens);

const author = {
  fullName: "Bob Alice",
  books: ["1984", "Brave New World", "Fahrenheit 451"],
  printBooks() {
    this.books.forEach((bk) => console.log(bk + " by " + this.fullName));
  },
};
author.printBooks();
