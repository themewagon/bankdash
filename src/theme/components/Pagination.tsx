import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const PaginationComponent: Components<Omit<Theme, 'components'>>['MuiPagination'] = {
  defaultProps: {},
  styleOverrides: {
    ul: ({ theme }) => ({
      '& .MuiPaginationItem-root': {
        color: theme.palette.primary.main,
      },
      '& .MuiPaginationItem-previousNext': {
        color: theme.palette.primary.main,
        '&.Mui-disabled': {
          opacity: theme.palette.action.hoverOpacity * 3,
        },
      },
    }),
  },
};

export default PaginationComponent;
