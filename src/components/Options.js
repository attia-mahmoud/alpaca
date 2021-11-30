import React from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { stylesDict, updateStyles } from '../assets/utils/utils';

const layers = [
  'Hair',
  'Ears',
  'Eyes',
  'Mouth',
  'Neck',
  'Leg',
  'Accessories',
  'Background',
  'Nose',
];

const Options = ({ state }) => {
  const [, setStyles] = state;

  return (
    <Box
      h={['90vh', '720px']}
      w={['90vw', '720px']}
      m={['auto', null, 'auto', '10']}
      ml={['0', '-10']}
      mt={['10', null, '10', '20']}
    >
      <Accordion allowToggle>
        {layers.map(layer => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={[20, 25]} m="2">
                  {layer}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={5}>
              <Flex wrap="wrap" justify="space-evenly">
                {stylesDict[layer].map(style => (
                  <Button
                    key={style.name}
                    colorScheme="blue"
                    variant="outline"
                    p="4"
                    m="1"
                    borderRadius="30"
                    fontSize={[18, 20]}
                    onClick={() => updateStyles(style, setStyles, layer)}
                  >
                    {style.name}
                  </Button>
                ))}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Options;
