import React from "react";
import { GitHub, LogOut } from "react-feather";
import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import { projectData } from "../../Data/data";
import { projectTheme } from "../../Data/projectTheme";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <Container className={`py-3 max-w-full ${projectTheme.background} header`}>
      <header className="max-w-7xl mx-auto flex items-center justify-between text-gray-50">
        <Link to="/">
          <h1 className="font-extrabold text-xl">Employee Dashboard</h1>
        </Link>
        <div className="flex flex-end space-x-6">
          <a href={`${projectData.repositoryUrl}`} target="_blank" rel="noreferrer">
            <GitHub />
          </a>
          <DarkModeToggle />
          <LogOut
            onClick={(e) => {
              e.preventDefault();
              try {
                localStorage.removeItem("employeeToken");
                window.location.href = "/auth/login";
              } catch (error) {
                console.log(error?.message);
              }
            }}
            className="cursor-pointer"
          />
        </div>
      </header>
    </Container>
  );
};

export default Header;
