import { Stack, Typography } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';
import DataGridDecrementArrow from 'assets/decrement.svg';
import DataGriIncrementArrow from 'assets/increment.svg';
import Image from 'components/base/Image';

type ParamsProps = {
  params: GridCellParams;
};

const RenderCellDescription = ({ params }: ParamsProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1} sx={{ py: 2, width: 1 }}>
      {params.row.description.revenue === 'down' ? (
        <Image src={DataGriIncrementArrow} alt="expense" width={30} height={30} />
      ) : (
        <Image src={DataGridDecrementArrow} alt="income" width={30} height={30} />
      )}
      <Typography variant="body2" fontWeight="regular">
        {params.row.description.title}
      </Typography>
    </Stack>
  );
};

export default RenderCellDescription;

// export function RenderCellProduct({
//   params,
//   onViewRow,
// }: ParamsProps & {
//   onViewRow: () => void;
// }) {
//   return (
//     <Stack direction="row" alignItems="center" sx={{ py: 2, width: 1 }}>
//       <Avatar
//         alt={params.row.name}
//         src={params.row.coverUrl}
//         variant="rounded"
//         sx={{ width: 64, height: 64, mr: 2 }}
//       />

//       <ListItemText
//         disableTypography
//         primary={
//           <Link
//             noWrap
//             color="inherit"
//             variant="subtitle2"
//             onClick={onViewRow}
//             sx={{ cursor: 'pointer' }}
//           >
//             {params.row.name}
//           </Link>
//         }
//         secondary={
//           <Box component="div" sx={{ typography: 'body2', color: 'text.disabled' }}>
//             {params.row.category}
//           </Box>
//         }
//         sx={{ display: 'flex', flexDirection: 'column' }}
//       />
//     </Stack>
//   );
// }
