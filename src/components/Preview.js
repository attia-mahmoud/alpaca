import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { randomize, loadImage } from '../assets/utils/utils';
import { FaDice, FaDownload } from 'react-icons/fa';

const Preview = ({ state }) => {
  const [styles, setStyles] = state;

  const allSrc = Object.values(styles);

  loadImage(allSrc);

  return (
    <>
      <Box
        h={['auto', null, 'auto', 'auto', '720px']}
        w={['auto', null, 'auto', 'auto', '720px']}
        m={['auto', null, 'auto', 'auto', '10']}
        mr={['auto', null, 'auto', 'auto', '-10']}
        mt={['auto', null, 'auto', 'auto', '20']}
      >
        <Image
          className="abc"
          src=""
          alt=""
          boxSize={['300px', null, '670px', '720px']}
          objectFit="cover"
          mb={5}
        />
      </Box>
      <Spacer />
      <Flex justify="center" margin="0 auto">
        <Button m={1} p={5} onClick={() => randomize(setStyles)}>
          Randomize
          <FaDice
            style={{ display: 'inline', marginLeft: '1', height: '12' }}
          />
        </Button>
        <Button m={1} p={5}>
          <a
            href="google.com"
            className="abc"
            rel="noreferrer"
            download
            target="_blank"
          >
            Download Avatar
            <FaDownload
              style={{ display: 'inline', marginLeft: '1', height: '12' }}
            />
          </a>
        </Button>
      </Flex>
    </>
  );
};

export default Preview;
