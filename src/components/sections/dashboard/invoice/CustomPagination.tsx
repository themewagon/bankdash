import { Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Stack
      spacing={2}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'end',
        p: 2.5,
        mt: 1.25,
      }}
    >
      <Pagination
        shape="rounded"
        page={page + 1}
        count={pageCount}
        onChange={(event: React.ChangeEvent<unknown>, value: number) =>
          apiRef.current.setPage(value - 1)
        }
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{
              previous: () => (
                <Typography variant="caption" color="primary" fontSize={15} fontWeight="medium">
                  Previous
                </Typography>
              ),
              next: () => (
                <Typography
                  color="primary"
                  variant="caption"
                  fontSize={15}
                  fontWeight="medium"
                  sx={{ pr: 0 }}
                >
                  Next
                </Typography>
              ),
            }}
          />
        )}
      />
    </Stack>
  );
};

export default CustomPagination;
