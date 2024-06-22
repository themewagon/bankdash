import { Theme } from '@mui/material';

const simplebar = (theme: Theme) => ({
  '& .simplebar-track': {
    '&.simplebar-vertical': {
      '& .simplebar-scrollbar': {
        '&:before': {
          cursor: 'grab',
          backgroundColor: theme.palette.primary.light,
        },
        '&.simplebar-visible': {
          '&:before': {
            opacity: 1,
          },
        },
      },
    },
  },
});
export default simplebar;
