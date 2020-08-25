import { Field, ObjectType } from "type-graphql";
import { InStock } from "../shared/types";
import { prop, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class Magazine extends InStock {
  @Field()
  @prop()
  public title: string;

  @Field()
  @prop()
  public publicationDate: Date;

  @Field()
  @prop()
  public pages: number;
}

// And the Mongoose
export const MagazineModel = getModelForClass(Magazine);
