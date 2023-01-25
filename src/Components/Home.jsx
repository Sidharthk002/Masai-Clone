import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  HStack,
  Divider,
  Grid,
  Spacer,
} from "@chakra-ui/react";

import { FaGooglePlay } from "react-icons/fa";

export default function CallToActionWithVideo() {
  return (
    <div >
      <Container
        maxW={"7xl"}
        border={"1px"}
        borderColor={"rgb(249, 249, 249)"}
        mt={"180px"}
        // pt={'120px'}
        h={"470px"}
        bg={"rgb(249, 249, 249)"}
      >
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 2 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "black.400",
                  zIndex: -1,
                }}
              >
                Lowest Prices,
              </Text>
              <br />
              <Text as={"span"} color={"black.400"}>
                Best Quality Shopping
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              <Image src="/images/img1.png" w={"500px"} alt="image" />
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"8px"}
                size={"lg"}
                fontWeight={"bold"}
                px={20}
                py={8}
                colorScheme={"pink"}
                bg={"rgb(244, 51, 151)"}
                leftIcon={<FaGooglePlay />}
                _hover={{ bg: "rgb(244, 51, 151)" }}
              >
                Download the Meesho App
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"468px"}
              rounded={"1xl"}
              boxShadow={"2xl"}
              width={"700px"}
              overflow={"hidden"}
              mt={"-8px"}
              mr={"-16px"}
            >
              <Image
                src="https://images.meesho.com/images/marketing/1631722939962.webp"
                w={"720px"}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      <Container maxW={"7xl"} marginTop={"50px"}>
        <Flex justify={"center"}>
          <Text
            style={{
              width: "24%",
              height: "1px",
              backgroundColor: "rgb(247,168,202)",
              marginTop: "27px",
              height: "2px",
            }}
          ></Text>
          <Text fontSize={"4xl"} fontWeight={"bold"} ml={"14"} mr={"14"}>
            Top Categories to Choose from
          </Text>
          <Text
            style={{
              width: "24%",
              height: "1px",
              backgroundColor: "rgb(247,168,202)",
              marginTop: "27px",
              height: "2px",
            }}
          ></Text>
        </Flex>
      </Container>

      <Container
        maxW={"7xl"}
        height={"68vh"}
        bgImage="url('https://images.meesho.com/images/marketing/1649759774600.jpg')"
        mt={"50px"}
      >
        <Image
          src="https://images.meesho.com/images/marketing/1649760442043.webp"
          pt={"50px"}
          w={"420px"}
          cursor={"pointer"}
        />
        <Image
          src="https://images.meesho.com/images/marketing/1649760423313.webp"
          mt={"-300px"}
          pl={"440px"}
          w={"820px"}
          h={"300px"}
          cursor={"pointer"}
        />
        <Image
          src="https://images.meesho.com/images/marketing/1649759799809.webp"
          mt={"-300px"}
          ml={"850px"}
          w={"390px"}
          h={"300px"}
          cursor={"pointer"}
        />
      </Container>

      {<Cont />}

      {<Cont1/>}
    </div>
  );
}



const Cont = () => {
  return (
    <container maxW={"7xl"} mt={"50px"} height={"68vh"}>
      <Image
        src="https://images.meesho.com/images/marketing/1664343269674.jpg"
        ml={"120px"}
        w={"container.xl"}
        mt={"80px"}
      />

      <Image
        src="https://images.meesho.com/images/marketing/1664368165450.webp"
        w={"180px"}
        height={"80px"}
        mt={"-356px"}
        ml={"255px"}
        cursor={"pointer"}
      />

      <Flex h={"400px"} w={"225px"} ml={"600px"} mt={"-256px"} gap={"20px"} cursor={'pointer'}>
        <Image
          src={"https://images.meesho.com/images/marketing/1649760808952.webp"}
        />

        <Image
          src={"https://images.meesho.com/images/marketing/1649760703179.webp"}
        />

        <Image
          src={"https://images.meesho.com/images/marketing/1649760786763.webp"}
        />
      </Flex>

          <Flex ml={'650px'} w={'180px'} gap={'80px'} cursor={'pointer'}  h={'60px'}>
        <Image
          src={"https://images.meesho.com/images/marketing/1664364866805.webp"}
         
        />
        <Image
          src={"https://images.meesho.com/images/marketing/1664364866805.webp"}
        />
        <Image
          src={"https://images.meesho.com/images/marketing/1664364866805.webp"}
        />
      </Flex>
    </container>
  );
};


const Cont1=()=>{
  return(
    <Container maxW={"7xl"} mt={"140px"} height={"65vh"}>
      <Image src={'https://images.meesho.com/images/pow/downloadBannerDesktop.webp'} 
      w={"container.xl"}
      mt={"80px"}/>
      <Text mt={'-500px'} color={'rgb(85, 133, 248)'} fontWeight={700} fontSize={'32px'} lineHeight={'40px'} fontFamily={"sans-serif"} ml={'845px'}>Become a Reseller and</Text>
      <Text color={'rgb(244,51,151)'} ml={'582px'} fontWeight={700} fontSize={'48px'} lineHeight={'52px'} fontFamily={"sans-serif"}>Start your Online Business</Text>
      <Text color={'rgb(244,51,151)'} ml={'718px'} fontWeight={700} fontSize={'48px'} lineHeight={'52px'} fontFamily={"sans-serif"}> with zero investment</Text>
      <Grid templateColumns={'repeat(2,1fr)'} w={'380px'} ml={'808px'} gap={4} mt={'60px'} >
      <Image src="https://images.meesho.com/images/pow/playstoreIcon.webp" h={'50px'} borderRadius={'5px'} cursor={'pointer'}/>
      <Image src="https://images.meesho.com/images/pow/appstoreIcon.webp" h={'50px'} borderRadius={'5px'} cursor={'pointer'}/>
      </Grid>
    </Container>
  )
}