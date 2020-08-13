import React from "react";
import { Stack, Text, Box, PseudoBox } from "@chakra-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import { MdPlayArrow, MdFavorite, MdHistory, MdSearch } from "react-icons/md";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SideMenuButton = ({ to, icon, label, ...props }) => {
  const match = useRouteMatch(to);
  return (
    <PseudoBox
      as={StyledLink}
      transition="background 0.2s ease-out"
      py={4}
      bg={match && match.isExact && "gray.600"}
      _hover={{
        bg: !(match && match.isExact) && "gray.700",
      }}
      to={to}
      {...props}
    >
      {icon}
      <Text>{label}</Text>
    </PseudoBox>
  );
};

const SideMenu = () => {
  return (
    <Box bg="gray.800" color="gray.100">
      <SideMenuButton to="/" icon={<MdPlayArrow size={32} />} label="Home" />
      <SideMenuButton
        to="/search"
        icon={<MdSearch size={32} />}
        label="search"
      />
      <SideMenuButton
        to="/history"
        icon={<MdHistory size={32} />}
        label="History"
      />
    </Box>
  );
};

export default SideMenu;
