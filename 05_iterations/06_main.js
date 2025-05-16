const codingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// const values = codingLanguages.forEach((item) => {
//   console.log(item);
// });
// console.log(values);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nums = numbers.filter((nums) => nums > 5);
// console.log(nums);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nums = numbers.filter((nums) => {return nums > 5});
// console.log(nums);

const books = [
  {
    bookName: "One",
    genre: "Fiction",
    publishedYear: 2010,
    editionYear: 2015,
  },
  {
    bookName: "Two",
    genre: "Mystery",
    publishedYear: 2012,
    editionYear: 2018,
  },
  {
    bookName: "Three",
    genre: "Science",
    publishedYear: 2015,
    editionYear: 2020,
  },
  {
    bookName: "Four",
    genre: "Fantasy",
    publishedYear: 2018,
    editionYear: 2021,
  },
  {
    bookName: "Five",
    genre: "History",
    publishedYear: 2020,
    editionYear: 2023,
  },
  {
    bookName: "Six",
    genre: "Biography",
    publishedYear: 2011,
    editionYear: 2014,
  },
  {
    bookName: "Seven",
    genre: "Thriller",
    publishedYear: 2013,
    editionYear: 2017,
  },
  {
    bookName: "Eight",
    genre: "Romance",
    publishedYear: 2016,
    editionYear: 2019,
  },
  {
    bookName: "Nine",
    genre: "Adventure",
    publishedYear: 2017,
    editionYear: 2022,
  },
  {
    bookName: "Ten",
    genre: "Drama",
    publishedYear: 2019,
    editionYear: 2024,
  },
];

let userBooks = books.filter((bk) => {
  return bk.genre === "History";
});
userBooks = books.filter((bk) => {
  return bk.publishedYear >= 2015 && bk.genre === "Science";
});
console.log(userBooks);
