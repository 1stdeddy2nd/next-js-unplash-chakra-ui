import {
  Container,
  Box,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import FilterSearch from '../components/filter-search';

export default function Photo(props) {
  const { dataPhotos } = props;
  return (
    <Container maxW="container.lg" alignItems="center" display="flex" justifyContent="center" paddingX="20px">
      <Box marginY="20px" w="100%">
        <FilterSearch placeholder="Search image" />
        <Grid
          marginTop="30px"
          templateColumns="repeat(3, 1fr)"
          gap={2}
          w="100%"
        >
          {dataPhotos.map((item) => (
            <GridItem colSpan={1} rowSpan={item.height > item.width ? 2 : 0} key={item.id}>
              <Image
                src={item.urls.regular}
                w="100%"
                h="100%"
                borderRadius="3px"
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page ?? '';
  const clientId = 'El0dCOXoX5HrqE4QNSTKPXPkkWcq3tBaAPoaZWgWHPc';
  const url = `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${clientId}`;
  const res = await fetch(url);
  const dataPhotos = await res.json();
  return {
    props: {
      dataPhotos,
    },
  };
}
