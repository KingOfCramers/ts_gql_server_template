import { Resolver, Query, Arg, ResolverInterface } from "type-graphql";

import { Book } from "./book-type";

@Resolver()
class BookResolver {
  @Query(() => Book, { nullable: true })
  async book(@Arg("title") title: string): Promise<Book | undefined> {
    return Promise.resolve({
      title: "Harry Potter",
      author: "JK Rowling",
      publicationDate: new Date(),
      pages: 400,
    });
  }
}

export default BookResolver;
