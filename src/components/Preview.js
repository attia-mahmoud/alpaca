import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { randomize, loadImage } from '../assets/utils/utils';

const Preview = ({ state }) => {
  const [styles, setStyles] = state;

  const allSrc = Object.values(styles);

  loadImage(allSrc);

  return (
    <>
      <Box h="720px" w="720px" m="20">
        <Image
          className="abc"
          src=""
          alt=""
          boxSize="720px"
          objectFit="cover"
        />
      </Box>
      <Button mr={5} onClick={() => randomize(setStyles)}>
        Randomize
      </Button>
      <Button>
        <a
          href="google.com"
          className="abc"
          rel="noreferrer"
          download
          target="_blank"
        >
          Download Avatar
        </a>
      </Button>
    </>
  );
};

export default Preview;
