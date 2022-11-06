import React from "react";
import { styled } from "baseui";
import { MonoHeadingMedium, MonoLabelSmall } from "baseui/typography";
import { Button } from "baseui/button";

const NavbarContainer = styled("div", ({ $theme }) => ({
  color: $theme.colors.backgroundInversePrimary,
  backgroundColor: $theme.colors.backgroundPrimary,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Navbar = ({ account, setAccount }) => {
  const handleClick = async () => {
    if (window.ethereum) {
      const req = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      localStorage.setItem("ETH_ACCOUNT", req[0]);
      setAccount(req[0]);
    } else {
      alert("install metamask extension!!");
    }
  };

  return (
    <NavbarContainer>
      <MonoHeadingMedium style={{ marginLeft: "5%" }}>De-Git</MonoHeadingMedium>
      {account ? (
        <MonoLabelSmall style={{ marginRight: "5%" }}>{account}</MonoLabelSmall>
      ) : (
        <Button
          style={{ height: "50%", marginRight: "5%" }}
          onClick={handleClick}
        >
          Connect Wallet
        </Button>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
