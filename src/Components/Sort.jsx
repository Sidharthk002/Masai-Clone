import React from "react";
import {
  Box,
  Button,
  Container,
  Menu,
  Select,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Sort = () => {
  const [data, setData] = React.useState([]);

  const arr = [{ price: 200 }, { price: 100 }];
  console.log(data);

  //   React.useEffect(()=>{
  //     let a = arr.sort((a, b) => b.price - a.price);
  //     setData(a);
  //   },[])

  const set = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    e.target.value == "option1"
      ? setData(arr.sort((a, b) => b.price - a.price))
      : setData(arr.sort((a, b) => a.price - b.price));
  };
  return (
    <>
      <Container
        mt={"40px"}
        bgColor={" rgb(255, 255, 255)"}
        width={"7xl"}
        border={"1px solid"}
        ml={"80px"}
        height={"100vh"}
      >
        <Text color={"black"} fontFamily={"bold"} fontSize={"32px"}>
          Products For You
        </Text>
        <Select
          placeholder="Sort by :"
          mt={"30px"}
          w={"250px"}
          onClick={set}
          borderRadius={"5px"}
        >
          <option value="option1">Price (High to Low)</option>
          <option value="option2">Price (Low to High)</option>
        </Select>
        <Divider mt={'20px'} w={'250px'}/>
        <Category />
      </Container>
    </>
  );
};

export default Sort;

const Category = () => {
  return (
    <div style={{marginTop:"20px"}}>
      <Menu >
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w={'250px'} bg={'white'} border={'1px '} borderRadius={"5px"} borderRadiusColor={" red"}
        >
          Category
        </MenuButton>
        <MenuList>
          <MenuItem>Jeans</MenuItem>
          <MenuItem>Shirts</MenuItem>
          <MenuItem>Sarees</MenuItem>
          <MenuItem>Kurta</MenuItem>
          <MenuItem>Sungalsses</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

