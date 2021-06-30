import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { DollarSign, XCircle } from "react-feather";
import Modal from "react-modal";
import { REMOVE_EMPLOYEE_SALARY_STRUCTURE } from "../../../core/gql-operations/mutation/remove-employee-salary-structure.mutation";
import { READ_EMPLOYEE_SALARY_STRUCTURE } from "../../../core/gql-operations/query/read-employee-salary-structure-query";
import { projectTheme } from "../../../Data/projectTheme";
import { modalStyle } from "../../../utility/ModalStyle";
import { capitalize } from "../../../utility/UtilityFunctions";
import Button from "../../common/Button";
import FormInputBox from "../../common/FormInputBox";
import { SectionHeading } from "../../common/Typography";
import AddNewSalaryFieldsElement from "./AddNewSalaryFieldsElement";

const CreateEmployeeSalaryStructure = () => {
  const { data: EmployeeSalaryStructureData, loading: SalaryStructureLoading } = useQuery(
    READ_EMPLOYEE_SALARY_STRUCTURE
  );
  const [removeEmployeeSalaryStructure] = useMutation(REMOVE_EMPLOYEE_SALARY_STRUCTURE);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // remove salaryField
  const removeSalary = (fieldId) => {
    removeEmployeeSalaryStructure({
      variables: {
        fieldId: fieldId,
      },
      refetchQueries: ["getEmployeeSalaryStructureMetaFields", "employeeListRead"],
    });
  };
  // closeModal
  const closeSalaryStructureModal = () => setModalIsOpen(false);
  return (
    <React.Fragment>
      <div className="flex justify-between items-center my-4">
        <Button
          onClick={() => {
            setModalIsOpen(true);
          }}>
          Create Salary Structure
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        ariaHideApp={false}
        style={modalStyle}
        contentLabel="Add Employee Modal">
        <div className="overflow-y-auto">
          <form
            onClick={(e) => e.preventDefault()}
            className="shadow-md border border-gray-100 p-6 bg-gray-50 dark:bg-gray-600 dark:border-gray-600
          max-w-5xl relative overflow-hidden">
            <button
              className="absolute right-2 -mt-12 focus:outline-none"
              onClick={() => closeSalaryStructureModal()}>
              <XCircle
                className={`mt-8 w-8 h-8 ${projectTheme.closeXButtonColor}`}
                aria-hidden="true"
              />
            </button>
            <SectionHeading>Employee Salary Structure</SectionHeading>
            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 mt-5">
              <div>
                <SectionHeading className="border-b max-w-xs">Salary</SectionHeading>
                <div className="grid grid-cols-1 gap-x-5">
                  {!SalaryStructureLoading && EmployeeSalaryStructureData
                    ? EmployeeSalaryStructureData?.getEmployeeSalaryStructureMetaFields?.map(
                        (salaryField) => {
                          return salaryField?.type === "salary" ? (
                            <div className="relative max-w-xs">
                              <XCircle
                                className={`w-4 h-4 absolute -right-3 top-12 focus:outline-none cursor-pointer ${projectTheme.closeXButtonColor}`}
                                aria-hidden="true"
                                onClick={() => removeSalary(salaryField?._id)}
                              />
                              <FormInputBox
                                key={salaryField?._id}
                                label={capitalize(salaryField?.field_name)}
                                icon={<DollarSign />}
                                placeholder={capitalize(salaryField?.field_name)}
                                name={capitalize(salaryField?.field_name)}
                                type={salaryField?.type.toLowerCase()}
                                ariaLabel={capitalize(salaryField?.field_name)}
                                value={salaryField?.field_name}
                                onChange={(e) => {}}
                              />
                            </div>
                          ) : null;
                        }
                      )
                    : null}
                </div>
              </div>
              <div>
                <SectionHeading className="border-b max-w-xs">Deduction</SectionHeading>
                <div className="grid grid-cols-1 gap-x-5">
                  {!SalaryStructureLoading && EmployeeSalaryStructureData
                    ? EmployeeSalaryStructureData?.getEmployeeSalaryStructureMetaFields?.map(
                        (salaryField) => {
                          return salaryField?.type === "deduction" ? (
                            <div className="relative max-w-xs">
                              <XCircle
                                className={`w-4 h-4 absolute -right-3 top-12 focus:outline-none cursor-pointer ${projectTheme.closeXButtonColor}`}
                                aria-hidden="true"
                                onClick={() => removeSalary(salaryField?._id)}
                              />
                              <FormInputBox
                                key={salaryField?._id}
                                label={capitalize(salaryField?.field_name)}
                                icon={<DollarSign />}
                                placeholder={capitalize(salaryField?.field_name)}
                                name={capitalize(salaryField?.field_name)}
                                type={salaryField?.type.toLowerCase()}
                                ariaLabel={capitalize(salaryField?.field_name)}
                                value={salaryField?.field_name}
                                onChange={(e) => {}}
                              />
                            </div>
                          ) : null;
                        }
                      )
                    : null}
                </div>
              </div>
            </div>
            <AddNewSalaryFieldsElement />
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default CreateEmployeeSalaryStructure;
