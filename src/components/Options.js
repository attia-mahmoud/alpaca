import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/layout';
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
    <Box h="720px" w="720px" m="20">
      <Accordion allowToggle>
        {layers.map(layer => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={25} m="2">
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
                    fontSize={20}
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
