import {
  Container,
  Box,
} from '@chakra-ui/react';
import FilterSearch from '../components/filter-search';

export default function CallToActionWithAnnotation() {
  return (
    <Container maxW="container.lg" alignItems="center" display="flex" justifyContent="center">
      <Box marginY="10px" w="100%">
        <FilterSearch placeholder="Search knowledge" />
      </Box>
    </Container>
  );
}
