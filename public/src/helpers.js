function findAccountById(accounts, id) {
    return accounts.find((account) => account.id===id);
    }



function findAuthorById(authors, id) {
  return authors.find((author)=> 
                     author.id===id);
}

function findBookById(books, id) {
  return books.find((book)=>
                   book.id===id);
}


module.exports = {
  findAccountById,
  findAuthorById,
  findBookById
}