"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const error_handler_1 = require("./error.handler");
const database_services_1 = __importDefault(require("../DB/database.services"));
const user_models_1 = __importDefault(require("../DB/models/user.models"));
const token_utils_1 = require("../utils/token.utils");
const authMiddleware = () => {
    const userDb = new database_services_1.default(user_models_1.default);
    return (0, error_handler_1.asyncHandler)(async (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Authorization Bearer token is missing" });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token is missing" });
        }
        const decoded = (0, token_utils_1.verifyToken)(token, process.env.JWT_SECRET);
        const user = await userDb.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.authUser = user;
        next();
    });
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middlewares.js.map