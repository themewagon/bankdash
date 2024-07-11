import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const PaginationComponent: Components<Omit<Theme, 'components'>>['MuiPagination'] = {
  defaultProps: {},
  styleOverrides: {
    ul: ({ theme }) => ({
      position: 'relative',
      //   '& li:has(.MuiPaginationItem-previousNext)': { width: theme.spacing(15) },
      '& .MuiPaginationItem-root': {
        color: theme.palette.primary.main,
      },
      '& .MuiPaginationItem-previousNext': {
        color: theme.palette.primary.main,
        '&.Mui-disabled': {
          opacity: theme.palette.action.hoverOpacity * 2.5,
        },
      },
    }),
  },
};

export default PaginationComponent;
