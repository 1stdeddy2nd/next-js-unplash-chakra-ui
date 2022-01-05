import {
  Input, InputGroup, InputRightElement, Button, InputLeftElement, IconButton, Text,
} from '@chakra-ui/react';
import { VscSettings, VscSearch } from 'react-icons/vsc';

export default function FilterSearch({ placeholder, onFilter, onSearch }) {
  return (
    <InputGroup size="md">
      <InputLeftElement width="4.5rem" height="29px">
        <Button
          leftIcon={<VscSettings style={{ transform: 'rotate(90deg)' }} />}
          size="xs"
          backgroundColor="white"
          shadow="sm"
          borderRadius="2px"
          _hover={{ bg: 'gray.500', color: 'gray.100' }}
          onClick={onFilter}
        >
          <Text marginTop="2px" fontSize="11px">Filter</Text>
        </Button>
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeholder}
        paddingLeft="5rem"
        fontSize="11px"
        borderRadius="2px"
        backgroundColor="gray.100"
        focusBorderColor="gray.500"
        height="30px"
      />
      <InputRightElement height="29px" marginRight="-5px">
        <IconButton
          icon={<VscSearch size="11px" />}
          backgroundColor="white"
          size="xs"
          shadow="sm"
          borderRadius="2px"
          _hover={{ bg: 'gray.500', color: 'gray.100' }}
          onClick={onSearch}
        />
      </InputRightElement>
    </InputGroup>
  );
}
