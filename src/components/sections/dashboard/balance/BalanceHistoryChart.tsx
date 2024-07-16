import { alpha, SxProps, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import { BalanceDataType } from 'data/balance-chart';
import 'default-passive-events';
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
  seriesData: BalanceDataType;
}
const BalanceHistoryChart = ({ chartRef, ...rest }: BalanceHistoryChartProps) => {
  const theme = useTheme();
  const { palette } = theme;
  const { seriesData } = rest;

  const chartOptions: ECOption = useMemo(() => {
    const xAxisData = seriesData.map((item) => item.month);
    const balanceData = seriesData.map((item) => item.value);
    return {
      grid: {
        left: '1%',
        top: '5%',
        right: '4.2%',
        bottom: '6%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: xAxisData,
        boundaryGap: false,
        axisLabel: {
          padding: 1,
          align: 'left',
          color: palette.primary.light,
          fontSize: 13,
          overflow: 'truncate',
        },
        axisLine: { show: false },
        axisTick: { show: true },
        splitLine: {
          show: true,
          lineStyle: {
            color: palette.text.disabled,
            type: 'dashed',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          padding: 5,
          color: palette.primary.light,
          fontSize: 13,
        },
        axisLine: { show: false },
        axisTick: { show: true },
        splitLine: {
          show: true,
          lineStyle: {
            color: palette.text.disabled,
            type: 'dashed',
          },
        },
      },

      tooltip: {
        trigger: 'axis',
        formatter: '{b}: ${c}',
      },
      color: alpha(palette.primary.main, 0.25),
      series: [
        {
          color: palette.primary.main,
          data: balanceData,
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
                color: alpha(palette.primary.main, 0.25),
              },

              {
                offset: 1,
                color: palette.common.white,
              },
            ]),
            opacity: 0.25,
          },
        },
      ],
    };
  }, [theme, seriesData]);

  return (
    <ReactEchart
      echarts={echarts}
      option={chartOptions}
      ref={chartRef}
      sx={{
        width: 1,
        height: 1,
        maxHeight: 240,
        minWidth: 1,
      }}
      {...rest}
    />
  );
};

export default BalanceHistoryChart;
