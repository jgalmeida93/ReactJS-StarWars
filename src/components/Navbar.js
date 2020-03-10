import React, { useState, useEffect } from "react";
import { Menu, Container, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoMdPlanet } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import { IconContext } from "react-icons";

export default function Navbar() {
  const [activeItem, setactiveItem] = useState("Início");

  function handleItemClick(e, { name }) {
    setactiveItem(name);
  }

  return (
    <div>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Container>
            <Link to="/">
              <Menu.Item
                name="Início"
                active={activeItem === "Início"}
                onClick={handleItemClick}
              >
                <FaHome /> &nbsp;&nbsp; Início
              </Menu.Item>
            </Link>
            <Link to="/personagens">
              <Menu.Item
                name="Personagens"
                active={activeItem === "Personagens"}
                onClick={handleItemClick}
              >
                <MdPeople /> &nbsp;&nbsp; Personagens
              </Menu.Item>
            </Link>
            <Link to="/planetas">
              <Menu.Item
                name="Planetas"
                active={activeItem === "Planetas"}
                onClick={handleItemClick}
              >
                <IoMdPlanet /> &nbsp;&nbsp; Planetas
              </Menu.Item>
            </Link>
            <Menu.Menu position="right">
              <Menu.Item name="github">
                <a href="https://github.com/jgalmeida93">
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <FaGithub />
                  </IconContext.Provider>
                </a>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Segment>
    </div>
  );
}
