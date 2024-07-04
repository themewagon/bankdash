import { SvgIconProps } from '@mui/material';
import { alpha, type Components, type Theme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import DataGridArrowDownIcon from 'components/icons/table-icons/DataGridArrowDownIcon';
import DataGridArrowUpIcon from 'components/icons/table-icons/DataGridArrowUpIcon';

const DataGridComponent: Components<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {
    columnHeaderHeight: 52,
    rowHeight: 64,
    // autoHeight: true,

    localeText: {
      noResultsOverlayLabel: 'No Data Available',
    },
    disableColumnMenu: true,
    disableColumnSelector: true,
    disableColumnResize: true,
    slots: {
      columnSortedAscendingIcon: (props: SvgIconProps) => (
        <DataGridArrowUpIcon sx={{ color: 'text.primary' }} {...props} />
      ),
      columnSortedDescendingIcon: (props: SvgIconProps) => (
        <DataGridArrowDownIcon sx={{ color: 'text.primary' }} {...props} />
      ),
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '--unstable_DataGrid-radius': 0,
      '--unstable_DataGrid-headWeight': theme.typography.fontWeightMedium,
      '--DataGrid-rowBorderColor': theme.palette.divider,
      //   '--DataGrid-containerBackground': theme.palette.background.default,
      borderWidth: 0,
      scrollbarWidth: 'thin',
      fontWeight: theme.typography.fontWeightRegular,
      '& .MuiDataGrid-filler': {
        position: 'absolute',
        top: 0,
        height: '100% !important',
      },
    }),
    withBorderColor: ({ theme }) => ({
      borderColor: theme.palette.primary.main,
    }),

    main: ({ theme }) => ({
      borderBottomRightRadius: theme.shape.borderRadius * 6.25,
      borderBottomLeftRadius: theme.shape.borderRadius * 6.25,
      background: theme.palette.common.white,
      paddingLeft: theme.spacing(3.75),
      paddingRight: theme.spacing(3.75),
      paddingTop: theme.spacing(2),
    }),
    columnSeparator: { display: 'none' },
    columnHeader: ({ theme }) => ({
      ...theme.typography.body2,
      fontWeight: '800 !important',
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.common.white,
      '&--sorted': { color: theme.palette.text.primary },
      paddingLeft: theme.spacing(0.25),
      paddingRight: theme.spacing(0.25),
      height: 'var(--DataGrid-headerHeight) !important',
      '&:focus-within': {
        outline: 'none',
      },
    }),

    overlay: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.common.black, theme.palette.action.hoverOpacity),
    }),
    // overlayWrapperInner: { height: 'auto !important' },
    sortIcon: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
    virtualScroller: {
      display: 'flex',
      flexDirection: 'column',
      //   height: pxToRem(332), // to fix table height in data grid
    },
    cell: ({ theme }) => ({
      alignItems: 'center',
      display: 'inline-flex',
      '&--editing': {
        boxShadow: 'none',
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
      },
      '&:focus-within': {
        outline: 'none',
      },
      '.Mui-focusVisible': {
        outline: 'none',
        // removes the outline that appears when  focusing on a cell in Material UI's DataGrid component.
      },
      paddingLeft: theme.spacing(0.25),
      paddingRight: theme.spacing(0.25),
      color: theme.palette.neutral.dark,

      '&.MuiDataGrid-cell--withRenderer': {
        overflow: 'visible !important',
      },
      "&[data-field='id']": {
        fontWeight: 300,
        color: theme.palette.grey?.[900],
        '&:before': {
          content: "'#'",
        },
      },
    }),

    // DataGrid-Menu

    paper: ({ theme }) => ({
      boxShadow: theme.shadows[5],
      padding: 0,
    }),
    iconButtonContainer: ({ theme }) => ({
      '&:focus': {
        boxShadow: 'none !important',
      },
      '& .MuiIconButton-root': {
        border: 'none',
        padding: theme.spacing(0.25),
        marginLeft: theme.spacing(1),
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:active': {
          backgroundColor: theme.palette.action.active,
        },
      },
    }),
    footerContainer: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightExtraBold,
      minHeight: 'auto',
      borderTopStyle: 'hidden',
    }),
    selectedRowCount: { display: 'none', whiteSpace: 'nowrap' },
    columnsManagementHeader: { display: 'none', zIndex: -1 },
  },
};

export default DataGridComponent;
