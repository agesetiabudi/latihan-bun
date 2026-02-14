import { bookshelf } from "../config/database";
import { SchoolModel } from "./school.model";

export const UserModel = bookshelf.model("UserModel", {
  tableName: "users",
  school () {
    return this.belongsTo(SchoolModel , 'school_id')
  }
});
