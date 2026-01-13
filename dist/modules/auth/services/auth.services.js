"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const bcryptjs_2 = require("bcryptjs");
const uuid_1 = require("uuid");
const database_services_1 = __importDefault(require("../../../DB/database.services"));
const user_models_1 = __importDefault(require("../../../DB/models/user.models"));
const types_1 = require("../../../types/types");
const token_utils_1 = require("../../../utils/token.utils");
class AuthService {
    constructor() {
        this.userDb = new database_services_1.default(user_models_1.default);
        // =========================
        // ✅ SIGN UP
        // =========================
        this.signUp = async (req, res, next) => {
            try {
                const { username, email, password, role } = req.body;
                // لو بتستخدم Joi validation middleware يبقى ممكن تشيل ده
                if (!username || !email || !password) {
                    return res
                        .status(400)
                        .json({ message: "username, email, password are required" });
                }
                // check existing email
                const existingUser = await this.userDb.findOne({ email });
                if (existingUser) {
                    return res.status(409).json({ message: "User already exists" });
                }
                // check existing username (اختياري بس مهم لو username unique)
                const existingUsername = await this.userDb.findOne({ username });
                if (existingUsername) {
                    return res.status(409).json({ message: "Username already exists" });
                }
                // hash password
                const hashedPassword = await bcryptjs_1.default.hash(password, 10);
                // create user
                const newUser = await this.userDb.create({
                    username,
                    email,
                    password: hashedPassword,
                    role: role ?? types_1.userRoles.user,
                });
                // remove password from response
                const userObj = newUser.toObject?.() ?? newUser;
                delete userObj.password;
                return res.status(201).json(userObj);
            }
            catch (error) {
                return next(error);
            }
        };
        // =========================
        // ✅ LOGIN
        // =========================
        this.login = async (req, res, next) => {
            try {
                const { email, password } = req.body;
                if (!email || !password) {
                    return res.status(400).json({ message: "email and password are required" });
                }
                const user = await this.userDb.findOne({ email });
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                }
                const isMatch = (0, bcryptjs_2.compareSync)(password, user.password);
                if (!isMatch) {
                    return res.status(401).json({ message: "Invalid credentials" });
                }
                const token = (0, token_utils_1.generateToken)({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d", jwtid: (0, uuid_1.v4)() });
                return res.status(200).json({ token });
            }
            catch (error) {
                return next(error);
            }
        };
        // =========================
        // ✅ GET PROFILE
        // =========================
        this.getProfile = async (req, res, next) => {
            try {
                if (!req.authUser?._id) {
                    return res.status(401).json({ message: "Unauthorized" });
                }
                const user = await this.userDb.findById(String(req.authUser._id));
                if (!user) {
                    return res.status(404).json({ message: "User not found" });
                }
                const userObj = user.toObject?.() ?? user;
                delete userObj.password;
                return res.status(200).json(userObj);
            }
            catch (error) {
                return next(error);
            }
        };
    }
}
exports.default = new AuthService();
//# sourceMappingURL=auth.services.js.map