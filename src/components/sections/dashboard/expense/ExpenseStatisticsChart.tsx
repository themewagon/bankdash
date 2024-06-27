import { SxProps, useTheme } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import { PieSeriesOption } from 'echarts';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { PieChart } from 'echarts/charts';
import {
  GridComponent,
  GridComponentOption,
  LegendComponent,
  TooltipComponentOption,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import 'echarts/lib/component/tooltip';
import { CanvasRenderer } from 'echarts/renderers';
import { useMemo } from 'react';

// Use ComposeOption to compose an Option type that only has required components and charts
export type ECOption = echarts.ComposeOption<
  PieSeriesOption | TooltipComponentOption | GridComponentOption
>;
echarts.use([PieChart, LegendComponent, CanvasRenderer, GridComponent]);

interface ExpenseStatisticsChartProps {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  sx?: SxProps;
}
const ExpenseStatisticsChart = ({ chartRef, ...rest }: ExpenseStatisticsChartProps) => {
  const theme = useTheme();
  const chartOptions: ECOption = useMemo(() => {
    return {
      backgroundColor: '#fff',

      tooltip: {
        trigger: 'item',
      },

      color: ['#343C6A', '#1814F3', '#FA00FF', '#FC7900'],
      series: [
        {
          name: 'Expense',
          type: 'pie',
          selectedMode: 'series',
          selectedOffset: 5,
          radius: [0, 145],
          center: ['45%', '45%'],
          roseType: 'radius',
          avoidLabelOverlap: false,

          //   radius: '95%',
          data: [
            { value: 25, name: 'Investment', selected: true },
            { value: 30, name: 'Entertainment', selected: true },
            { value: 25, name: 'Bill Expense', selected: true },
            { value: 20, name: 'Others', selected: true },
          ],
          label: {
            show: true,
            position: 'inside',
            formatter: '{d}%\n{b}',
            color: '#fff',
            fontSize: 13,
            fontWeight: 'bold',
            padding: [0, 0, 0],
          },
          emphasis: {
            itemStyle: {
              borderColor: '#fff',
            },
          },
        },
      ],
      //   series: [
      //     {
      //       name: 'Access From',
      //       type: 'pie',
      //       radius: '55%',
      //       center: ['50%', '50%'],
      //       data: [
      //         { value: 335, name: 'Direct' },
      //         { value: 310, name: 'Email' },
      //         { value: 274, name: 'Union Ads' },
      //         { value: 235, name: 'Video Ads' },
      //         { value: 40, name: 'Search Engine' },
      //       ].sort(function (a, b) {
      //         return a.value - b.value;
      //       }),
      //       roseType: 'radius',
      //       label: {
      //         color: 'rgba(255, 255, 255, 0.3)',
      //       },
      //       labelLine: {
      //         lineStyle: {
      //           color: 'rgba(255, 255, 255, 0.3)',
      //         },
      //         smooth: 0.2,
      //         length: 10,
      //         length2: 20,
      //       },
      //       itemStyle: {
      //         color: '#c23531',
      //         shadowBlur: 200,
      //         shadowColor: 'rgba(0, 0, 0, 0.5)',
      //       },
      //       animationType: 'scale',
      //       animationEasing: 'elasticOut',
      //       animationDelay: function () {
      //         return Math.random() * 200;
      //       },
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

export default ExpenseStatisticsChart;
