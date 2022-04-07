<h1 align="center"><b>Fashgram Store</b></h1>
<div align="center">Fashgram Store is an ecommerce-store where users can shop for latest trends in fashion. </div>

## **Live Demo**
To view the live demo, visit: [Fashgram Store](https://fashgram-store-muskan.netlify.app/)

## **Tech Stack**
- ReactJS
- Mockbee (for mock backend)

## **Pages**
| Pages         |
|---------------|
| [Homepage](https://fashgram-store-muskan.netlify.app/)     |
| [Product Listing Page](https://fashgram-store-muskan.netlify.app/products)  |
| [Cart Page](https://fashgram-store-muskan.netlify.app/cart)  |
| [Wishlist Page](https://fashgram-store-muskan.netlify.app/wishlist) |
| [Login Page](https://fashgram-store-muskan.netlify.app/login)  |
| [Signup Page](https://fashgram-store-muskan.netlify.app/signup) |
| [User Profile Page](https://fashgram-store-muskan.netlify.app/user)

## **Features and Functionalities**
### 1. Landing Page:
- Hero/Banner -  A CTA banner with a tagline and clicking on the Shop Now button will take you to the Product Listing Page with all products.
- Featured Categories - On clicking on any of them, user will be taken to the product listing Page with only that category filtered.
> ![image](https://user-images.githubusercontent.com/46674359/162250701-6a5543fe-696a-417f-9d97-af7cbb0716ba.png)

- Sale Banner with CTA
- Custom carousel featuring brands 
- Customer testimonials

### 2. Responsive Navbar
- Navbar has links to navigate to shop, cart, wishlist and userpage
- The badges on cart and wishlist update as soon as items get added to cart, removed from cart, added to wishlist or removed from wishlist.
- The navbar shows user icon when no user is logged in and shows an avatar when user is logged in. 
- The search bar can be used to search for any product. It will redirect to the products page. The search will be fired on submitting the search query. 
> ![image](https://user-images.githubusercontent.com/46674359/162250196-04364386-aa63-4056-b58e-328d25391af7.png)

### 3. Product Listing
- Includes filter section and product listings 
- Filter section (responsive) - Includes filter by price, rating (high to low), categories, price, ratings, out of stock.
- Clear all button can be clicked to clear all filters. 
> ![image](https://user-images.githubusercontent.com/46674359/162252412-95a49f89-a09f-420b-ba73-769ff5a20338.png)
- Product card contains a primary CTA - "Add to cart" which will add the item to the cart & once added it will show "Go to Cart" on the product card.
- Product card also contains a secondary CTA (heart icon) - To add product to wishlist. 

### 4. Pagination
- Maximum 6 products will be visible per page. Pages can be changed by clicking the chevron icons. 
> ![image](https://user-images.githubusercontent.com/46674359/162255186-12bac213-c6bf-4193-a0a4-022f6a76b3a9.png)
> ![image](https://user-images.githubusercontent.com/46674359/162255227-89097e04-488e-4be2-82c4-b954cef1c661.png)

### 5. Cart Management
- Displays items in cart and total checkout value
- If item is added, item is shown with options to increase or decrease quantity and/or to remove the item or to move it to wishlist.
- Cart totals and total cart items are also dynamically updated.
- When wishlist CTA is selected from cart product, the cart will be moved to wishlist from the cart. 
> ![image](https://user-images.githubusercontent.com/46674359/162256813-23371058-556e-493b-bef4-c656bc794aac.png)

### 6. Wishlist Management 
- Items added to wishlist show here. 
- Items in wishlist have "Add to cart" CTA which deletes it from wishlist and adds it to cart. 
- If the cart already contains that item, it only increases the quantity.
> ![image](https://user-images.githubusercontent.com/46674359/162257427-45b75b2f-aa77-4ce5-871b-6b759a598945.png)

### 7. Signup
- User can see a sign-up page from where they can sign-up using email, first name, last name, password & confirm password.
> ![image](https://user-images.githubusercontent.com/46674359/162260314-27a5bc64-73fb-453d-aafa-aa9e3c42aae9.png)

### 8. Login
- User can see a login page from where they can log in using my email & password.
> ![image](https://user-images.githubusercontent.com/46674359/162260232-e3a39f24-174c-4598-adf9-92c2f17f7df1.png)

- A login modal opens when the user clicks on add to cart without logging in. 
> ![image](https://user-images.githubusercontent.com/46674359/162260045-db9e155a-e244-4c29-9639-8878e0456726.png)

### 9. Loading and Alerts
- Alerts can be seen on user interactions.
![image](https://user-images.githubusercontent.com/46674359/162263613-839682ba-a1f2-4516-8d7c-3c7c2c4a9af0.png)

- Loading spinners can be seen when the data is loading. 

### 10. User Profile 
- The user profile includes details containing the email Id, address, etc.
> ![image](https://user-images.githubusercontent.com/46674359/162260642-4d148366-270c-4f20-a82e-85982018f1ef.png)

#### Responsiveness
All pages are made responsive to mobile screens.
Navbar is also made responsive on mobile screens with a hamburger/close icon to toggle the full navbar.

