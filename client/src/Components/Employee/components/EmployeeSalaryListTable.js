import React from "react";
import Button from "../../common/Button";

const EmployeeSalaryListTable = ({
  loading,
  data,
  activeEmployee,
  changeEmployeeSalaryDetails,
  currentEmployees,
}) => {
  const tableHeadings = [
    "Employee ID",
    "First Name",
    "Last Name",
    "city",
    "CTC",
    "Salary/Month",
    "Action",
  ];
  console.log(loading);
  return (
    <div className="flex flex-col overflow-x-scroll xl:overflow-x-hidden my-3">
      <table className="salary-table shadow overflow-hidden sm:rounded-lg divide-y divide-gray-200">
        <thead className="bg-gray-200 dark:bg-gray-600">
          <tr className="text-left text-xs font-base text-gray-500 dark:text-gray-200 uppercase tracking-wider">
            {tableHeadings.map((heading) => {
              return (
                <th scope="col" className="px-6 py-3" key={heading}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-400">
          {!loading && data ? (
            currentEmployees.map((employee, index) => {
              return (
                <tr
                  className={`bg-gray-100 text-sm text-gray-500 dark:text-gray-200 dark:bg-gray-500 ${
                    index === activeEmployee ? "active-row" : ""
                  }`}
                  key={employee?._id}>
                  <td className=" px-7  py-6">{index + 1}</td>
                  <td className=" px-7  py-6">{employee?.firstName}</td>
                  <td className=" px-7  py-6">{employee?.lastName}</td>
                  <td className=" px-7  py-6">{employee?.city}</td>
                  <td className=" px-7  py-6">{employee?.ctc}</td>
                  <td className=" px-7  py-6">₹ {(employee?.ctc / 12).toFixed(3)}</td>
                  <td className=" px-7  py-6">
                    <Button
                      className="text-xs rounded-full"
                      onClick={(e) => {
                        changeEmployeeSalaryDetails(employee, index);
                      }}>
                      Details
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <React.Fragment>
              {tableHeadings?.map((heading) => {
                return (
                  <tr className="text-center animate-pulse bg-gray-200" key={heading}>
                    <td colSpan={tableHeadings?.length} className="h-10"></td>
                  </tr>
                );
              })}
            </React.Fragment>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSalaryListTable;
