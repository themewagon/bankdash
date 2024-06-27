import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const SendAmountInput = () => {
  return (
    <Stack
      direction="row"
      gap={3}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 1,
        px: 0.5,
      }}
    >
      <Typography variant="body2" fontWeight="regular" color="text.secondary" whiteSpace="nowrap">
        Write Amount
      </Typography>
      <TextField
        placeholder="525.50"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  borderRadius: 'inherit',
                  minWidth: 120,
                  py: 1.5,
                }}
                endIcon={<IconifyIcon icon="ph:telegram-logo" color="common.white" width={24} />}
                //   sx={{ px: 3, py: 1.75 }}
              >
                Send
              </Button>
            </InputAdornment>
          ),
        }}
        variant="filled"
        sx={(theme) => ({
          '& .MuiFilledInput-root': {
            paddingRight: 0,
            borderRadius: 40,
          },
          '& .MuiInputAdornment-root': {
            backgroundColor: theme.palette.primary.main,
            p: 3,
            overflow: 'hidden',
            borderRadius: 40,
            justifyContent: 'center',
          },

          '&::placeholder': {
            color: 'text.secondary',
            ml: 5,
          },
        })}
      />
    </Stack>
  );
};

export default SendAmountInput;
