import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import FormControlPra from './Components/FormControlPra';
import SpinnerPra from './Components/SpinnerPra';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <FormControlPra/><br/>
      <SpinnerPra/>
    </ChakraProvider>
  );
}

export default App;
