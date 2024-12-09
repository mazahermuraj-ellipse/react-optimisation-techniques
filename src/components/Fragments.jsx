import { Box, Text } from '@chakra-ui/react';

const Fragments = () => {
  return (
    <Box>
      <Box>
        <Text>This is the first paragraph.</Text>
        <Text>This is the second paragraph.</Text>
      </Box>

      {/* UsingFragments */}
      <>
        <Text>This is the first paragraph.</Text>
        <Text>This is the second paragraph.</Text>
      </>
    </Box>
  );
};

export default Fragments;