import CardContainer from 'components/common/CardContainter';
import TransactionCard from 'components/sections/dashboard/transactions/TransactionCard';

const RecentTransactions = () => {
  return <CardContainer title="Recent Transaction" CardComponent={TransactionCard} />;
};

export default RecentTransactions;
