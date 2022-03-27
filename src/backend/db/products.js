import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

import {
  bags1,
  bags2,
  bags3,
  beauty1,
  beauty2,
  beauty3,
  gowns1,
  gowns2,
  gowns3,
  gowns4,
  gowns5,
  gowns6,
  jewellery1,
  jewellery2,
  jewellery3,
  women1,
  women2,
  women3,
  women4,
} from "../../Assets/Images/image";

export const products = [
  {
    _id: uuid(),
    title: "Red Bag",
    subtitle: "Textured bucket bag",
    image: bags1,
    seller: "Dressberry",
    price: 1260,
    oldPrice: 2299,
    discount: 45,
    rating: {
      value: 4,
      count: 100,
    },
    categoryName: "Bags",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Peach Bag",
    subtitle: "Solid shoulder bag",
    image: bags2,
    seller: "Dressberry",
    price: 1480,
    oldPrice: 3700,
    discount: 60,
    rating: {
      value: 4.2,
      count: 63,
    },
    categoryName: "Bags",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Teal Blue Bag",
    subtitle: "Textured bucket bag",
    image: bags3,
    seller: "Dressberry",
    price: 2300,
    oldPrice: 3000,
    discount: 15,
    rating: {
      value: 4.5,
      count: 138,
    },
    categoryName: "Bags",
    inStock: false,
  },
  {
    _id: uuid(),
    title: "Lakme CC cream",
    subtitle: "9 to 5 CC cream",
    image: beauty1,
    seller: "Lakme",
    price: 230,
    oldPrice: 250,
    discount: 5,
    rating: {
      value: 4.1,
      count: 835,
    },
    categoryName: "Beauty",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Body Scrub",
    subtitle: "Caffeine body scrub",
    image: beauty2,
    seller: "MCaffeine",
    price: 378,
    oldPrice: 445,
    discount: 15,
    rating: {
      value: 4.6,
      count: 677,
    },
    categoryName: "Beauty",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Facewash",
    subtitle: "Anti-pollution facewash",
    image: beauty3,
    seller: "Lakme",
    price: 750,
    oldPrice: 1250,
    discount: 25,
    rating: {
      value: 3.4,
      count: 436,
    },
    categoryName: "Beauty",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Yellow Gown",
    subtitle: "Yellow Wrap Dress",
    image: gowns1,
    seller: "Berrylush",
    price: 900,
    oldPrice: 2000,
    discount: 55,
    rating: {
      value: 3.7,
      count: 36,
    },
    categoryName: "Gowns",
    inStock: false,
  },
  {
    _id: uuid(),
    title: "Black Gown",
    subtitle: "High Slit Gown",
    image: gowns2,
    seller: "Berrylush",
    price: 1800,
    oldPrice: 3800,
    discount: 65,
    rating: {
      value: 4,
      count: 16,
    },
    categoryName: "Gowns",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Maroon Gown",
    subtitle: "High Slit Gown",
    image: gowns3,
    seller: "Berrylush",
    price: 3960,
    oldPrice: 7800,
    discount: 80,
    rating: {
      value: 3.9,
      count: 4,
    },
    categoryName: "Gowns",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Navy Blue Gown",
    subtitle: "Silk Gown",
    image: gowns4,
    seller: "Berrylush",
    price: 4800,
    oldPrice: 7800,
    discount: 75,
    rating: {
      value: 3.7,
      count: 4,
    },
    categoryName: "Gowns",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Peacock green Gown",
    subtitle: "Silk Gown",
    image: gowns5,
    seller: "Just WoW",
    price: 5000,
    oldPrice: 7800,
    discount: 65,
    rating: {
      value: 3.7,
      count: 4,
    },
    categoryName: "Gowns",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Monochrome Dress",
    subtitle: "Silk Gown",
    image: gowns6,
    seller: "Berrylush",
    price: 2500,
    oldPrice: 5000,
    discount: 50,
    rating: {
      value: 4.7,
      count: 4,
    },
    categoryName: "Gowns",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Gold Studs",
    subtitle: "Gold-toned earrings",
    image: jewellery1,
    seller: "youBella",
    price: 520,
    oldPrice: 1450,
    discount: 65,
    rating: {
      value: 4.7,
      count: 421,
    },
    categoryName: "Jewellery",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Choker Jewellery Set",
    subtitle: "Gold-toned choker set",
    image: jewellery2,
    seller: "Panit",
    price: 4800,
    oldPrice: 8000,
    discount: 35,
    rating: {
      value: 3.8,
      count: 15,
    },
    categoryName: "Jewellery",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Rose Gold Jewellery",
    subtitle: "Rose gold plated set",
    image: jewellery3,
    seller: "Panit",
    price: 4800,
    oldPrice: 8000,
    discount: 35,
    rating: {
      value: 3.8,
      count: 15,
    },
    categoryName: "Jewellery",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Green Kurta",
    subtitle: "Sap green symmetric kurta",
    image: women1,
    seller: "Panit",
    price: 800,
    oldPrice: 1000,
    discount: 20,
    rating: {
      value: 4.6,
      count: 715,
    },
    categoryName: "Women",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Yellow Kurta",
    subtitle: "Yellow symmetric kurta",
    image: women2,
    seller: "Panit",
    price: 1100,
    oldPrice: 1350,
    discount: 15,
    rating: {
      value: 2.8,
      count: 15,
    },
    categoryName: "Women",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Orange Crop Top",
    subtitle: "Power shoulders top",
    image: women3,
    seller: "Panit",
    price: 600,
    oldPrice: 1180,
    discount: 50,
    rating: {
      value: 4.2,
      count: 235,
    },
    categoryName: "Women",
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Pink Crop Top",
    subtitle: "Pink top with bell sleaves",
    image: women4,
    seller: "Dressberry",
    price: 1800,
    oldPrice: 3000,
    discount: 55,
    rating: {
      value: 4.1,
      count: 55,
    },
    categoryName: "Women",
    inStock: true,
  },
];
