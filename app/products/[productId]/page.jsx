import React from "react";

export default function ProductId({ params }) {
  console.log(params);
  return <div>ProductID: {params.productId}</div>;
}
