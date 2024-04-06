import Singlepage from "../components/product view/singlepage";
import { useLocation, useParams } from "react-router-dom";
import { product } from '../data2';
import { useState } from "react";

const ProductView = ({ prodview1 }) => {
  const { id }=useParams()
  const myid=parseInt(id)
  

  const products=product.filter((x)=>x.id===myid)
  console.log('helo pppjkjkjkj', products)

  
  

  return (
    <div className="mt-8">
      <Singlepage pdv1data={prodview1} myproduct={products }  />
    </div>
  );

  
};

export default ProductView;
