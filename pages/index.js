import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Container,
  Box,
  Grid,
  GridItem,
  Text,
  Image,
} from '@chakra-ui/react';
import CustomSearch from '../components/custom-search';

export default function Photo(props) {
  const { dataPhotos, page, search } = props;
  const router = useRouter();
  const [input, setInput] = useState(search);

  const handleSearch = () => {
    const newValue = input?.replace(/\s\s+/g, ' '); // remove all double space from input
    if (newValue && newValue !== '' && newValue !== ' ') {
      if (page)router.push(`/?search=${newValue}&page=${page}`);
      else router.push(`/?search=${newValue}`);
    } else if (page) router.push(`/?page=${page}`);
    else router.push('/');
  };

  const handleNext = () => {
    const newPage = parseInt(page, 10);
    const newValue = search?.replace(/\s\s+/g, ' '); // remove all double space from router
    if (newValue && newValue !== '' && newValue !== ' ') {
      router.push(`/?search=${newValue}&page=${newPage + 1}`);
    } else router.push(`/?page=${newPage + 1}`);
  };

  return (
    <Container
      maxW="container.lg"
      alignItems="center"
      display="flex"
      justifyContent="center"
      paddingX={{ base: 1, lg: '20px' }}
    >
      <Box marginY="20px" w="100%">
        <CustomSearch
          placeholder="Search"
          borderRadius="5px"
          onNext={handleNext}
          value={input}
          onChange={setInput}
          handleSearch={handleSearch}
        />
        <Grid
          marginTop="20px"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={2}
          w="100%"
        >
          {dataPhotos && !dataPhotos.errors ? dataPhotos.map((item) => (
            <GridItem
              colSpan={1}
              rowSpan={item.height > item.width ? 2 : 0}
              key={item.id}
            >
              <Image
                src={item.urls.regular}
                w="100%"
                h="100%"
                borderRadius="3px"
              />
            </GridItem>
          )) : <Text textAlign="center" fontSize="sm">Something went wrong.</Text>}
        </Grid>
      </Box>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const page = isNaN(context.query.page) ? 1 : context.query.page ?? 1;
  const search = context.query.search ?? '';
  const clientId = 'RDDL4uwYcJeaQdMk-msrI-Lg5wXaQ2FZPVlEahnTJi8';
  let url = `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${clientId}`;
  if (search !== '') url = `https://api.unsplash.com/search/photos?page=${page}&per_page=9&client_id=${clientId}&query=${search}`;
  const res = await fetch(url);
  let dataPhotos = await res.json();
  if (dataPhotos?.results) dataPhotos = dataPhotos.results;
  return {
    props: {
      dataPhotos,
      page,
      search,
    },
  };
}
