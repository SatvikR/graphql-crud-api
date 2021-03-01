import { Field, InputType } from "type-graphql";

@InputType()
export class SupplierInput {
  @Field()
  name: string;
}
