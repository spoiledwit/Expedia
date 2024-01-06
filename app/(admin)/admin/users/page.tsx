"use client";
import React from "react";
import { UsersTable } from "@/components/Admin/Users/Table";
import CreateUser from "@/components/Admin/Users/CreateUser";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const [createUser, setCreateUser] = React.useState(false);

  return (
    <div className="p-8 w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-semibold mb-4">User Managment</h2>
        <div className="flex justify-between mb-4">
          <Button
            onClick={() => {
              setCreateUser(!createUser);
            }}
          >
            {createUser ? "Cancel" : "Create User"}
          </Button>
        </div>
      </div>

      {createUser ? <CreateUser /> : <UsersTable />}
    </div>
  );
};

export default ProductsPage;
