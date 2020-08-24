import Book from "../mongodb/models/book";

export interface BookArgs {
  startDate: number;
  endDate: number;
  filter: string;
}

export const resolver = {
  Query: {
    books: async (
      parent: any,
      { startDate, endDate, filter }: BookArgs,
      context: any
    ) => {
      const books = await Book.find({});
      return books;
    },
  },
};
