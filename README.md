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

The object getBooksByAuthorId is declared as an arrow function with parameters of books and authorId. The function uses the filter() method to check wether the book's author id matches the input author id.

The function getTotalBooksCount intakes the books array as a parameter. The length of the array is retured. 

The function getTotalAccountsCount intakes the accounts array as a parameter. The length of that array is returned. 

The function getBooksBorrowedCount intakes the books array as a parameter. Within the function, a variable called borrowedCount is decalred at zero. An arrow funtion using the forEach() method on the book counter is used along with an if statement to check if each book item's return status is false. If it is false, the the borrowedCount will increase by one. 


GetMostCommonGenres intakes the books array as a parameter. This function returns an array with the most common genres. The list is ordered from most common to least and is split to only return the top five. The new array that is returned will only two keys: the name of the genre and how many occurrences it has. 

GetMostPopularBooks intakes the book array as a parameter. A new array is returned containing the name of the book and the number of times it has been checked out. If the function returns more than five book, the return will retuen only the top five. 

GetMostPopularAuthors intakes two parameters: an array of books and an array of authors. The function works by making a new array with map() which will contain the authors name and an accumulated count of their borrows. The order is changed to start from most popular to least using sort(). That list is then cut at five using splice(). 


#public/src/helpers.js 

The following function are used throughout multiple .js files. It is helpful to have them stored in a seperate file to be required on necessary pages. 

The findAccountById() function intakes the accounts array and an id. The find() method is then used on the accounts array to search for an account id that matches an input id.

The findAuthorById() function intakes the authors array and an id. The find() method is then used on the authors array to search for an author id that matches the input id.

The findBookById() function intakes the books array and an id. The find() method is used on the books array to search and return a book with a matching id.
