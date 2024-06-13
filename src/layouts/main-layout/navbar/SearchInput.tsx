import { Box, IconButton, InputBase } from '@mui/material';
import { useState } from 'react';

function SearchInput() {
  const [value, setValue] = useState<string>('');

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50px',
        backgroundColor: 'background.light',
        '&:focus-within': {
          backgroundColor: 'background.default',
        },
        width: '100%',
        height: '50px',
      }}
    >
      <InputBase
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          pl: '56px',
          pr: 1,
          py: 1,
          color: 'text.primary',
          '&::placeholder': {
            color: 'text.secondary',
          },
        }}
        placeholder="Search for something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          position: 'absolute',
          left: 0,
          height: '100%',
          width: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.primary',
        }}
      >
        {/* <SearchIcon /> */}x
      </IconButton>
    </Box>
  );
}

export default SearchInput;
