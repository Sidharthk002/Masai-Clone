import { React, useState, useEffect } from "react";
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
  Divider,
  useDisclosure,
  Fade,
  VStack,
} from "@chakra-ui/react";

import Contain from "./Contain";
import axios from "axios";
import Loader from "./Loader";

const Sort = () => {
  const [value, setValue] = useState("Sort by:");
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const [text,setText] = useState("");

  const fetchedData = (text) => {
    try {
      setLoading(true);
      axios
        .get(`https://fakestoreapi.com/products`)
        .then((res) =>
          value === "option1"
            ? setData(res.data.sort((a, b) => b.price - a.price))
            : value === "option2"
            ? setData(res.data.sort((a, b) => a.price - b.price))
            : setData(res.data)
        );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchedData();
  }, [value]);
  console.log(data)
  
  


useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/category/${text}`)
  .then((res)=>setData(res.data))

},[text])
  

  const handleClick = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

 
  const handle=(e)=>{
    setText(e.target.value)
    console.log(e.target.value)

  }
 
  
  return (
    <Box>
      <Container
        mt={"150px"}
        bgColor={" rgb(255, 255, 255)"}
        width={"300px"}
        color={'rgn(51,51,51)'}
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
          onClick={handleClick}
          borderRadius={"5px"}
        >
          <option value="option1">Price (High to Low)</option>
          <option value="option2">Price (Low to High)</option>
        </Select>
        <Divider mt={"20px"} w={"250px"} />
        <Category />


        <div style={{ marginTop: "20px",height:"43px" }}>
      <Button onClick={onToggle} w={"250px"}>
        Category
      </Button>
      <Fade in={isOpen}>
        <Box
          p="38px"
          color="white"
          bg="gray.100"
          rounded="md"
          shadow="md"
          w={"250px"}
        >
          <VStack color={"black"} onClick={handle} cursor={'pointer'}>
            <option value="men's clothing"  cursor="pointer" _hover={{ textDecoration: "underline" }}>
              Men
            </option>
            <option value="women's clothing" cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
              Women
            </option>
            <option value="jewelery" cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
              Jewellery
            </option>
            <option value="electronics" cursor={"pointer"} _hover={{ textDecoration: "underline" }}>
              Electronics
            </option>
          </VStack>
         
        </Box>
      </Fade>
    </div>

        <Contain data={data} load={loading} />
      </Container>
    </Box>
  );
};

export default Sort;

const Category = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Menu>
        <MenuButton
          as={Button}
          w={"250px"}
          bg={"white"}
          border={"1px "}
          borderRadius={"5px"}
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

