import { Box, Card, Stack, Tab, Tabs, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, GridValidRowModel } from '@mui/x-data-grid';
import CustomPagination from 'components/sections/dashboard/invoice/CustomPagination';
import NoData from 'components/sections/dashboard/invoice/NoData';
import RenderCellDescription from 'components/sections/dashboard/invoice/RenderCellDescription';
import RenderCellDownload from 'components/sections/dashboard/invoice/RenderCellDownload';
import { invoiceRowData, RowData } from 'data/invoice-data';
import { currencyFormat, dateFormatFromUTC } from 'helpers/utils';
import { SyntheticEvent, useEffect, useState } from 'react';

const columns: GridColDef[] = [
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
    minWidth: 250,
    hideable: false,
    renderCell: (params) => {
      return <RenderCellDescription params={params} />;
    },
    valueGetter: (params: GridValidRowModel) => {
      return params.title;
    },
  },
  {
    field: 'transactionId',
    headerName: 'Transaction ID',
    flex: 1,
    minWidth: 160,
    hideable: false,
    renderCell: (params) => <>#{params.value}</>,
  },
  {
    field: 'type',
    headerName: 'Type',
    flex: 1,
    minWidth: 160,
    hideable: false,
  },
  {
    field: 'card',
    headerName: 'Card',
    flex: 1,
    minWidth: 160,
    hideable: false,
  },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
    minWidth: 160,
    hideable: false,
    renderCell: (params) => {
      return <>{dateFormatFromUTC(params.value)}</>;
    },
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 1,
    minWidth: 160,
    hideable: false,
    renderCell: (params) => {
      const color = params.row.description.revenue === 'down' ? 'error.main' : 'success.main';
      const symbol = params.row.description.revenue === 'down' ? '-' : '+';

      return (
        <Typography variant="body2" color={color}>
          {symbol} {currencyFormat(params.value)}
        </Typography>
      );
    },
  },
  {
    field: 'download',
    headerName: 'Download',
    sortable: false,
    flex: 1,
    minWidth: 100,
    renderCell: (params) => <RenderCellDownload params={params} />,
  },
];
function a11yProps(index: number) {
  return {
    id: `transaction-tab-${index}`,
    'aria-controls': `transaction-tabpanel-${index}`,
  };
}

const InvoiceOverviewTable = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<GridRowsProp<RowData>>([]);
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    filterData(newValue);
  };

  const filterData = (tabIndex: number) => {
    switch (tabIndex) {
      case 1:
        setItems(invoiceRowData.filter((row) => row.description.revenue === 'up'));
        break;
      case 2:
        setItems(invoiceRowData.filter((row) => row.description.revenue === 'down'));
        break;
      default:
        setItems(invoiceRowData);
        break;
    }
  };

  useEffect(() => {
    setLoading(true);
    filterData(value);
    setLoading(false);
  }, [value]);

  return (
    <Stack sx={{ overflow: 'auto', justifyContent: 'space-between' }}>
      <Box sx={{ mb: 1.5, mt: 3 }}>
        <Typography
          sx={{
            fontSize: {
              xs: 'body2.fontSize',
              md: 'h6.fontSize',
              xl: 'h3.fontSize',
            },
            fontWeight: 600,
          }}
        >
          Recent Invoice
        </Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'secondary.lighter', mb: 2.5 }}>
        <Tabs value={value} onChange={handleChange} aria-label="transaction tabs">
          <Tab label="All Transactions" {...a11yProps(0)} />
          <Tab label="Income" {...a11yProps(1)} />
          <Tab label="Expense" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Card
        sx={{
          flexGrow: { md: 1 },
          display: { md: 'flex' },
          //   minHeight: { xs: 400, md: 500 },
          flexDirection: { md: 'column' },
          bgcolor: 'transparent',
          overflow: 'hidden',
        }}
      >
        <DataGrid
          rows={items}
          columns={columns}
          disableRowSelectionOnClick
          //   getRowHeight={() => 'auto'}
          pageSizeOptions={[5, 10, 25]}
          initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
          slots={{
            noRowsOverlay: () => <NoData />,
            footer: CustomPagination,
          }}
          loading={loading}
          sx={{
            '& .MuiDataGrid-main': {
              height: 400,
            },
            '& .MuiDataGrid-virtualScroller': {
              height: 400,
            },
            '& .MuiDataGrid-columnHeader': {
              fontSize: { xs: 13, lg: 16 },
            },
            '& .MuiDataGrid-cell': {
              fontSize: { xs: 13, lg: 16 },
            },
            '& .MuiTypography-root': {
              fontSize: { xs: 13, lg: 16 },
            },
          }}
        />
      </Card>
    </Stack>
  );
};

export default InvoiceOverviewTable;
