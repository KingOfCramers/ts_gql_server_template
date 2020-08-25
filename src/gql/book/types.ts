import { Field, ObjectType } from "type-graphql";
import { InStock } from "../shared/types";

@ObjectType()
export class Book extends InStock {
  @Field()
  title: string;

  @Field()
  publicationDate: Date;

  @Field()
  author: string;

  @Field()
  pages: number;
}
