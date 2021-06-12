import React from "react";

const EmployeeSalaryTable = () => {
  const tableHeadings = ["Employee ID", "First Name", "Last Name", "CTC", "Salary", "Action"];
  return (
    <div className="flex flex-col mt-5 overflow-x-scroll xl:overflow-x-hidden">
      <table className="my-8 salary-table shadow overflow-hidden sm:rounded-lg ">
        <thead className="bg-gray-300">
          <tr className="text-left text-xs font-base text-gray-500 uppercase tracking-wider">
            {tableHeadings.map((heading, index) => {
              return (
                <th scope="col" className="px-6 py-3" key={heading}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!tableHeadings ? (
            tableHeadings?.map((bid, index) => {
              return (
                <tr
                  className="bg-gray-200 text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-600"
                  key={bid}>
                  <td className=" px-8 py-4">{index + 1}</td>
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

export default EmployeeSalaryTable;
