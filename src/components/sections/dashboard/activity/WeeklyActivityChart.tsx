import { SxProps, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { BarChart, BarSeriesOption } from 'echarts/charts';
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
  BarSeriesOption | TooltipComponentOption | GridComponentOption
>;

// Register required components
echarts.use([BarChart, LegendComponent, CanvasRenderer, GridComponent]);
// const data = [
//   {
//     value: 79999,
//     name: '',
//     percentage: '80%',
//     maxValue: 100000,
//   },
//   {
//     value: 59999,
//     name: '',
//     percentage: '60%',
//     maxValue: 100000,
//   },
//   {
//     value: 49999,
//     name: '',
//     percentage: '50%',
//     maxValue: 100000,
//   },
//   {
//     value: 39999,
//     name: '',
//     percentage: '40%',
//     maxValue: 100000,
//     color: '#8378ea',
//     showBackground: false,
//     barGap: 10,
//   },
//   {
//     value: 29999,
//     name: '',
//     percentage: '30%',
//     maxValue: 100000,
//   },
// ];
// console.log(data);

const series = [
  {
    data: [420, 332, 301, 334, 490, 160, 320],
    type: 'bar',
    stack: '1',
    name: 'Deposit',
    barWidth: 15,
    itemStyle: {
      borderRadius: 30,
    },
    color: '#1814F3',
    showBackground: false,
    barGap: 1,
  },
  {
    data: [220, 132, 251, 334, 390, 230, 320],
    type: 'bar',
    stack: '2',
    name: 'Withdraw',
    barWidth: 15,
    itemStyle: {
      borderRadius: 30,
    },
    color: '#16DBCC',
    showBackground: false,
    barGap: 1,
  },
];

interface WeeklyActivityChartProps {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  sx?: SxProps;
}
const WeeklyActivityChart = ({ chartRef, ...rest }: WeeklyActivityChartProps) => {
  const theme = useTheme();
  const chartOptions: ECOption = useMemo(() => {
    return {
      xAxis: {
        axisLabel: {
          interval: 0,
          padding: 10,
          baseline: 'top',
          color: '#718EBF',
          fontSize: 13,
        },
        axisLine: { show: false },
        axisTick: { show: false },
        type: 'category',
        data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      },
      yAxis: {
        data: [1],
        axisLabel: { color: '#718EBF', fontSize: 13 },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          lineStyle: {
            color: '#F3F3F5',
          },
        },
        type: 'value',
      },
      grid: {
        left: '2%',
        top: '20%',
        right: '2%',
        bottom: '5%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: ${c}',
        backgroundColor: '#555',
        textStyle: { color: '#F3F3F5' },
        borderWidth: 0,
        padding: 10,
      },
      legend: {
        data: [
          { name: 'Deposit', icon: 'circle' },
          { name: 'Withdraw', icon: 'circle' },
        ],
        orient: 'horizontal',
        y: 'top',
        itemGap: 35,
        itemHeight: 18,
        right: 15,
        top: 10,
        textStyle: {
          // color: `${theme === Theme.LIGHT ? "#000" : "#fff"}`,
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      series: series as any,
      //   series: [
      //     {
      //       name: 'orders',
      //       data: seriesData?.orders,
      //       type: 'bar',
      //       barGap: '0%',
      //       emphasis: {
      //         itemStyle: {
      //           color: theme.palette.success.dark,
      //         },
      //       },
      //       itemStyle: {
      //         borderRadius: [40, 40, 0, 0],
      //         color: theme.palette.success.main,
      //       },
      //       barWidth: 8,
      //     },
      //   ],
    };
  }, [theme]);

  return (
    <ReactEchart
      echarts={echarts}
      option={chartOptions}
      ref={chartRef}
      {...rest}
      sx={{ display: 'flex', flex: 1, width: 1, height: 285, minWidth: 1, minHeight: 285 }}
    />
  );
};

export default WeeklyActivityChart;
