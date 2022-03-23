import {
  v4 as uuid
} from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

import {
  makeup,
  women,
  bags,
  gowns,
  jewellery,
} from "../../Assets/Images/image";

export const categories = [{
    _id: uuid(),
    categoryName: "Women",
    imageUrl: women,
  },
  {
    _id: uuid(),
    categoryName: "Beauty",
    imageUrl: makeup,
  },
  {
    _id: uuid(),
    categoryName: "Bags",
    imageUrl: bags,
  },
  {
    _id: uuid(),
    categoryName: "Gowns",
    imageUrl: gowns,
  },
  {
    _id: uuid(),
    categoryName: "Jewellery",
    imageUrl: jewellery,
  },
];