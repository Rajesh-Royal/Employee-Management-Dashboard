import React from "react";
import { DollarSign, Mail, Map, User, XCircle } from "react-feather";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

import Button from "../../common/Button";
import FormInputBox from "../../common/FormInputBox";
import { SectionHeading } from "../../common/Typography";
import { ADD_NEW_EMPLOYEE } from "../../../core/gql-operations/mutation/add-new-employee.mutation";
import { validateEmail } from "../../../utility/UtilityFunctions";

const AddNewEmployeeForm = ({
  employeeProfileData,
  onProfileDataChange,
  closeAddEmployeeModal,
}) => {
  const [addNewEmployee] = useMutation(ADD_NEW_EMPLOYEE);

  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="shadow-md border border-gray-100 p-6 bg-gray-50 max-w-3xl relative">
      <button
        className="absolute right-2 -mt-12 focus:outline-none"
        onClick={() => {
          closeAddEmployeeModal();
        }}>
        <XCircle className="mt-8 w-8 h-8 text-purple-400" aria-hidden="true" />
      </button>
      <SectionHeading>Add a New Employee</SectionHeading>
      <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
        <FormInputBox
          label="First Name"
          icon={<User />}
          placeholder="First Name"
          name="firstName"
          type="text"
          ariaLabel="firstname"
          value={employeeProfileData?.firstName}
          onChange={(e) => {
            onProfileDataChange(e);
          }}
        />
        <FormInputBox
          label="Last Name"
          icon={<User />}
          placeholder="Last Name"
          name="lastName"
          type="text"
          ariaLabel="lastname"
          value={employeeProfileData?.lastName}
          onChange={(e) => {
            onProfileDataChange(e);
          }}
        />
        <FormInputBox
          label="Email"
          icon={<Mail />}
          placeholder="Email Address"
          name="email"
          type="email"
          ariaLabel="Employee Email Address"
          value={employeeProfileData?.email}
          onChange={(e) => {
            onProfileDataChange(e);
          }}
        />
        <FormInputBox
          label="City"
          icon={<Map />}
          placeholder="City"
          name="city"
          type="text"
          ariaLabel="city"
          value={employeeProfileData?.city}
          onChange={(e) => {
            onProfileDataChange(e);
          }}
        />
        <FormInputBox
          label="CTC"
          icon={<DollarSign />}
          placeholder="CTC"
          name="ctc"
          type="number"
          ariaLabel="cost to company"
          value={employeeProfileData?.ctc}
          onChange={(e) => {
            onProfileDataChange(e);
          }}
        />
        <div className="flex flex-col items-center justify-end mt-8">
          <Button
            className=" w-full"
            onClick={() => {
              if (!validateEmail(employeeProfileData?.email)) {
                toast.error("Email not valid");
                return 0;
              }
              if (employeeProfileData?.ctc === "") {
                toast.error("CTC cannot be null");
                return 0;
              }
              addNewEmployee({
                variables: employeeProfileData,
                refetchQueries: ["employeeListRead"],
              })
                .then((res) => {
                  if (res?.data?.employeeCreate?._id) {
                    toast.success("New Employee Added");
                  }
                })
                .catch((error) => {
                  toast.error(error?.message);
                });
            }}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddNewEmployeeForm;
