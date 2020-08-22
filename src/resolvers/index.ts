const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    publicationDate: 2010,
    author: "J.K. Rowling",
    pages: 400,
    publisher: {
      location: "New York",
      size: 100,
    },
    price: 20,
    inStock: true,
  },
  {
    title: "Jurassic Park",
    publicationDate: 2006,
    author: "Michael Crichton",
    pages: 200,
    publisher: {
      location: "New York",
      size: 100,
    },
    price: 30,
    inStock: false,
  },
];

interface BookArgs {
  startDate: number;
  endDate: number;
  filter: string;
}

const resolvers = {
  Query: {
    books: (
      parent: any,
      { startDate, endDate, filter }: BookArgs,
      context: any
    ) => {
      return books;
    },
  },
};

export default resolvers;
