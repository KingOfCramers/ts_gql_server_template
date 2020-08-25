import { Resolver, Query, Arg } from "type-graphql";

import { Magazine } from "./types";
import { ReadingInput } from "../shared/inputs";

const magazines: Magazine[] = [
  {
    title: "Playboy",
    publicationDate: new Date(),
    pages: 40,
    inStock: true,
    numInStock: 10,
  },
  {
    title: "Popular Mechanic",
    publicationDate: new Date(),
    pages: 100,
    inStock: false,
    numInStock: 0,
  },
];

@Resolver()
export class MagazineResolver {
  @Query(() => Magazine, { nullable: true })
  async magazine(@Arg("input") title: string): Promise<Magazine | undefined> {
    return magazines.find((magazine) => magazine.title === title);
  }

  @Query(() => [Magazine], { nullable: true })
  async allMagazines(): Promise<Magazine[]> {
    return magazines;
  }

  @Query(() => [Magazine], { nullable: true })
  async someMagazines(
    @Arg("input") filter: ReadingInput
  ): Promise<Magazine[] | undefined> {
    return magazines
      .filter((magazine) => magazine.pages < filter.pages)
      .filter(
        (magazine) =>
          magazine.publicationDate.valueOf() > filter.publicationDate.valueOf()
      );
  }
}
