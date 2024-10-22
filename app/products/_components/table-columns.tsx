"use client";
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import DeleteProductDialogContent from "./delete-dialog-content";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import {
  CircleIcon,
  ClipboardCopyIcon,
  EditIcon,
  MoreHorizontalIcon,
  TrashIcon,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Dialog, DialogTrigger } from "@/app/_components/ui/dialog";
import UpsertProductDialogContent from "./upsert-dialog-content";
import { useState } from "react";
import ProductTableDropdownMenu from "./table-dropdown-menu";

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
    cell: (row) => {
      const product = row.row.original;
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(product.price));
    },
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
  {
    accessorKey: "actions",
    header: "Actions",
    cell: (row) => <ProductTableDropdownMenu product={row.row.original} />,
  },
];
