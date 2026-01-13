"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class DatabaseService {
    constructor(_model) {
        this._model = _model;
    }
    async create(document) {
        return await this._model.create(document);
    }
    async findOne(filters) {
        return await this._model.findOne(filters);
    }
    async find(filters = {}) {
        return await this._model.find(filters);
    }
    // ✅ الجديد: findById (بيحل مشكلة ObjectId + بيخلّي الميدلوير أنضف)
    async findById(id) {
        if (!mongoose_1.Types.ObjectId.isValid(id))
            return null;
        return await this._model.findById(new mongoose_1.Types.ObjectId(id));
    }
}
exports.default = DatabaseService;
//# sourceMappingURL=database.services.js.map