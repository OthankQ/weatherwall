import React from 'react';
import { Center, ChakraProvider, VStack } from '@chakra-ui/react';

import Searchbar from './components/searchbar/Searchbar';
import Display from './components/display/Display';

import './App.css';

const App = () => {
  return (
    <ChakraProvider>
      <Center h="100vh" w="100vw">
        <VStack spacing={4}>
          <Searchbar />

          <Display />
        </VStack>
      </Center>
    </ChakraProvider>
  );
};

export default App;
