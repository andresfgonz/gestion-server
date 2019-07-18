import { AbstractController } from '@db/controllers/abstract.controller';
import { SupplyTypeModel } from '@db/models/supply-type.model';

export class SupplyTypeController extends AbstractController<SupplyTypeModel> {
  constructor() {
    super(SupplyTypeModel);
  }
}
