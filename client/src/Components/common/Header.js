import React from "react";
import Container from "../../Container/Container";
import { GitHub } from "react-feather";
import { projectData } from "../../Data/data";

const Header = () => {
  return (
    <Container className="py-3 bg-purple-500 max-w-full">
      <header className="max-w-7xl mx-auto flex items-center justify-between text-gray-50">
        <h1 className="font-extrabold text-xl">Employee Dashboard</h1>
        <a href={`${projectData.repositoryUrl}`} target="_blank" rel="noreferrer">
          <GitHub />
        </a>
      </header>
    </Container>
  );
};

export default Header;
