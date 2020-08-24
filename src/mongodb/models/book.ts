import * as mongoose from "mongoose";

//const books = [
//{
//title: "Harry Potter and the Chamber of Secrets",
//publicationDate: 2010,
//author: "J.K. Rowling",
//pages: 400,
//publisher: {
//location: "New York",
//size: 100,
//},
//price: 20,
//inStock: true,
//},
//{
//title: "Jurassic Park",
//publicationDate: 2006,
//author: "Michael Crichton",
//pages: 200,
//publisher: {
//location: "New York",
//size: 100,
//},
//price: 30,
//inStock: false,
//},
//];

export const bookSchema = new mongoose.Schema(
  // Fields
  {
    pages: {
      type: Number,
      require: true,
    },
    author: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      require: true,
    },
    publisher: {
      location: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        require: true,
      },
    },
    title: {
      type: String,
      required: true,
    },
  },
  // Options
  {
    timestamps: true,
  }
);

/// Replicate the Schema in Typescript
interface Publisher {
  location: string;
  size: number;
}
export interface BookInterface extends mongoose.Document {
  pages: number;
  author: string;
  publicationDate: string;
  publisher: Publisher;
  title: string;
}

const Book = mongoose.model<BookInterface>("Book", bookSchema);
export default Book;
