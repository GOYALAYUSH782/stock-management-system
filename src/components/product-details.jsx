import React from 'react';
import Table from "./tables";

const ProductDetails = ({ title }) => {
  const data = {
    columns: [
      { title: "Product ID", field: "product_id" },
      { title: "Name", field: "name" },
      { title: "Description", field: "description" },
      { title: "Price", field: "price", type: "numeric" },
      {
        title: "Supplier",
        field: "supplier",
        lookup: { A: "Clean India", B: "Stay safe" },
      },
    ],
    data: [
      {
        product_id: 1,
        name: "Lysol",
        description: "1 unit of floor disinfectant",
        price: 49,
        supplier: "A",
      },
      {
        product_id: 2,
        name: "Hand wash",
        description: "1 unit of hand wash",
        price: 79,
        supplier: "A",
      },
      {
        product_id: 3,
        name: "Sanitizer",
        description: "1 unit of sanitizer",
        price: 50,
        supplier: "A",
      },
      {
        product_id: 4,
        name: "Mask",
        description: "12 pcs of masks",
        price: 249,
        supplier: "B",
      },
      {
        product_id: 5,
        name: "Dettol",
        description: "1 unit of disinfectant",
        price: 89,
        supplier: "B",
      },
    ],
  };

  return (
    <Table
      title={title}
      data={data}
    />
  );
}

export default ProductDetails;