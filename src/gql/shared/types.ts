import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Is the object in stock?" })
export class InStock {
  @Field()
  inStock: boolean;

  @Field({ nullable: true })
  numInStock?: number;
}
