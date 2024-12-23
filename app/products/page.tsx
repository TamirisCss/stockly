import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import CreateProductButton from "./_components/create-product-button";
import Header, {
  HeaderLeft,
  HeaderRight,
  HeaderSubtitle,
  HeaderTitle,
} from "../_components/header";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubtitle>Product List</HeaderSubtitle>
          <HeaderTitle>Products</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <CreateProductButton />
        </HeaderRight>
      </Header>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
