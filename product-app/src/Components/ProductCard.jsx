import React from "react";
import Button from "./Button";

function ProductCard(props) {
  return (
    <div className="p-3">
      <div className="group block overflow-hidden">
        {/* Product Images */}
        <div className="relative h-[300px] sm:h-[350px]">
          <img
            src={props.image1}
            alt={props.name}
            className="absolute inset-0 w-full h-full object-contain opacity-100 group-hover:opacity-0 transition-all duration-300"
          />

          <img
            src={props.image2}
            alt={props.name}
            className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="relative bg-white pt-3">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {props.name}
          </h3>

          <div className="mt-1.5 flex items-center justify-between text-gray-900">
            <p className="tracking-wide">{props.price}</p>
            <p>Rating: {props.rating}</p>
            <p className="text-xs tracking-wide uppercase">6 Colors</p>
          </div>

          <p>{props.category}</p>
        </div>
      </div>

      {/* ✅ Button outside the <a> tag */}
      <div>
        <Button name={props.name} />
      </div>
    </div>
  );
}

export default ProductCard;
