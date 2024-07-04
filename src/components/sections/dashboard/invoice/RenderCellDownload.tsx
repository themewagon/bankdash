import { Button } from '@mui/material';
import { GridCellParams, GridValidRowModel } from '@mui/x-data-grid';

type ParamsProps = {
  params: GridCellParams;
};
const RenderCellDownload = ({ params }: ParamsProps) => {
  const handleDownloadRequest = (row: GridValidRowModel) => {
    console.log(row);
  };

  return (
    <Button variant="outlined" onClick={() => handleDownloadRequest(params.row)}>
      Download
    </Button>
  );
};

export default RenderCellDownload;
