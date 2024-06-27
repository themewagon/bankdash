import { SxProps, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import {
  GridComponent,
  GridComponentOption,
  LegendComponent,
  TooltipComponentOption,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import 'echarts/lib/component/tooltip';
import { CanvasRenderer } from 'echarts/renderers';
import React, { useMemo } from 'react';

// Use ComposeOption to compose an Option type that only has required components and charts
export type ECOption = echarts.ComposeOption<
  LineSeriesOption | TooltipComponentOption | GridComponentOption
>;

// Register required components
echarts.use([LineChart, LegendComponent, CanvasRenderer, GridComponent]);

interface BalanceHistoryChartProps {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  sx?: SxProps;
}
const BalanceHistoryChart = ({ chartRef, ...rest }: BalanceHistoryChartProps) => {
  const theme = useTheme();
  const chartOptions: ECOption = useMemo(() => {
    return {
      grid: {
        left: '1%',
        top: '5%',
        right: '2.2%',
        bottom: '6%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        boundaryGap: false,

        axisLabel: {
          interval: 0,
          padding: 1,
          align: 'left',
          color: '#718EBF',
          fontSize: 13,
          overflow: 'truncate',
        },
        axisLine: { show: false },
        axisTick: { show: true },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#DFE5EE',
            type: 'dashed',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          padding: 5,
          color: '#718EBF',
          fontSize: 13,
        },
        axisLine: { show: false },
        axisTick: { show: true },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#DFE5EE',
            type: 'dashed',
          },
        },
      },

      tooltip: {
        trigger: 'axis',
        formatter: '{b}: ${c}',
      },
      color: '#2D60FF',
      series: [
        {
          color: 'rgb(24, 20, 243)',
          data: [90, 200, 120, 225, 480, 310, 220, 332, 144, 220, 110, 490],

          type: 'line',
          smooth: true,
          symbol: 'none',
          stack: 'Total',
          showSymbol: false,
          lineStyle: { width: 3 },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#2D60FF',
              },

              {
                offset: 1,
                color: '#fff',
              },
            ]),
            opacity: 0.25,
          },
        },
      ],
    };
  }, [theme]);
  return (
    <ReactEchart
      echarts={echarts}
      option={chartOptions}
      ref={chartRef}
      {...rest}
      sx={{ display: 'flex', flex: 1, width: 1, height: 240, minWidth: 1, minHeight: 240 }}
    />
  );
};

export default BalanceHistoryChart;
