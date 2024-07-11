import { Box, Button, Card, Divider, Link, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import LoginForm from 'components/sections/authentication/LoginForm';

const LoginPage = () => {
  return (
    <Box
      sx={{
        width: 1,
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: { xs: 3, sm: 5 },
            width: 1,
            maxWidth: 480,
          }}
        >
          <Typography variant="h4">Sign In</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: { xs: 3, sm: 5 } }}>
            Don’t have an account?
            <Link href="/authentication/sign-up" variant="subtitle2" sx={{ ml: 0.75 }}>
              Create One Now!
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="neutral"
              variant="outlined"
              //   sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <IconifyIcon icon="eva:google-fill" color="error.main" />
            </Button>
            <Button
              fullWidth
              size="large"
              color="neutral"
              variant="outlined"
              //   sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <IconifyIcon icon="gg:facebook" color="primary.main" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="neutral"
              variant="outlined"
              //   sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <IconifyIcon icon="logos:twitter" />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>

          <LoginForm />
        </Card>
      </Stack>
    </Box>
  );
};

export default LoginPage;
