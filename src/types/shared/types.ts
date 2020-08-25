import { Field, ObjectType } from "type-graphql";
import { prop } from "@typegoose/typegoose";

@ObjectType({ description: "Is the object in stock?" })
export class InStock {
  @Field()
  @prop()
  inStock: boolean;

  @Field({ nullable: true })
  @prop()
  numInStock?: number;
}
