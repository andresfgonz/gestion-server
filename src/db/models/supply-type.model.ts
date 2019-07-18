import { SupplyType } from '@appTypes';
import { Document, model, Schema } from 'mongoose';

export interface SupplyTypeModel extends SupplyType, Document {}

const supplyTypeSchema = new Schema({
  name: { type: String, required: true },
});

export const SupplyTypeModel = model<SupplyTypeModel>('supplyType', supplyTypeSchema);
