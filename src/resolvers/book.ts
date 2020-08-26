import { Resolver, Query, Arg } from "type-graphql";

// Import GQL and Mongoose types...
import { Book, BookModel } from "../types";
import { ReadingInput } from "../types/shared";

@Resolver()
export class BookResolver {
  @Query(() => Book, { nullable: true })
  async book(@Arg("input") title: string): Promise<Book | null> {
    const book = await BookModel.findOne({ title });
    return book ? book.toObject() : null;
  }

  @Query(() => [Book], { nullable: true })
  async allBooks(): Promise<Book[]> {
    const books = await BookModel.find({ inStock: true });
    return books;
  }

  @Query(() => [Book], { nullable: true })
  async someBooks(
    @Arg("input") filter: ReadingInput
  ): Promise<Book[] | undefined> {
    const books = await BookModel.find({})
      .where("pages")
      .gt(filter.pages)
      .where("publicationDate")
      .gt(filter.publicationDate);
    return books;
  }
}
