import * as React from "react";
import { AppNavBar, setItemActive } from "baseui/app-nav-bar";

const Navbar = () => {
  const [mainItems, setMainItems] = React.useState([]);

  return (
    <AppNavBar
      title="De-Git"
      mainItems={mainItems}
      onMainItemSelect={(item) => {
        setMainItems((prev) => setItemActive(prev, item));
      }}
      username="Allen Guan"
    />
  );
};

export default Navbar;
