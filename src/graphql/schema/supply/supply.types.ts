import { Supply } from '@appTypes';
import { Field, ObjectType } from 'type-graphql';
import { SupplyTypeType } from '@schema/supply/supply-type/supply-type.types';

@ObjectType()
export class SupplyType implements Supply {
  @Field() id: string;
  @Field() name: string;
  @Field(returns => SupplyTypeType) type: SupplyType;
}
