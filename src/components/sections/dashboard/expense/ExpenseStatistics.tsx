import CardContainer from 'components/common/CardContainter';
import ExpenseStatisticsChart from 'components/sections/dashboard/expense/ExpenseStatisticsChart';

const ExpenseStatistics = () => {
  return <CardContainer title="Expense Statistics" CardComponent={ExpenseStatisticsChart} />;
};

export default ExpenseStatistics;
