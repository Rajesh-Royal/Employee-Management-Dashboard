import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { DollarSign, Mail, Map, User, XCircle } from "react-feather";
import { toast } from "react-toastify";
import { ADD_NEW_EMPLOYEE } from "../../../core/gql-operations/mutation/add-new-employee.mutation";
import { projectTheme } from "../../../Data/projectTheme";
import { validateEmail } from "../../../utility/UtilityFunctions";
import Button from "../../common/Button";
import FormInputBox from "../../common/FormInputBox";
import { SectionHeading } from "../../common/Typography";

const AddNewEmployeeForm = ({
  employeeProfileData,
  onProfileDataChange,
  closeAddEmployeeModal,
}) => {
  const [addNewEmployee] = useMutation(ADD_NEW_EMPLOYEE);
  const [requestLoading, setRequestLoading] = useState(false);

  return (
    <form
      onClick={(e) => e.preventDefault()}
      className="shadow-md border border-gray-100 p-6 bg-gray-50 dark:bg-gray-600 dark:border-gray-600 max-w-3xl relative overflow-hidden">
      <button
        className="absolute right-2 -mt-12 focus:outline-none"
        onClick={() => {
          closeAddEmployeeModal();
        }}>
        <XCircle className={`mt-8 w-8 h-8 ${projectTheme.closeXButtonColor}`} aria-hidden="true" />
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
              setRequestLoading(true);

              if (!validateEmail(employeeProfileData?.email)) {
                toast.error("Email not valid");
                setRequestLoading(false);
                return 0;
              }
              if (employeeProfileData?.ctc === "") {
                toast.error("CTC cannot be null");
                setRequestLoading(false);
                return 0;
              }
              addNewEmployee({
                variables: employeeProfileData,
                refetchQueries: ["employeeListRead"],
              })
                .then((res) => {
                  setRequestLoading(false);
                  if (res?.data?.employeeCreate?._id) {
                    toast.success("New Employee Added");
                  }
                })
                .catch((error) => {
                  setRequestLoading(false);
                  toast.error(error?.message);
                });
            }}
            isLoading={requestLoading}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddNewEmployeeForm;
