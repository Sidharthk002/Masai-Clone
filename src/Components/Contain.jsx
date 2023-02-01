import { React, useState, useEffect, useContext } from "react";
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
  GridItem,
  Image,
  Stack,
  Heading,
  ButtonGroup,
  Grid,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { ShopContext } from "../Context/ShopContext";

import axios from "axios";
import Loader from "./Loader";

const Contain = (props) => {
  const {addToCart,cartItems}= useContext(ShopContext);

  if (props.loading) {
    return <Loader />;
  }

  return (
    <div>
    
      <Grid
        templateColumns="repeat(4,1fr)"
        mt={"-220px"}
        ml={"290px"}
        gap={"6"}
      >
        {
          props.data && props.data.map((el) => (
            <GridItem key={el.id}>
              <Card w={'260px'} h={'500px'}>
                <CardBody>
                  <Image
                    src={el.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    h={'150px'}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{el.title}</Heading>
                    <Text h={'50px'} overflowY={'hidden'}>{el.description}</Text>
                    <Text color="blue.600" fontSize="2xl" >
                      ₹ {Math.floor(el.price*80)}.00
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue" onClick={()=>{
                      addToCart(el.id)
                    }}>
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </Grid>
    </div>
  );
};

export default Contain;
