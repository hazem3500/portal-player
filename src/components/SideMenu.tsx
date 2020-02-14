import React from "react";
import { Stack, Text, Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { MdPlayArrow, MdFavorite, MdHistory } from "react-icons/md";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SideMenuButton = ({ to, icon, label, ...props }) => {
  return (
    <StyledLink to={to} {...props}>
      {icon}
      <Text>{label}</Text>
    </StyledLink>
  );
};

const SideMenu = () => {
  return (
    <Stack bg="gray.600" color="gray.100" spacing={8}>
      <SideMenuButton to="/" icon={<MdPlayArrow size={32} />} label="Home" />
      <SideMenuButton
        to="/favorites"
        icon={<MdFavorite size={32} />}
        label="favorites"
      />
      <SideMenuButton
        to="/history"
        icon={<MdHistory size={32} />}
        label="History"
      />
    </Stack>
  );
};

export default SideMenu;
