import { useEffect, useState } from "react";
import { ProductCard } from "../../components";
import { FilterBar } from "./Components/FilterBar";
import { useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useFilter } from "../../context/FilterContext";
import { getProductList } from "../../services";
import { toast } from "react-toastify";
export function Product() {
  useTitle("Explore our books collection");
  const { productList, initialProductList } = useFilter();
  const [show, setShow] = useState(false);
  // const [products, setProducts] = useState([]);

  let search = useLocation().search;
  let searchTerm = new URLSearchParams(search).get("q");
  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-center",
          autoClose: 5000,
        });
      }
    }
    fetchProduct();
  }, [searchTerm]); //eslint-disable-line
  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            {`All Books ${productList.length}`}
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
              onClick={() => setShow(!show)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {productList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </section>
      {show && <FilterBar setShow={setShow} />}
    </main>
  );
}
