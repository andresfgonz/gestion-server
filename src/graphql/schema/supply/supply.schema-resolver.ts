import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { SupplyType } from '@schema/supply/supply.types';
import { SupplyController } from '@db/controllers/supply.controller';
import { ActionResult } from '@schema/schema.defs';

@Resolver(SupplyType)
export class SupplySchemaResolver {
  @Query(returns => [SupplyType])
  supplies() {
    return new SupplyController().findAll();
  }

  @Query(returns => [SupplyType])
  suppliesByType(@Arg('typeId') typeId: string) {
    return new SupplyController().getSuppliesByType(typeId);
  }

  @Mutation(returns => SupplyType)
  addSupply(@Arg('name') name: string, @Arg('type') type: string) {
    return new SupplyController().create({ name, type });
  }

  @Mutation(returns => ActionResult)
  async saveRequest() {
    await new SupplyController().saveRequest();
    return {
      success: true,
      message: 'request submited',
    }
  }
}
