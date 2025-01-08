import { ProductStatusDto } from "../_data-access/product/get-products";
import { Badge } from "./ui/badge";
const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "in stock";
  }
  return "out of stock";
};
interface ProductStatusBadgeProps {
  status: ProductStatusDto;
}
const ProductStatusBadge = ({ status }: ProductStatusBadgeProps) => {
  const label = getStatusLabel(status);
  return (
    <Badge
      variant={label === "in stock" ? "default" : "outline"}
      className="gap-1.5"
    >
      {label}
    </Badge>
  );
};
export default ProductStatusBadge;
