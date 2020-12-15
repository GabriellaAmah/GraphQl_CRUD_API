/* eslint-disable no-unused-vars */
/* eslint-disable node/no-unsupported-features/es-syntax */
import BookDb from "../models/book.js";

const bookResolver = {
  addBook: async (args, req) => {
    const { userInput } = args;

    const newBook = new BookDb({
      title: userInput.title,
      genre: userInput.genre,
      author: { name: userInput.authorName, address: userInput.authorAdd },
    });

    const savedBook = await newBook.save();

    return { ...savedBook._doc }
  },

  getBooks: async () => {
    const books = await BookDb.find()

    return books
  },

  editBook: async ({ bookId, userInput }, req) => {
  
    const { title, genre, authorName, authorAdd } = userInput

    const bookToEdit = await BookDb.findOne({ _id : bookId })

    bookToEdit.title = title,
      bookToEdit.genre = genre,
      bookToEdit.author = { name: authorName, address: authorAdd }

    let savedEdit = await bookToEdit.save()

  
    return savedEdit

  },

  deleteBook : async ({bookId}) => {
    const bookToDelete =await BookDb.findOne({_id : bookId})

    if(!bookToDelete){
      return {text : 'book with id not found'}
    }

    const bookDelete = await BookDb.findByIdAndDelete(bookId)

    return {text : 'this book has been sucessfully deleted'}
  }
};


export default bookResolver