import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import React from 'react';
interface CardContainerProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CardComponent: React.ComponentType<any>;
  chartRef?: React.MutableRefObject<EChartsReactCore | null>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const CardContainer: React.FC<CardContainerProps> = ({
  title,
  CardComponent,
  chartRef,
  ...rest
}) => {
  return (
    <Stack sx={{ overflow: 'auto', height: 1, justifyContent: 'space-between' }}>
      <Box sx={{ mb: { xs: 1.5, sm: 2.5 }, mt: { xs: 1, sm: 3 } }}>
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
          {title}
        </Typography>
      </Box>
      <Card sx={{ backgroundColor: 'common.white', width: 1, flex: 1 }}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 1,
            width: 1,
            pb: 0,
          }}
        >
          <CardComponent chartRef={chartRef} {...rest} />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CardContainer;
