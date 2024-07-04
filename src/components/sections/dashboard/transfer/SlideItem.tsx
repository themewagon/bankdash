import { Avatar, Stack, Typography } from '@mui/material';

interface UserCardProps {
  data: { id: number; image: string; name: string; designation: string };
  cardSize: number;
  active: boolean;
}

const SlideItem = ({ data, cardSize, active }: UserCardProps) => {
  return (
    <Stack
      gap={0.5}
      alignItems="center"
      justifyContent="start"
      sx={{ textAlign: 'center', maxWidth: 100, minHeight: 140 }}
    >
      <Avatar src={data.image} sx={{ width: cardSize, height: cardSize }} />
      <Typography
        variant="body2"
        color="neutral.dark"
        sx={{
          //   typography: { xs: 'caption', xl: 'body2' },
          fontWeight: active ? 700 : 400,
        }}
      >
        {data.name}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          //   typography: { xs: 'caption', xl: 'body1' },
          fontWeight: active ? 700 : 400,
        }}
      >
        {data.designation}
      </Typography>
    </Stack>
  );
};

export default SlideItem;
