import type { Model, HydratedDocument } from "mongoose";
type Query<T> = Partial<T> & Record<string, any>;
declare class DatabaseService<T> {
    private readonly _model;
    constructor(_model: Model<T>);
    create(document: Partial<T>): Promise<HydratedDocument<T>>;
    findOne(filters: Query<T>): Promise<HydratedDocument<T> | null>;
    find(filters?: Query<T>): Promise<HydratedDocument<T>[]>;
    findById(id: string): Promise<HydratedDocument<T> | null>;
}
export default DatabaseService;
//# sourceMappingURL=database.services.d.ts.map