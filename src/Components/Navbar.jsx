import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Divider,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { BsCart2, BsPhone } from "react-icons/bs";
import Navbar2 from "./Navbar2";
import Home from './Home'
import Sort from "./Sort";
import { useNavigate } from "react-router-dom";
// import {logo} from "../public/images/logo.png"


const Links = ["Dashboard", "Projects", "Profile"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
const navigate = useNavigate();


  return (
    <>
      <Box
        bg={useColorModeValue("white")}
        px={{ base: "none", md: 4 }}
        w={{ base: "100%" }}
        margin={{ base: "0px" }}
        p={"0px 30px"}
        borderBottom={'1px'}
        borderBottomColor={'gray.300'}
        h={'80px'}
        position={'fixed'} zIndex={'sticky'}top={0}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image
              src="/images/logo.png"
              alt="logo"
              w={{ base: "100px", sm: "120px" }}
              ml={{ base: "25px", md: "1px", xl: "40px" }}
            />
            <Stack spacing={4}>
              <InputGroup
                display={{ base: "none", sm: "block" }}
                w={{ md: "240px", lg: "440px", xl: "500px" }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.600" />}
                />
                <Input
                  type="text"
                  placeholder="Try Saree, Kurti or Search by product Code"
                />
              </InputGroup>
            </Stack>
          </HStack>
          <Flex alignItems={"center"} spacing={{ sm: "2" }}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                p={"4"}
                
              >
                <Text
                  display={{ base: "none", md: "block" }}
                  pr={{ sm: "60px" }}
                  w={{ md: "2px" }}
                  mr={"55px"}
                >
                  Download App
                </Text>
              </MenuButton>
              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Sign Up</MenuItem>
                <MenuDivider />
                <MenuItem>My Orders</MenuItem>
              </MenuList>
            </Menu>
            <Text height={"100%"} width={1} backgroundColor={"#909090"}></Text>
            <Text
              w={"137px"}
              display={{ base: "none", md: "block" }}
            >
              Become a Supplier
            </Text>
            <Spacer />

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                p={"4"}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <Text
                  display={{ base: "none", md: "block" }}
                  pr={{ sm: "60px" }}
                  // border={"1px solid"}
                  w={{ md: "2px" }}
                >
                  Profile
                </Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Sign Up</MenuItem>
                <MenuDivider />
                <MenuItem>My Orders</MenuItem>
              </MenuList>
            </Menu>
            
            <BsCart2
              size={"30px"}
              display={{ base: "block" }}
              cursor={"pointer"}
              mr={{ md: "510px" }}
              onClick={()=>navigate("/cart")}
            />
        
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

      </Box>
      <Navbar2/>
      <Home/>
      <Sort/>
    </>
  );
}
