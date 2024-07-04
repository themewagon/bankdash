import { Box, Card, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, GridValidRowModel } from '@mui/x-data-grid';
import CustomPagination from 'components/sections/dashboard/invoice/CustomPagination';
import NoData from 'components/sections/dashboard/invoice/NoData';
import RenderCellDescription from 'components/sections/dashboard/invoice/RenderCellDescription';
import RenderCellDownload from 'components/sections/dashboard/invoice/RenderCellDownload';
import { invoiceRowData, RowData } from 'data/invoice-data';
import { currencyFormat, dateFormatFromUTC } from 'helpers/utils';
import { useEffect, useState } from 'react';

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
    minWidth: 160,
    renderCell: (params) => <RenderCellDownload params={params} />,
  },
];

const InvoiceOverviewTable = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<GridRowsProp<RowData>>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setItems(invoiceRowData);
      setLoading(false);
    })();
  }, [invoiceRowData]);

  return (
    <Stack sx={{ overflow: 'auto', justifyContent: 'space-between' }}>
      <Box sx={{ mb: 2.5, mt: 3 }}>
        <Typography variant="h3">Recent Invoice</Typography>
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
          }}
        />
      </Card>
    </Stack>
  );
};

export default InvoiceOverviewTable;
