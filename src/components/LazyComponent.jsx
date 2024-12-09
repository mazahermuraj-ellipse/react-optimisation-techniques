import { Box } from "@chakra-ui/react";

const LazyComponent = () => {
  console.log('LazyComponent has been rendered');
  return (
    <Box>
      This is a lazily loaded component.
    </Box>
  )
}

export default LazyComponent;