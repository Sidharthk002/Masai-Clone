import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import './Cart.css'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Divider,
  HStack,
  Center,
  Input
} from "@chakra-ui/react";

 function CartItem(props) {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  useContext(ShopContext);

  return (
    <>
   
    <Flex  h={'235px'} mt={'30px'} w={'80%'} ml={'200px'} p={'0px'}>
        <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        width={"50%"}
        height={'200px'}
        // ml={"160px"}
        // mt={"120px"}
      >

        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          height={"120px"}
          p={"5"}
          borderRadius={"30px"}
          src={image}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Flex gap={"150px"} alignItems={"center"} mt={"-5px"}>
              <Heading fontSize={"18px"} overflow={"hidden"}>
                {title}
              </Heading>

              <Button bg={"white"} color="rgb(244, 51, 151)">
                x EDIT
              </Button>
            </Flex>

            <Flex fontFamily={"sans-serif"} fontWeight={"thin"} py="1">
              <Text>Size : M</Text>

              <Button  ml={'155px'} onClick={()=>{
                removeFromCart(id);
              }}>
                -
              </Button>
              <Input w={'50px'} value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
              <Button   onClick={()=>{
                addToCart(id);
              }}>
                +
              </Button>
            </Flex>
            <Text fontFamily={"sans-serif"}>₹ {price*80}.00</Text>
          </CardBody>

          <CardFooter>
            <Button bg={"white"} color="rgb(244, 51, 151)">
              x REMOVE
            </Button>
          </CardFooter>
        </Stack>
      </Card>
     
      <Center height='200px' ml={'17px'} >
      <Divider orientation='vertical' />
    </Center>

      <HStack direction="row" h="310px" p={4}  mt={'72px'} height={'184px'}>
      
        <Flex direction={'column'} paddingBottom={'180px'}>
        <Text  mt={'50px'} mb={'20px'} color={'rgb(51, 51, 51)'} fontWeight={600} fontSize={'18px'} lineHeight={'24px'}>Price Details</Text>
        <Flex  mb={'20px'} gap={'100px'}>
        <Text fontSize={'16px'} fontWeight={400} lineHeight={'20px'} fontFamily={'Miler book'} color={'rgb(51, 51, 51)'}>Total Product Price</Text>
        <Text></Text>
        </Flex>
        <Divider/>
        <Flex mt={'20px'} gap={'135px'} fontSize={'18px'} fontWeight={600} lineHeight={'24px'} fontFamily={'Mier demi'} color={'rgb(51, 51, 51)'}>
        <Text >Order Total</Text>
        <Text>₹ 549</Text>
        </Flex>

        <div style={{background:'rgb(249,249,249',borderRadius:"0px",marginTop:'50px'}}>
        <span font-size="12px" font-weight="demi" color="greyBase" style={{color:'rgb(51,51,51',fontStyle:'normal', fontWeight:600,lineHeight:"16px",fontFamily:'Mier demi'}}>Clicking on ‘Continue’ will not deduct any money</span>
        </div>
        <Button mt={'15px'} fontSize={'18px'} color={'white'} bgColor={'rgb(244, 51, 151)' } _hover={{bgColor:"rgb(244,51,51"}}>Continue</Button>

        </Flex>

      </HStack>

    </Flex>
    </>
  );
}



export default CartItem;
