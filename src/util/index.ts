import { Book, Magazine } from "../mongodb/models";

export const populateDatabase = async (): Promise<void> => {
  await Book.deleteMany({});
  await Magazine.deleteMany({});

  await Book.create({
    pages: 100,
    author: "JK Rowling",
    title: "Harry Potter",
    inStock: true,
    numInStock: 10,
    publicationDate: new Date(),
  });

  await Book.create({
    pages: 200,
    author: "JRR Tolkien",
    title: "Lord of the Rings",
    inStock: false,
    publicationDate: new Date(),
  });
};
