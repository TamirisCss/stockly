"use client";
import { Badge } from "@/app/_components/ui/badge";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon } from "lucide-react";

const getStatusLabel = (status: string) => {
  if (status === "IN_STOCK") {
    return "In stock";
  }
  return "Out of stock";
};

export const productTableColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "price",
    header: "Unit price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (row) => {
      const product = row.row.original;
      const label = getStatusLabel(product.status);
      return (
        <Badge
          className={`gap-1.5 ${
            label === "In stock" ? "bg-[#00A180]" : "bg-[#64748B]"
          }`}
        >
          <CircleIcon
            size={14}
            className={`${
              label === "In stock" ? "fill-[#00A180]" : "fill-[#64748B]"
            }`}
          />
          {label}
        </Badge>
      );
    },
  },
];
