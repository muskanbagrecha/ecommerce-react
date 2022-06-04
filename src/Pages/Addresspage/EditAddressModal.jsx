import { Modal } from "../../Components/UI";
import { useState } from "react";
import { useAddress } from "../../CustomHooks";

export const EditAddressModal = ({ showEditModal, setShowEditModal }) => {
  const [addressInput, setAddressInput] = useState(
    showEditModal.address.address
  );
  const { editAddress } = useAddress();
  const editCurrentAddress = () => {
    if (addressInput) {
      editAddress(showEditModal.address.id, addressInput);
      setShowEditModal({
        showModal: false,
        address: null,
      });
    }
  };

  return (
    <>
      {showEditModal.showModal && (
        <Modal
          onReset={() =>
            setShowEditModal({
              showModal: false,
              address: null,
            })
          }
        >
          <div className="edit-address-modal">
            <h4>Edit Address</h4>
            <input
              type="text"
              placeholder="Enter your address"
              onChange={(e) => {
                setAddressInput(e.target.value);
              }}
              value={addressInput}
            />
            <button
              className="btn btn-black-no-br"
              onClick={editCurrentAddress}
            >
              Edit
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
