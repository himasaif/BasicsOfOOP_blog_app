import mongoose from "mongoose";
import { IUser, userRoles } from "../../types/types";

const userSchema = new mongoose.Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: Object.values(userRoles),   // ✅ ده الصح للـ enum
      default: userRoles.user,          // ✅ default role
    },

    // ❌ متحطش createdAt هنا طالما timestamps:true
    // createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// ✅ الأفضل تكتبها كده
const UserModel = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default UserModel;
export { UserModel };
