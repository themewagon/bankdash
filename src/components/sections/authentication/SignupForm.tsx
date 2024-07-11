import { Button, IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { up } = useBreakpoints();
  const upSM = up('sm');
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Stack spacing={3} sx={{ my: 3 }}>
        <TextField fullWidth size={upSM ? 'medium' : 'small'} name="email" label="Email address" />

        <TextField
          fullWidth
          size={upSM ? 'medium' : 'small'}
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          sx={{ size: { xs: 'small', sm: 'medium' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <IconifyIcon icon={showPassword ? 'majesticons:eye' : 'majesticons:eye-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          size={upSM ? 'medium' : 'small'}
          name="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                  <IconifyIcon
                    icon={showConfirmPassword ? 'majesticons:eye' : 'majesticons:eye-off'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Button
        fullWidth
        size={upSM ? 'large' : 'medium'}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Sign Up
      </Button>
    </>
  );
};

export default SignupForm;
