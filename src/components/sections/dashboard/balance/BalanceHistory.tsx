import CardContainer from 'components/common/CardContainter';
import BalanceHistoryChart from 'components/sections/dashboard/balance/BalanceHistoryChart';

const BalanceHistory = () => {
  return <CardContainer title="Balance History" CardComponent={BalanceHistoryChart} />;
};

export default BalanceHistory;
