import { Box, Card, CardContent, Typography } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import React, { useRef } from 'react';

interface CardComponentProps {
  title: string;
  CardComponent: React.ElementType<{ chartRef: React.RefObject<EChartsReactCore | null> }>;
}
const CardContainer = ({ title, CardComponent }: CardComponentProps) => {
  const chartRef = useRef<EChartsReactCore | null>(null);

  return (
    <Box sx={{ overflow: 'auto' }}>
      <Box sx={{ pb: 2.5 }}>
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Card sx={{ backgroundColor: 'common.white', width: 1 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <CardComponent chartRef={chartRef} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardContainer;
