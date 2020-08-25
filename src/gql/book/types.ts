import { Field, ObjectType } from "type-graphql";
import { InStock } from "../shared/types";
import { getModelForClass, prop } from "@typegoose/typegoose";

@ObjectType()
export class Book extends InStock {
  @Field()
  @prop()
  public title: string;

  @Field()
  @prop()
  public publicationDate: Date;

  @Field()
  @prop()
  public author: string;

  @Field()
  @prop()
  public pages: number;
}

export const BookGoose = getModelForClass(Book);
