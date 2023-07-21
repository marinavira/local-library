# local-library

This code was built to help the neighborhood library easily lend books and give the patrons information about the books that the library owns.

There are data set files under public/data which include information about accounts, authors, and books. The accounts object contains an array of library patrons with their id number, photo, name, age, company, email, and their date or registration. 
The authors object in the authors file contains their id number and name.
The books object within the books file contains an array that tells us the book's id, title, genre, author id, and gives us a log of borrows. The borrows log also includes the patron's id number and their return status or said book. 


This project uses HTML, JavaScript, and CSS.


Within the src folder, there are files that contain functions for accounts, books, helpers, and the home page.


#public/src/accounts.js

findAccountById() is required by the './helpers' file. The function's two parameters are the accounts and id input. 
The find method is used on the accounts array to check where the input id matches an account id which is then returned. 

The function sortAccountsByLastName() intakes the accounts array. There is a sort() method used on accounts and an arrow function that has two parameters of accountA and accountB. Inside the arrow function two variables, the last names of A and B, are declared. The last line converts the last names to lower-case and then checks which one comes first in the alphabet. 

The getTotalNumberOfBorrows() function intakes two parameters, account and books. Total is declared at zero. A for (let in) loop is used to go through each book in the books array. A forEach() method is then used to go through each element and check if the element's id matched the input id. If true then total is incremented by one. 

The getBooksPossessedByAccount() function intakes three parameters: account, books, and authors. An arrow function is used to set getAuthorId to find an author via matching their id number. A variable called result is declared as an empty array. A filter() method is used to return only the books with matching account ids as well as not having been returned. The books stored in result are then ran through the map() method to create a new array containing only the book and the author. 



#public/src/books.js

findAccountById(), findAuthorById(), and findBookById() are required at the top of the page to be used in lower functions. 

The partitionBooksByBorrowStatus intakes one parameter of books. The variable getNonReturned books is declared with an arrow function. The function uses the filter() method to go through which books have a returned status of not returned. The variable getReturnedBooks has the same functionality, but returns the books that have been returned.  Two variables, nonReturnedBooks and returnedBooks, are then declared as the results of the two arrow functions. Another variable called result is declared as an empty array. NonReturnedBooks and returnedBooks are then pushed into the result variable and returned. 

The getBorrowersForBook() function intakes book and accounts as paramenters. A variable called returnStatus is declared as the 'borrows' value key in books. A new variable called accountInfo is set as an arrow function that uses the map() method on the object return status. The function declares accountInfo as the result of the findAccountById function, intaking accounts and returnStatus.id. newTransaction is declared as an array that contains two spread operators on returnStatus and AccountInfo. These transactions are returned. Result is spliced at 10 and then returned. 


#public/src/home.js 

