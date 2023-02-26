import React from "react";
import {
  Flex,
  Input,
  IconButton,
  Heading,
  Text,
  Spacer,
  Box,
  Menu, MenuButton, MenuItem, MenuList
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="white"
        color="gray.800"
        boxShadow="md"
      >
        <Flex align="center">
          <IconButton
            aria-label="Login"
            icon={<BsFillPersonFill size={25} />}
            variant="ghost"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
            alt="India"
            width={30}
            height={30}
            style={{ borderRadius: "50%", marginLeft: "1rem" }}
          />
          <span>&#8377;(INR)</span>
        </Flex>

        <Flex align="center" flexDirection="column" bg="white">
          <Heading>CHARLES TYRWHITT</Heading>
          <p style={{ fontSize: '12px' }}>JERYMN STREET LONDON</p>
        </Flex>

        <Flex align="center">
          <Input placeholder="Search" size="sm" mr={2} />
          <IconButton
            aria-label="Cart"
            icon={<FiShoppingCart size={20} />}
            size="sm"
            variant="ghost"
          />
        </Flex>
      </Flex>
      <Navbar2 />
    </>
  );
};
const Navbar2 = () => {
  return (
    <Flex as="nav" align="center" justify="space-around" wrap="wrap" padding="1rem" bg="gray" color="gray.800" boxShadow="md">
  <Flex align="center" >
    <Menu>
      <MenuButton   fontSize="lg"  mr={4}>
        SHIRTS
      </MenuButton>
      <MenuList>
        <MenuItem>Button 1</MenuItem>
        <MenuItem>Button 2</MenuItem>
        <MenuItem>Button 3</MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton fontSize="lg"  mr={4}>
        SUITS
      </MenuButton>
      <MenuList>
        <MenuItem>Button 1</MenuItem>
        <MenuItem>Button 2</MenuItem>
        <MenuItem>Button 3</MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton fontSize="lg"  mr={4}>
        TROUSERS
      </MenuButton>
      <MenuList>
        <MenuItem>Button 1</MenuItem>
        <MenuItem>Button 2</MenuItem>
        <MenuItem>Button 3</MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton fontSize="lg"  mr={4}>
        KNITWEAR
      </MenuButton>
      <MenuList>
        <MenuItem>Button 1</MenuItem>
        <MenuItem>Button 2</MenuItem>
        <MenuItem>Button 3</MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton fontSize="lg"  mr={4}>
        COATS &amp; JACKETS
      </MenuButton>
      <MenuList>
        <MenuItem>Button 1</MenuItem>
        <MenuItem>Button 2</MenuItem>
        <MenuItem>Button 3</MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton fontSize="lg"  mr={4}>
        SHOES
      </MenuButton>
      <MenuList>
        <MenuItem>Button 1</MenuItem>
        <MenuItem>Button 2</MenuItem>
        <MenuItem>Button 3</MenuItem>
      </MenuList>
    </Menu>

    <Menu>
      <MenuButton fontSize="lg" >
        ACCESSORIES
      </MenuButton>
      <MenuList>
        <MenuItem>Button 1</MenuItem>
        <MenuItem>Button 2</MenuItem>
        <MenuItem>Button 3</MenuItem>
      </MenuList>
    </Menu>
  </Flex>
</Flex>
  );
};

export default Navbar;
