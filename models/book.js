// eslint-disable-next-line node/no-extraneous-import
import mongoose from "mongoose";

let Schema = mongoose.Schema

let book = new Schema({
    title: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    author: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },

})

let BookDb = mongoose.model('Book', book)

export default BookDb


