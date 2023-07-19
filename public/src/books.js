const {findAccountById} = require("./helpers");
const {findAuthorById} = require("./helpers");
const {findBookById} = require ("./helpers");




function partitionBooksByBorrowedStatus(books) {
  const getNonReturnedBooks = (books) => {
  return books.filter((book) => book.borrows.some((returnStatus) => !returnStatus.returned));
};

const getReturnedBooks = (books) => {
  return books.filter((book) => book.borrows.every((returnStatus) => returnStatus.returned));
};

  const nonReturnedBooks = getNonReturnedBooks(books);

  const returnedBooks = getReturnedBooks(books);

  const result = [];

  result.push(nonReturnedBooks);

  result.push(returnedBooks);

  return result;
}



function getBorrowersForBook(book, accounts) {
  
  
  const returnStatus = book.borrows;

  const result = returnStatus.map((returnStatus) => {
    const accountInfo = findAccountById(accounts, returnStatus.id);
    const newTransaction = {
      ...returnStatus,
      ...accountInfo,
    };
    return newTransaction;
  });

  result.splice(10);

  return result;

}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
