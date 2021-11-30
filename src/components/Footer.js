import { Flex, VStack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex justify="center" alignItems="center" m="5">
      <VStack>
        <Text fontSize="0.8em">
          <Link
            href="https://mahmoudattia.com"
            isExternal
            aria-label="Link to my website"
          >
            Created by Mahmoud{' '}
            <FaExternalLinkAlt
              style={{ display: 'inline', marginLeft: '1', height: '12' }}
            />
          </Link>
        </Text>
      </VStack>
    </Flex>
  );
};

export default Footer;
