import { ReactNode } from 'react';
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
  VStack,
  Text,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white')} px={4} borderBottom={'1px'}
      borderBottomColor={'gray.300'} h={'80px'}>
        <Flex h={{base:120,sm:100}} alignItems={'center'} justifyContent={'space-evenly'} flexWrap={{base:'wrap',md:'wrap',lg:'wrap',sm:'wrap'}} gap={{base:3,sm:2,md:4,lg:2}} pb={'20px'}>
          
      
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Text>Women Ethnic</Text>
                
              </MenuButton>
              <MenuList  w={{base:350,sm:500,md:700,lg:900}} >
              <Grid templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(5, 1fr)'}} >
                <GridItem>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>
                </GridItem>
                <GridItem>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>  
                </GridItem>
                <GridItem>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>  
                </GridItem>
                <GridItem>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>  
                </GridItem>
                <GridItem>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>  
                </GridItem>
                </Grid>
              </MenuList>
             
              
            
            </Menu>

            <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Text>Women Western</Text>
              
            </MenuButton>
            <MenuList w={{base:350,sm:500,md:700,lg:900}}>
             <Grid  templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(3, 1fr)'}}>
             <GridItem>
             <MenuItem>Link 1</MenuItem>
             <MenuItem>Link 2</MenuItem>
             <MenuItem>Link 3</MenuItem>  
             </GridItem>
             <GridItem>
             <MenuItem>Link 1</MenuItem>
             <MenuItem>Link 2</MenuItem>
             <MenuItem>Link 3</MenuItem>  
             </GridItem>
             <GridItem>
             <MenuItem>Link 1</MenuItem>
             <MenuItem>Link 2</MenuItem>
             <MenuItem>Link 3</MenuItem>  
             </GridItem>
             </Grid>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Text>Men</Text>
              
            </MenuButton>
            <MenuList w={{base:350,sm:500,md:700,lg:900}}>
            <Grid templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(5, 1fr)'}}>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            </Grid>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Text>Kids</Text>
              
            </MenuButton>
            <MenuList w={{base:350,sm:500,md:700,lg:900}}>
            <Grid templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(5, 1fr)'}}>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            </Grid>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Text>Home & Kitchen</Text>
              
            </MenuButton>
            <MenuList w={{base:350,sm:500,md:700,lg:900}}>
             <Grid templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(5, 1fr)'}}>
              <GridItem>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuItem>Link 3</MenuItem>  
              </GridItem>
              <GridItem>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuItem>Link 3</MenuItem>  
              </GridItem>
              <GridItem>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuItem>Link 3</MenuItem>  
              </GridItem>
              </Grid>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Text>Beauty & Health</Text>
              
            </MenuButton>
            <MenuList w={{base:350,sm:500,md:700,lg:900}}>
            <Grid templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(5, 1fr)'}}>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            </Grid>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Text>Jewellery & Accessories</Text>
              
            </MenuButton>
            <MenuList w={{base:350,sm:500,md:700,lg:900}}>
            <Grid templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(5, 1fr)'}}>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            </Grid>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Text>Bags & FootWear</Text>
              
            </MenuButton>
            <MenuList w={{base:350,sm:500,md:700,lg:900}}>
            <Grid templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(5, 1fr)'}}>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            </Grid>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Text>Electronics</Text>
              
            </MenuButton>
            <MenuList w={{base:350,sm:500,md:700,lg:900}}>
            <Grid templateColumns={{base:'repeat(3, 1fr)',sm:'repeat(5, 1fr)'}}>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            <GridItem>
            <MenuItem>Link 1</MenuItem>
            <MenuItem>Link 2</MenuItem>
            <MenuItem>Link 3</MenuItem>  
            </GridItem>
            </Grid>
            </MenuList>
          </Menu>
          
        </Flex>

        
      </Box>
    </>
  );
}