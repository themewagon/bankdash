import CardContainer from 'components/common/CardContainter';
import WeeklyActivityChart from 'components/sections/dashboard/activity/WeeklyActivityChart';

const WeeklyActivity = () => {
  return <CardContainer title="Weekly Activity" CardComponent={WeeklyActivityChart} />;
};

export default WeeklyActivity;
