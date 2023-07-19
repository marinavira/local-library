const {findAccountById} = require("./helpers");


function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last;
    const lastNameB = accountB.name.last;
    return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1 : 1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  const { id } = account;
  let total = 0;

  for (let book in books) {
    const { borrows } = books[book];
    borrows.forEach((element) => {
      if (element.id === id) {
        total++;
      }
    });
  }

  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const getAuthorId = (authors, id) => {
  return authors.find((author) => author.id === id);
};const accountId = account.id;

  let result = [];

  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
  });

  result = result.map((book) => {
    const author = getAuthorId(authors, book.authorId);
    const newBook = {
      ...book,
      author
    };

    return newBook;
  });

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
