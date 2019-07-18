import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { SupplyTypeType } from '@schema/supply/supply-type/supply-type.types';
import { SupplyTypeController } from '@db/controllers/supply-type.controller';

@Resolver(SupplyTypeType)
export class SupplyTypeSchemaResolver {
  @Query(returns => [SupplyTypeType])
  supplyTypes() {
    return new SupplyTypeController().findAll();
  }

  @Mutation(returns => SupplyTypeType)
  addSupplyType(@Arg('name') name: string) {
    return new SupplyTypeController().create({ name });
  }
}
