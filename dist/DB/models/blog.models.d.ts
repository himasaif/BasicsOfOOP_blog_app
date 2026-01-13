import mongoose from "mongoose";
import { IBlog } from "../../types/types";
export declare const blogSchema: mongoose.Schema<IBlog, mongoose.Model<IBlog, any, any, any, (mongoose.Document<unknown, any, IBlog, any, mongoose.DefaultSchemaOptions> & IBlog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, IBlog, any, mongoose.DefaultSchemaOptions> & IBlog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}), any, IBlog>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IBlog, mongoose.Document<unknown, {}, IBlog, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IBlog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId | undefined, IBlog, mongoose.Document<unknown, {}, IBlog, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IBlog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    title?: mongoose.SchemaDefinitionProperty<string, IBlog, mongoose.Document<unknown, {}, IBlog, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IBlog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    content?: mongoose.SchemaDefinitionProperty<string, IBlog, mongoose.Document<unknown, {}, IBlog, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IBlog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    author?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, IBlog, mongoose.Document<unknown, {}, IBlog, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IBlog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    createdAt?: mongoose.SchemaDefinitionProperty<Date | undefined, IBlog, mongoose.Document<unknown, {}, IBlog, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IBlog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    updatedAt?: mongoose.SchemaDefinitionProperty<Date | undefined, IBlog, mongoose.Document<unknown, {}, IBlog, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<IBlog & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, IBlog>;
declare const BlogModel: mongoose.Model<any, {}, {}, {}, any, any, any> | mongoose.Model<IBlog, {}, {}, {}, mongoose.Document<unknown, {}, IBlog, {}, mongoose.DefaultSchemaOptions> & IBlog & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IBlog>;
export default BlogModel;
export { BlogModel };
//# sourceMappingURL=blog.models.d.ts.map