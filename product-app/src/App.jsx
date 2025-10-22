import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import ProductCard from "./Components/ProductCard";
import Footer from "./Components/Footer";

function App() {
  const [openProduct, setOpenProduct] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const [searchTerm, setSearchTerm] = useState(""); // ✅ New: Search input
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const products = [
    {
      name: "Limited Edition Sports Trainer",
      price: "$189.99",
      image1:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&auto=format&fit=crop&w=1450&q=80",
      image2:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1450&q=80",
      rating: 4.5,
      category: "Category A",
    },
    {
      name: "Limited Edition Headset",
      price: "$179.99",
      image1:
        "https://media.istockphoto.com/id/835148968/photo/red-headphones-isolated.jpg?s=612x612&w=0&k=20&c=JAEd1MYVaJjC0Iu1cZ4LPHRigRGZ-NJNjIXXs87me1E=",
      image2:
        "https://powermaccenter.com/cdn/shop/files/A042000x2000_eedfd97c-bb3e-4307-9bd5-4e8fbd8f006e.jpg?v=1691109785&width=823",
      rating: 4.6,
      category: "Category A",
    },
    {
      name: "Limited Edition Laptop",
      price: "$209.99",
      image1:
        "https://i5.walmartimages.com/seo/ASUS-ROG-Zephyrus-S17-Gaming-Laptop-Intel-i9-11900H-8-Core-17-3-165Hz-2K-Quad-HD-2560x1440-GeForce-RTX-3080-32GB-RAM-2x2TB-PCIe-SSD-RAID-0-4TB-Backli_7e5f255a-39e7-496f-afe7-7b5facda01f4.4f980ac6de5763ae3d07e479d641f1c3.jpeg",
      image2:
        "https://www.taiwanexcellence.org/upload/product/old/old2021/111014AA-A040_L.jpg",
      rating: 4.7,
      category: "Category B",
    },
    {
      name: "Limited Edition iPhone 13",
      price: "$179.99",
      image1:
        "https://vasanthandco.in/images/productimages/1903__product__Mobiles__apple-mobile-iphone-13-blue-128gb-1.png",
      image2: "https://i.ebayimg.com/images/g/naEAAOSwQstnQzKD/s-l400.jpg",
      rating: 4.6,
      category: "Category B",
    },
    {
      name: "Limited Edition Smart Watch",
      price: "$199.99",
      image1: "https://www.sathya.store/img/product/n3cpT3OGuugv87uo.png",
      image2: "https://i.ebayimg.com/images/g/miUAAOSwTGZmjkMY/s-l1200.jpg",
      rating: 4.8,
      category: "Category A",
    },
    {
      name: "Limited Edition Samsung Tab S10 Ultra",
      price: "$229.99",
      image1:
        "https://uk.static.webuy.com/product_images/Computing/Tablets%20Android/STABSAMX920256GSWIFA_l.jpg",
      image2:
        "https://pics.runbazaar.com/jECFOXhyu1Obfpm7TcFxTT0S69-lfWhZ4OKBOdJEzOU/t:0.1:ffffff:1:1/g:sm/rs:fit:750:750:1:1/bG9jYWw6Ly8vbWVkaWEvcHJvZHVjdF9pbWcvMjAyNC8xMS8xMS9SQkk3bGpoSS9VbnRpdGxlZC0xOS5qcGc",
      rating: 4.6,
      category: "Category C",
    },
  ];

  // ✅ Initialize products
  if (displayedProducts.length === 0) setDisplayedProducts(products);

  // ------------------ SORTING FUNCTIONS ------------------
  const sortPriceLowHigh = () => {
    const sorted = [...displayedProducts].sort(
      (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
    );
    setDisplayedProducts(sorted);
  };

  const sortPriceHighLow = () => {
    const sorted = [...displayedProducts].sort(
      (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
    );
    setDisplayedProducts(sorted);
  };

  const sortRatingHighLow = () => {
    const sorted = [...displayedProducts].sort((a, b) => b.rating - a.rating);
    setDisplayedProducts(sorted);
  };

  const sortRatingLowHigh = () => {
    const sorted = [...displayedProducts].sort((a, b) => a.rating - b.rating);
    setDisplayedProducts(sorted);
  };

  const filterByCategory = (category) => {
    const filtered = products.filter((p) => p.category === category);
    setDisplayedProducts(filtered);
  };

  const resetFilter = () => {
    setDisplayedProducts(products);
    setSearchTerm(""); // clear search when reset
  };

  // ✅ Search filter function
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(term)
    );
    setDisplayedProducts(filtered);
  };

  // -------------------------------------------------------

  return (
    <div>
      <Header />

      {/* Top Bar */}
      <div className="flex justify-between items-center px-4">
        <h2 className="p-4 text-5xl font-sans">Products</h2>

        <div className="flex items-center gap-4">
          {/* ✅ Search Bar */}
          <input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* Product Dropdown */}
          <div className="relative inline-flex">
            <span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 h-8 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setOpenProduct(!openProduct)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Product
              </button>
              <button
                type="button"
                onClick={() => setOpenProduct(!openProduct)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                ▼
              </button>
            </span>

            {/* Dropdown Menu */}
            {openProduct && (
              <div className="absolute right-0 top-10 z-10 w-48 rounded border border-gray-300 bg-white shadow-md">
                {/* PRICE DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setOpenPrice(!openPrice);
                      setOpenRating(false);
                      setOpenCategory(false);
                    }}
                    className="flex justify-between w-full px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    Price
                    <span>{openPrice ? "▲" : "▼"}</span>
                  </button>
                  {openPrice && (
                    <div className="border-t border-gray-200 bg-white">
                      <button
                        onClick={sortPriceLowHigh}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        Low to High
                      </button>
                      <button
                        onClick={sortPriceHighLow}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        High to Low
                      </button>
                    </div>
                  )}
                </div>

                {/* RATING DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setOpenRating(!openRating);
                      setOpenPrice(false);
                      setOpenCategory(false);
                    }}
                    className="flex justify-between w-full px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    Rating
                    <span>{openRating ? "▲" : "▼"}</span>
                  </button>
                  {openRating && (
                    <div className="border-t border-gray-200 bg-white">
                      <button
                        onClick={sortRatingHighLow}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        High to Low
                      </button>
                      <button
                        onClick={sortRatingLowHigh}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        Low to High
                      </button>
                    </div>
                  )}
                </div>

                {/* CATEGORY DROPDOWN */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setOpenCategory(!openCategory);
                      setOpenPrice(false);
                      setOpenRating(false);
                    }}
                    className="flex justify-between w-full px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    Category
                    <span>{openCategory ? "▲" : "▼"}</span>
                  </button>
                  {openCategory && (
                    <div className="border-t border-gray-200 bg-white">
                      <button
                        onClick={() => filterByCategory("Category A")}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        Category A
                      </button>
                      <button
                        onClick={() => filterByCategory("Category B")}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        Category B
                      </button>
                      <button
                        onClick={() => filterByCategory("Category C")}
                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        Category C
                      </button>
                      <button
                        onClick={resetFilter}
                        className="block w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-gray-50"
                      >
                        Reset
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6 p-4">
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            category={product.category}
            rating={product.rating}
            image1={product.image1}
            image2={product.image2}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
