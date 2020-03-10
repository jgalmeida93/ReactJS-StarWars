import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Menu inverted color="black">
        <Container>
          <Link to="/">
            <Menu.Item name="Star wars API"></Menu.Item>
          </Link>
          <Link to="/personagens">
            <Menu.Item name="Personagens"></Menu.Item>
          </Link>
          <Link to="/planetas">
            <Menu.Item name="Planetas"></Menu.Item>
          </Link>
        </Container>
      </Menu>
    </div>
  );
}
