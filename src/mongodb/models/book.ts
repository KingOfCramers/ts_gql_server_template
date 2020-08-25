import * as mongoose from "mongoose";
import { getModelForClass, prop } from "@typegoose/typegoose";

class BookClass {
  @prop()
  public title: string;
  @prop()
  public author: string;
  @prop()
  public publicationDate: Date;
  @prop()
  public pages: number;
  @prop()
  public inStock: boolean;
  @prop()
  public numInStock?: number;
}

export const Book = getModelForClass(BookClass);
