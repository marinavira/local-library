const getBooksByAuthorId = (books, authorId) => {
  return books.filter((book) => book.authorId === authorId);
};


function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}



function getBooksBorrowedCount(books) {
  let borrowedCount = 0;
  books.forEach((book)  => {
    if (book.borrows[0].returned===false){
      borrowedCount++;
    }
  });
  return borrowedCount;
}



function getMostCommonGenres(books) {
 const result = books.reduce((acc, book) => {
   const genre = book.genre; 
   const genreName = acc.find((element) => element.name === genre);

    if (!genreName) {
      const newGenre = {
        name: genre,
        count: 1,
      };
      acc.push(newGenre);
    } else {
      genreName.count++;
    }

    return acc;
  }, []);
  result.sort((genreA, genreB) => genreB.count - genreA.count);

  result.splice(5);

  return result;
}




function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popularBooks = {
      name: book.title,
      count: book.borrows.length,
    };

    return popularBooks;
  });
  
  result.sort((titleA, titleB) => titleB.count - titleA.count);

  result.splice(5);

  return result;
}

function getMostPopularAuthors(books, authors) {
 const result = authors.map((author) => {
    const fullName = `${author.name.first} ${author.name.last}`;
    const booksByAuthor = getBooksByAuthorId(books, author.id);
    const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0);
    const newAuthorInfo = {
      name: fullName,
      count: totalBorrows,
    };

    return newAuthorInfo;
  });

  result.sort((authorA, authorB) => authorB.count - authorA.count);

  result.splice(5);
  return result;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
