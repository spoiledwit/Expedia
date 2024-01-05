import React from "react";
import { UsersTable } from "@/components/Admin/Users/Table";

const ProductsPage = () => {
  return (
    <div
    className="p-8"
    >
      <h2
      className="text-2xl font-semibold mb-4"
      >
        Users
      </h2>
      <UsersTable />
    </div>
  );
};

export default ProductsPage;