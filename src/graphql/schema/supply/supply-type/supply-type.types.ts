import { SupplyType } from '@appTypes';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class SupplyTypeType implements SupplyType{
  @Field() id: string;
  @Field() name: string;
}
