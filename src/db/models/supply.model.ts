import { Supply } from '@appTypes';
import { Document, model, Schema } from 'mongoose';

export interface SupplyModel extends Supply, Document {}

const supplySchema = new Schema({
  name: { type: String, required: true },
  type: { type: Schema.Types.ObjectId, ref: 'supplyType'}
});

export const SupplyModel = model<SupplyModel>('supply', supplySchema);
