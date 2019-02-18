import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./index.css";
const Footer = () => {
  return (
    <Menu className="trench-footer" borderless color="grey" inverted widths={1}>
      <Menu.Item>
        <Icon name="copyright outline" />
        Copyright ASDev 2019
      </Menu.Item>
    </Menu>
  );
};

export { Footer };
