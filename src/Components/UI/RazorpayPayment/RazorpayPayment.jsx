const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const paymentHandler = async (
  user,
  navigate,
  cartState,
  addSuccessToast
) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  const amt = cartState?.items.reduce(
    (acc, currItem) => (acc += currItem.price),
    0
  );
  const options = {
    key: process.env.REACT_APP_RAZOR_KEY_ID,
    currency: "INR",
    amount: amt * 100, //total amount you can take from params
    name: "Fashgram Store",
    description: "Thank you for shopping with us.",
    handler: async function (response) {
      if (!!response.razorpay_payment_id) {
        navigate("/");
        addSuccessToast("Order placed successfully!");
      }
    },
    prefill: {
      name: user?.name ?? "New user", // use is coming from auth context
      email: user?.email ?? "example@gmail.com",
      contact: "1234567899",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
