import { useState } from "react";
import { useFilter } from "../../../CustomHooks/useFilter";
import "./Filter.css";

const Filter = () => {
  const [mobileFilterActive, setMobileFilterActive] = useState(false);

  const { filterState, filterDispatch } = useFilter();

  return (
    <aside className="filter__container">
      <section className="filter__header">
        <button
          className="btn-icon filter__button"
          onClick={() => setMobileFilterActive((prev) => !prev)}
        >
          <h5>Filters</h5>
        </button>

        <div className="filter__clear">
          <button
            className="btn-link-text"
            onClick={() => filterDispatch({ type: "RESET" })}
          >
            Clear All
          </button>
        </div>
      </section>

      <div
        className={`filter__items ${
          mobileFilterActive ? "filter__items--active" : ""
        }`}
      >
        <hr />
        <form className="filter-data">
          <section className="filter__section">
            <fieldset
              onChange={(e) =>
                filterDispatch({ type: "SORT_BY", payload: e.target.id })
              }
            >
              <legend className="filter__section-title">Sort By</legend>
              <label htmlFor="low-to-high">
                <input
                  type="radio"
                  name="sort"
                  id="low-to-high"
                  checked={filterState.sortBy === "low-to-high" ? true : false}
                />
                <span>Low to High</span>
              </label>

              <label htmlFor="high-to-low">
                <input
                  type="radio"
                  name="sort"
                  id="high-to-low"
                  checked={filterState.sortBy === "high-to-low" ? true : false}
                />
                <span>High to Low</span>
              </label>

              <label htmlFor="rating">
                <input
                  type="radio"
                  name="sort"
                  id="rating"
                  checked={filterState.sortBy === "rating" ? true : false}
                />
                <span>Rating</span>
              </label>
            </fieldset>
          </section>

          <hr />

          <section className="filter__section">
            <fieldset
              onChange={(e) => {
                if (e.target.checked)
                  filterDispatch({
                    type: "ADD_CATEGORY",
                    payload: e.target.id,
                  });
                else {
                  filterDispatch({
                    type: "REMOVE_CATEGORY",
                    payload: e.target.id,
                  });
                }
              }}
            >
              <legend className="filter__section-title">Categories</legend>

              <label htmlFor="Gowns">
                <input
                  type="checkbox"
                  name="category"
                  id="Gowns"
                  checked={
                    filterState.categories.includes("Gowns") ? true : false
                  }
                />
                <span>Gowns</span>
              </label>

              <label htmlFor="Women">
                <input
                  type="checkbox"
                  name="category"
                  id="Women"
                  checked={
                    filterState.categories.includes("Women") ? true : false
                  }
                />
                <span>Women</span>
              </label>

              <label htmlFor="Beauty">
                <input
                  type="checkbox"
                  name="category"
                  id="Beauty"
                  checked={
                    filterState.categories.includes("Beauty") ? true : false
                  }
                />
                <span>Beauty</span>
              </label>

              <label htmlFor="Bags">
                <input
                  type="checkbox"
                  name="category"
                  id="Bags"
                  checked={
                    filterState.categories.includes("Bags") ? true : false
                  }
                />
                <span>Bags</span>
              </label>

              <label htmlFor="Jewellery">
                <input
                  type="checkbox"
                  name="category"
                  id="Jewellery"
                  checked={
                    filterState.categories.includes("Jewellery") ? true : false
                  }
                />
                <span>Jewellery</span>
              </label>
            </fieldset>
          </section>

          <hr />

          <section className="filter__section">
            <legend className="filter__section-title">Price</legend>
            <div className="slider__field">
              <input
                type="range"
                min="500"
                max="5000"
                className="slider"
                id="Range"
                step="500"
                name="Range"
                value={filterState.range}
                onChange={(e) =>
                  filterDispatch({
                    type: "PRICE_RANGE",
                    payload: e.target.value,
                  })
                }
              />
              <div className="slider__value slider__value--left">500</div>
              <div className="slider__value slider__value--right">5000</div>
            </div>
            <div className="price-range-output">
              {filterState.range === 0
                ? "₹0 to ₹500"
                : `₹0 to ₹${filterState.range}`}
            </div>
          </section>
        </form>

        <hr />

        <section className="filter__section">
          <form className="filter-data">
            <fieldset
              onChange={(e) =>
                filterDispatch({ type: "RATING", payload: e.target.id })
              }
            >
              <legend className="filter__section-title">Ratings</legend>
              <label htmlFor="4">
                <input
                  type="radio"
                  name="price"
                  id="4"
                  checked={filterState.rating === "4" ? true : false}
                />
                <span>4 star & above</span>
              </label>

              <label htmlFor="3">
                <input
                  type="radio"
                  name="price"
                  id="3"
                  checked={filterState.rating === "3" ? true : false}
                />
                <span>3 star & above</span>
              </label>
              <label htmlFor="2">
                <input
                  type="radio"
                  name="price"
                  id="2"
                  checked={filterState.rating === "2" ? true : false}
                />
                <span>2 star & above</span>
              </label>
              <label htmlFor="1">
                <input
                  type="radio"
                  name="price"
                  id="1"
                  checked={filterState.rating === "1" ? true : false}
                />
                <span>1 star & above</span>
              </label>
            </fieldset>
          </form>
        </section>

        <hr />

        <section className="filter__section">
          <form>
            <label htmlFor="stock">
              <input
                type="checkbox"
                name="category"
                id="stock"
                onChange={(e) => {
                  filterDispatch({ type: "STOCK", payload: e.target.checked });
                }}
                checked={filterState.excludeOutOfStock}
              />
              <span>Exclude out of stock</span>
            </label>
          </form>
        </section>
      </div>
    </aside>
  );
};

export default Filter;
