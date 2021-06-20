import React, { useState } from "react";
import Modal from "react-modal";
import { modalStyle } from "../../../utility/ModalStyle";
import Button from "../../common/Button";
import AddNewEmployeeForm from "./AddNewEmployeeForm";

const AddNewEmployee = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [employeeProfileData, setEmployeeProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    ctc: 0,
  });

  //   update state on Input change
  const onProfileDataChange = (e) => {
    setEmployeeProfileData({
      ...employeeProfileData,
      [e.target.name]: e.target.name === "ctc" ? parseInt(e.target.value) || "" : e.target.value,
    });
  };
  // closeModal
  const closeAddEmployeeModal = () => setModalIsOpen(false);
  return (
    <React.Fragment>
      <div className="flex justify-between items-center my-4">
        <Button
          onClick={() => {
            setModalIsOpen(true);
            setEmployeeProfileData({});
          }}>
          Add Employee
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        style={modalStyle}
        contentLabel="Add Employee Modal">
        <AddNewEmployeeForm
          employeeProfileData={employeeProfileData}
          onProfileDataChange={onProfileDataChange}
          closeAddEmployeeModal={closeAddEmployeeModal}
        />
      </Modal>
    </React.Fragment>
  );
};

export default AddNewEmployee;
