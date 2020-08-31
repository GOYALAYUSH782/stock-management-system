import React from 'react';
import Table from "./tables";

const PurchaseDetails = ({ title }) => {
  const data = {
    columns: [
      { title: "Order ID", field: "order_id" },
      { title: "Customer's Name", field: "customers_name" },
      { title: "Product ID", field: "product_id", type: "numeric" },
      { title: "Quantity", field: "quantity", type: "numeric" },
      { title: "Shipping Address", field: "shipping_address" },
    ],
    data: [
      {
        order_id: "a",
        customers_name: "Mohit",
        product_id: "1",
        quantity: "2",
        shipping_address: "Bangalore",
      },
      {
        order_id: "b",
        customers_name: "Rohit",
        product_id: "4",
        quantity: 3,
        shipping_address: "Hyderabad",
      },
      {
        order_id: "c",
        customers_name: "Rohan",
        product_id: "3",
        quantity: 1,
        shipping_address: "Delhi",
      },
      {
        order_id: "d",
        customers_name: "Karthik",
        product_id: "2",
        quantity: 4,
        shipping_address: "Chennai",
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

export default PurchaseDetails;