import React from 'react';
import Options from './Options';
import Preview from './Preview';
import { Flex } from '@chakra-ui/react';
import { stylesDict } from '../assets/utils/utils';

const Page = () => {
  const state = React.useState({
    background: stylesDict.Background[0].url,
    neck: stylesDict.Neck[0].url,
    ears: stylesDict.Ears[0].url,
    nose: stylesDict.Nose[0].url,
    mouth: stylesDict.Mouth[0].url,
    leg: stylesDict.Leg[0].url,
    hair: stylesDict.Hair[0].url,
    accessories: stylesDict.Accessories[0].url,
    eyes: stylesDict.Eyes[0].url,
  });

  return (
    <Flex direction={['column', 'row']}>
      <Preview state={state} />
      <Options state={state} />
    </Flex>
  );
};

export default Page;
