import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Magazine {
  @Field()
  title: string;

  @Field()
  publicationDate: Date;

  @Field()
  pages: number;
}
