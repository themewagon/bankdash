import CardContainer from 'components/common/CardContainter';
import BalanceHistoryChart from 'components/sections/dashboard/balance/BalanceHistoryChart';
import { balanceData, BalanceDataType } from 'data/balance-chart';
import ReactECharts from 'echarts-for-react';
import { useChartResize } from 'providers/useEchartResize';
import { useEffect, useRef, useState } from 'react';

const BalanceHistory = () => {
  const chartRef = useRef<ReactECharts>(null);
  const [chartData, setChartData] = useState<BalanceDataType>([]);
  useChartResize(chartRef);
  // Fetch balance data
  useEffect(() => {
    const fetchData = () => {
      setChartData(balanceData);
    };

    fetchData();
  }, []);
  return (
    <CardContainer title="Balance History">
      <BalanceHistoryChart chartRef={chartRef} seriesData={chartData} />
    </CardContainer>
  );
};

export default BalanceHistory;
