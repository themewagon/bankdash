import { Button, IconButton, InputAdornment, Link, Stack, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link href="/authentication/forget-password" variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <Button
        fullWidth
        size={upSM ? 'large' : 'medium'}
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Login
      </Button>
    </>
  );
};

export default LoginForm;
