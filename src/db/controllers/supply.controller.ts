import { AbstractController } from '@db/controllers/abstract.controller';
import { SupplyModel } from '@db/models/supply.model';

export class SupplyController extends AbstractController<SupplyModel> {
  constructor() {
    super(SupplyModel);
  }

  getSuppliesByType(supplyTypeId: string) {
    return this.model.find({ type: supplyTypeId }).exec();
  }

  saveRequest() {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 2000);
    })
  }
}
