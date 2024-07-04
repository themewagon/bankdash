import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import React, { useRef } from 'react';

interface CardComponentProps {
  title: string;
  CardComponent: React.ElementType<{ chartRef: React.RefObject<EChartsReactCore | null> }>;
}
const CardContainer = ({ title, CardComponent }: CardComponentProps) => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  return (
    <Stack sx={{ overflow: 'auto', height: 1, justifyContent: 'space-between' }}>
      <Box sx={{ mb: 2.5, mt: 3 }}>
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Card sx={{ backgroundColor: 'common.white', width: 1, flex: 1 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 1,
          }}
        >
          <CardComponent chartRef={chartRef} />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CardContainer;
