import React from "react";
import { Input, Menu } from "semantic-ui-react";

const Navigation = () => {
  return (
    <Menu secondary>
      <Menu.Item name="home" />
      <Menu.Item name="messages" />
      <Menu.Item name="friends" />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item name="logout" />
      </Menu.Menu>
    </Menu>
  );
};

export default Navigation;
