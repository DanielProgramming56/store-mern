import React from "react";
import { useParams } from "react-router-dom";

const ProductDeatailsPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>ProductDeatailsPage</div>;
};

export default ProductDeatailsPage;
