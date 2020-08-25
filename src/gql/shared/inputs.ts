import { InputType, Field } from "type-graphql";

@InputType()
export class ReadingInput {
  @Field()
  pages: number;

  @Field()
  publicationDate: Date;
}
