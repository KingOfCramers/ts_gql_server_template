import * as mongoose from "mongoose";
import { getModelForClass, prop } from "@typegoose/typegoose";

class MagazineClass {
  @prop()
  public title: string;
  public publicationDate: Date;
  public pages: number;
  public inStock: true;
  public numInStock: number;
}

export const Magazine = getModelForClass(MagazineClass);
