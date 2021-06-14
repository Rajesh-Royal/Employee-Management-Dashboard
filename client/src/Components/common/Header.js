import React from "react";
import Container from "../../Container/Container";
import { GitHub } from "react-feather";
import { projectData } from "../../Data/data";
import { projectTheme } from "../../Data/projectTheme";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <Container className={`py-3 max-w-full ${projectTheme.background}`}>
      <header className="max-w-7xl mx-auto flex items-center justify-between text-gray-50">
        <h1 className="font-extrabold text-xl">Employee Dashboard</h1>
        <div className="flex flex-end space-x-6">
          <a href={`${projectData.repositoryUrl}`} target="_blank" rel="noreferrer">
            <GitHub />
          </a>
          <DarkModeToggle />
        </div>
      </header>
    </Container>
  );
};

export default Header;
