import {
  Input, InputGroup, InputRightElement, Button, InputLeftElement, IconButton, Text,
} from '@chakra-ui/react';
import { VscArrowRight, VscSearch } from 'react-icons/vsc';

export default function CustomSearch({
  placeholder, onNext, handleSearch, borderRadius, disabled, onChange, value,
}) {
  return (
    <InputGroup size="md">
      <InputLeftElement width="3.7rem" marginLeft="4px">
        <Button
          leftIcon={<VscArrowRight />}
          size="sm"
          backgroundColor="white"
          shadow="sm"
          borderRadius={borderRadius}
          _hover={{ bg: 'gray.500', color: 'gray.100' }}
          onClick={onNext}
          disabled={disabled}
        >
          <Text marginTop="2px" fontSize="13px" marginLeft="-5px">Next</Text>
        </Button>
      </InputLeftElement>
      <Input
        type="text"
        placeholder={placeholder}
        paddingX="6rem"
        fontSize="13px"
        borderRadius={borderRadius}
        backgroundColor="gray.100"
        focusBorderColor="gray.300"
        textAlign="center"
        color="gray.500"
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        value={value}
      />
      <InputRightElement>
        <IconButton
          icon={<VscSearch />}
          backgroundColor="white"
          size="sm"
          shadow="sm"
          borderRadius={borderRadius}
          _hover={{ bg: 'gray.500', color: 'gray.100' }}
          onClick={handleSearch}
        />
      </InputRightElement>
    </InputGroup>
  );
}
