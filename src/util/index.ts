import { Book, Magazine } from "../mongodb/models";
import { BookGoose } from "../gql/book/types";

export const populateDatabase = async (): Promise<void> => {
  await BookGoose.deleteMany({});
  await Magazine.deleteMany({});

  await BookGoose.create({
    pages: 100,
    author: "JK Rowling",
    title: "Harry Potter",
    inStock: true,
    numInStock: 10,
    publicationDate: new Date(),
  });

  await BookGoose.create({
    pages: 200,
    author: "JRR Tolkien",
    title: "Lord of the Rings",
    inStock: false,
    publicationDate: new Date(),
  });
};
