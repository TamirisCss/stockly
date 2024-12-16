import { ComboboxOption } from "../_components/ui/combobox";
import { getProduct } from "../_data-access/product/get-product";
import CreateSaleButton from "./_components/create-sale-button";
const SalesPage = async () => {
  const products = await getProduct();

  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Sales Overview
          </span>
          <h2 className="text-xl font-semibold">Sales</h2>
        </div>
        <CreateSaleButton products={products} productOptions={productOptions} />
      </div>
      {/* <DataTable columns={productTableColumns} data={products} /> */}
    </div>
  );
};

export default SalesPage;
