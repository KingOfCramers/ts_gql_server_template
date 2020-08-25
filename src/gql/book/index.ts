import { Resolver, Query, Arg } from "type-graphql";

import { Book } from "./types";
import { ReadingInput } from "../shared/inputs";

const books: Book[] = [
  {
    title: "Harry Potter",
    author: "JK Rowling",
    publicationDate: new Date(),
    pages: 400,
    inStock: true,
    numInStock: 10,
  },
  {
    title: "Game of Thrones",
    author: "JR Martin",
    publicationDate: new Date(),
    pages: 1000,
    inStock: false,
  },
];

@Resolver()
export class BookResolver {
  @Query(() => Book, { nullable: true })
  async book(@Arg("input") title: string): Promise<Book | undefined> {
    return books.find((book) => book.title === title);
  }

  @Query(() => [Book], { nullable: true })
  async allBooks(): Promise<Book[]> {
    return books.filter((book) => book.inStock);
  }

  @Query(() => [Book], { nullable: true })
  async someBooks(
    @Arg("input") filter: ReadingInput
  ): Promise<Book[] | undefined> {
    return books
      .filter((book) => book.pages < filter.pages)
      .filter(
        (book) =>
          book.publicationDate.valueOf() > filter.publicationDate.valueOf()
      );
  }
}
