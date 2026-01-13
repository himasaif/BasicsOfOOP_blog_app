import mongoose from "mongoose";
import { IUser } from "../../types/types";
declare const UserModel: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export default UserModel;
export { UserModel };
//# sourceMappingURL=user.models.d.ts.map