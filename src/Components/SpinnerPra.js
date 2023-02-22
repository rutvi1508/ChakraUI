import React from 'react'
import { Spinner,Text } from '@chakra-ui/react';

function SpinnerPra() {
    return (
        <div>
           <Text fontSize='5xl'>Spinner</Text>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>
    )
}

export default SpinnerPra