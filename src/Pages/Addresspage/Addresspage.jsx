import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import {
  useAddress,
  useTitle,
  useAuth,
  useCart,
  useToast,
} from "../../CustomHooks";
import { Pencil } from "../../Assets/Icons/icons";
import "./Addresspage.css";
import { EditAddressModal } from "./EditAddressModal";
import { paymentHandler } from "../../Components/UI/RazorpayPayment/RazorpayPayment";

export const Addresspage = () => {
  useTitle("Address");
  const { addSuccessToast } = useToast();
  const { cartState } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const navigate = useNavigate();
  const { addressData, addAddress } = useAddress();
  const editAddressHandler = (e, address) => {
    e.stopPropagation();
    setShowEditModal({
      showModal: true,
      address,
    });
  };
  const [showEditModal, setShowEditModal] = useState({
    showModal: false,
    address: null,
  });
  const [newAddress, setNewAddress] = useState("");
  useEffect(() => {
    setDeliveryAddress(null);
  }, [addressData]);
  const [expandedInput, setExpandedInput] = useState(false);
  const addNewAddressHandler = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (newAddress) {
      addAddress({
        id: uuid(),
        address: newAddress,
      });
      setNewAddress("");
    }
    setExpandedInput(false);
  };
  const {
    authState: { user },
  } = useAuth();
  return (
    <div className="sub-container address-container">
      <h1 className="styled-title">Checkout</h1>
      <div className="bordered-container m-auto">
        <h4>Select an address</h4>
        {addressData?.map((address) => (
          <div
            className="address-card"
            key={address.id}
            onClick={() => setDeliveryAddress(address.address)}
          >
            <p>{address.address}</p>
            <span
              className="address-edit"
              onClick={(e) => editAddressHandler(e, address)}
            >
              <Pencil />
            </span>
          </div>
        ))}
        {expandedInput && (
          <form onSubmit={addNewAddressHandler}>
            <input
              className="address-input"
              type="text"
              onChange={(e) => {
                setNewAddress(e.target.value);
              }}
              value={newAddress}
            />
          </form>
        )}
        {!expandedInput ? (
          <button
            className="btn btn-black-no-br m-auto"
            onClick={() => {
              setExpandedInput((prev) => !prev);
            }}
          >
            Add New Address
          </button>
        ) : (
          <button
            className="btn btn btn-black-no-br m-auto"
            onClick={addNewAddressHandler}
          >
            Add
          </button>
        )}
      </div>
      <hr className="styled-hr" />
      {showEditModal.showModal && (
        <EditAddressModal
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
        />
      )}
      {deliveryAddress && (
        <div className="bordered-container deliver-address-container m-auto">
          <h4>Delivery Address</h4>
          <p>{deliveryAddress}</p>
          <button
            className="btn btn-black-no-br checkout-btn"
            onClick={() => {
              paymentHandler(user, navigate, cartState, addSuccessToast);
            }}
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};
