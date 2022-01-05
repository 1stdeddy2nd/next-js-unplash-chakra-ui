import {
  Input, InputGroup, InputRightElement, Button, InputLeftElement, IconButton, Text,
} from '@chakra-ui/react';
import { VscSettings, VscSearch } from 'react-icons/vsc';

export default function FilterSearch({ placeholder, onFilter, onSearch }) {
  return (
    <InputGroup size="md">
      <InputLeftElement width="4.5rem" marginLeft="3px">
        <Button
          leftIcon={<VscSettings style={{ transform: 'rotate(90deg)' }} />}
          size="sm"
          backgroundColor="white"
          shadow="sm"
          borderRadius="3px"
          _hover={{ bg: 'gray.500', color: 'gray.100' }}
          onClick={onFilter}
        >
          <Text marginTop="2px" fontSize="13px">Filter</Text>
        </Button>
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeholder}
        paddingLeft="5rem"
        fontSize="13px"
        borderRadius="3px"
        backgroundColor="gray.100"
        focusBorderColor="gray.300"
      />
      <InputRightElement>
        <IconButton
          icon={<VscSearch />}
          backgroundColor="white"
          size="sm"
          shadow="sm"
          borderRadius="3px"
          _hover={{ bg: 'gray.500', color: 'gray.100' }}
          onClick={onSearch}
        />
      </InputRightElement>
    </InputGroup>
  );
}
