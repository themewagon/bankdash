import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState } from 'react';

interface SearchInputProps {
  fullWidth: boolean;
  size: 'small' | 'medium';
}
function SearchInput({ fullWidth, size }: SearchInputProps) {
  const [value, setValue] = useState('');

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 1,
      }}
    >
      <TextField
        fullWidth={fullWidth}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for something"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit">
                <IconifyIcon icon="mingcute:search-line" color="text.secondary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="filled"
        size={size}
        sx={{
          //   display: { xs: 'none', md: 'block' },
          //   width: '100%',
          //   height: '100%',
          '& .MuiFilledInput-root': {
            borderRadius: 40,
          },
          //   pl: '56px',
          //   pr: 1,
          //   py: 1,
          '&::placeholder': {
            color: 'text.secondary',
          },
        }}
      />
    </Box>
  );
}

export default SearchInput;
