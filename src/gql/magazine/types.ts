import { Field, ObjectType } from "type-graphql";
import { InStock } from "../shared/types";

@ObjectType()
export class Magazine extends InStock {
  @Field()
  title: string;

  @Field()
  publicationDate: Date;

  @Field()
  pages: number;
}
