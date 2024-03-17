import React from "react";

export default function Slug({ params }) {
  return (
    <div>
      page: {params.productId}= Slug : {params.slug}
    </div>
  );
}
