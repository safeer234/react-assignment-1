
import React from "react";

function Button({ name }) {
  const handleClick = () => {
    console.log(`Added to Cart: ${name}`);
  };

  return (
    <button
      onClick={handleClick}
      className="flex rounded-sm border-2 border-black bg-transparent px-28 p-1 text-xl font-medium text-black hover:bg-transparent hover:text-amber-300 hover:border-amber-300 focus:outline-hidden h-12 text-center items-center justify-center whitespace-nowrap mt-3"
    >
      Add to cart
    </button>
  );
}

export default Button;
