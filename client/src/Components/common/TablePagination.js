import React from "react";

const TablePagination = ({ employeesPerPage, totalEmployees, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex items-center justify-center my-5 font-medium space-x-2 text-gray-600 text-xl">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`${
                currentPage === number ? "bg-purple-500 text-gray-50" : null
              } px-4 rounded-md focus:outline-none`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TablePagination;
