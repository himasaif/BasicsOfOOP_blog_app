import type { Model, HydratedDocument } from "mongoose";
import { Types } from "mongoose";

// نوع بسيط للفلاتر (عشان find/findOne يفضلوا شغالين زي ما انت عامل)
type Query<T> = Partial<T> & Record<string, any>;

class DatabaseService<T> {
  constructor(private readonly _model: Model<T>) {}

  async create(document: Partial<T>): Promise<HydratedDocument<T>> {
    return await this._model.create(document);
  }

  async findOne(filters: Query<T>): Promise<HydratedDocument<T> | null> {
    return await this._model.findOne(filters as any);
  }

  async find(filters: Query<T> = {}): Promise<HydratedDocument<T>[]> {
    return await this._model.find(filters as any);
  }

  // ✅ الجديد: findById (بيحل مشكلة ObjectId + بيخلّي الميدلوير أنضف)
  async findById(id: string): Promise<HydratedDocument<T> | null> {
    if (!Types.ObjectId.isValid(id)) return null;
    return await this._model.findById(new Types.ObjectId(id));
  }
}

export default DatabaseService;
