import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Supplier } from "../entities/Supplier";
import { SupplierInput } from "../inputTypes/SupplierInput";

@Resolver()
export class SupplierResolver {
  @Mutation(() => Supplier)
  async createSupplier(
    @Arg("options", () => SupplierInput) options: SupplierInput
  ) {
    const newSupplier = await Supplier.create(options).save();
    return newSupplier;
  }

  @Query(() => [Supplier])
  async suppliers() {
    const suppliers = await Supplier.find({ relations: ["products"] });
    return suppliers;
  }

  @Query(() => Supplier)
  async supplier(@Arg("id", () => Int) id: number) {
    const supplier = await Supplier.findOne(
      { id },
      { relations: ["products"] }
    );
    return supplier;
  }

  @Mutation(() => Boolean)
  async updateSupplier(
    @Arg("id", () => Int) id: number,
    @Arg("options", () => SupplierInput) options: SupplierInput
  ) {
    await Supplier.update({ id }, options);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteSupplier(@Arg("id", () => Int) id: number) {
    await Supplier.delete({ id });
    return true;
  }
}
