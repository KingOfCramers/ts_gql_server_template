import { BookModel, MagazineModel } from "../types";

export const populateDatabase = async (): Promise<void> => {
  await BookModel.deleteMany({});
  await MagazineModel.deleteMany({});

  await BookModel.create({
    pages: 100,
    author: "JK Rowling",
    title: "Harry Potter",
    inStock: true,
    numInStock: 10,
    publicationDate: new Date(),
  });

  await BookModel.create({
    pages: 200,
    author: "JRR Tolkien",
    title: "Lord of the Rings",
    inStock: false,
    publicationDate: new Date(),
  });

  await MagazineModel.create({
    publicationDate: new Date(),
    title: "Playboy",
    inStock: true,
    numInStock: 100,
    pages: 20,
  });

  await MagazineModel.create({
    publicationDate: new Date(),
    title: "Popular Mechanic",
    inStock: false,
    pages: 40,
  });
};
