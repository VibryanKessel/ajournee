import { Document } from 'mongoose';

export interface Group extends Document {
    readonly name: string;
    readonly users: [string];
}
