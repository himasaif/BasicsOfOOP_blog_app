"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionDb = void 0;
const mongoose_1 = require("mongoose");
const connectionDb = async (uri) => {
    const mongoUri = process.env.MONGO_URI ?? uri;
    if (!mongoUri) {
        throw new Error("MONGO_URI is missing. Put it in .env or pass it to connectionDb()");
    }
    try {
        await (0, mongoose_1.connect)(mongoUri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};
exports.connectionDb = connectionDb;
//# sourceMappingURL=connectionDb.js.map