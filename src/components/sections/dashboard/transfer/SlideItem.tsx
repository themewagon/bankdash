import { Avatar, Stack, Typography } from '@mui/material';

interface UserCardProps {
  data: { id: number; image: string; name: string; designation: string };
  cardSize: number;
}

const SlideItem = ({ data, cardSize }: UserCardProps) => {
  return (
    <Stack
      gap={0.5}
      alignItems="center"
      justifyContent="center"
      sx={{ textAlign: 'center', maxWidth: 95 }}
    >
      <Avatar src={data.image} sx={{ width: cardSize, height: cardSize }} />
      <Typography variant="body2" fontWeight="regular" color="neutral.dark">
        {data.name}
      </Typography>
      <Typography color="text.secondary">{data.designation}</Typography>
    </Stack>
  );
};

export default SlideItem;
