import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Portal from '@mui/material/Portal';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  portal?: boolean;
};

const LoadingProgress = ({ portal, sx, ...other }: Props) => {
  const content = (
    <Box
      sx={{
        px: 5,
        width: 1,
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
      {...other}
    >
      <LinearProgress color="primary" sx={{ width: 1, maxWidth: 360 }} />
    </Box>
  );

  if (portal) {
    return <Portal>{content}</Portal>;
  }

  return content;
};

export default LoadingProgress;
