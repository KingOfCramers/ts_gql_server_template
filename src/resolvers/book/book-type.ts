import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class Book {
  @Field()
  title: string;

  @Field()
  publicationDate: Date;

  @Field()
  author: string;

  @Field()
  pages: number;
}
