import React from "react";
import ProductDetails from "./product-details";
import PurchaseDetails from "./purchase-details";
import SupplierDetails from "./supplier-details";

const ScreenSelect = ({ title }) => {
  const selectScreen = (title) => {
    switch (title) {
      case "Product Details":
        return <ProductDetails title={title} />;
      case "Purchase Details":
        return <PurchaseDetails title={title} />;
      case "Supplier Details":
        return <SupplierDetails ttitle={title} />;
      default:
        return <ProductDetails title={title} />;
    }
  }
  return (
    <React.Fragment>
      {(selectScreen(title))}
    </React.Fragment>
  )
}

export default ScreenSelect;
