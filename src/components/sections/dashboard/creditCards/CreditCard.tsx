import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import BankLogoAlt from 'assets/bank-logo-alt.svg';
import BankLogo from 'assets/bank-logo.svg';
import ChipCardBlack from 'assets/chip_black.png';
import ChipCardWhite from 'assets/chip_white.png';
import Image from 'components/base/Image';

interface CreditCardProps {
  theme?: 'blue' | 'white';
}

const CreditCard = ({ theme = 'white' }: CreditCardProps) => {
  const renderThemeStyles = () => {
    switch (theme) {
      case 'blue':
        return {
          cardBg: 'linear-gradient(to top right, #4C49ED 30%, #0A06F4)',
          textColor: 'common.white',
          chipCard: ChipCardWhite,
          bankLogo: BankLogo,
          cardGradient:
            'linear-gradient(to bottom, rgba(255, 255, 255, .1) 0%, transparent) no-repeat',
          borderStyle: 'none',
        };
      case 'white':
        return {
          cardBg: 'common.white',
          textColor: 'secondary.main',
          labelColor: '#718EBF',
          chipCard: ChipCardBlack,
          bankLogo: BankLogoAlt,
          cardGradient:
            'linear-gradient(to bottom right, rgba(255, 255, 255, 0.15) 0%, transparent) no-repeat',
          borderStyle: 1,
        };
      default:
        return {
          cardBg: 'common.white',
          textColor: 'common.black',
          labelColor: '',
          chipCard: ChipCardWhite,
          bankLogo: BankLogo,
          cardGradient: '',
        };
    }
  };

  const { cardBg, textColor, cardGradient, borderStyle, bankLogo, chipCard, labelColor } =
    renderThemeStyles();

  return (
    <Card
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
        background: cardBg,
        color: textColor,
        border: 1,
        borderColor: 'neutral.light',
      }}
    >
      <Stack px={3} py={3} sx={{ gap: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: labelColor,
              }}
            >
              Balance
            </Typography>
            <Typography variant="h4">$5,756</Typography>
          </Box>
          <Image src={chipCard} alt="chip-card" sx={{ width: 35 }} />
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Stack sx={{ gap: 0.5 }}>
              <Typography
                variant="caption"
                sx={{
                  color: labelColor,
                }}
              >
                CARD HOLDER
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                Eddy Cusuma
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack sx={{ gap: 0.5 }}>
              <Typography
                variant="caption"
                sx={{
                  color: labelColor,
                }}
              >
                VALID THRU
              </Typography>
              <Typography variant="body1" fontWeight={600}>
                12/22
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Stack
        direction="row"
        gap={2}
        sx={{
          background: cardGradient,
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 1.25,
          px: 3,
          py: 3,
          borderTop: borderStyle,
          borderColor: 'neutral.light',
        }}
      >
        <Typography variant="h3">3778 **** **** 1234</Typography>
        <Image src={bankLogo} alt="bank-logo" sx={{ width: 50 }} />
      </Stack>
    </Card>
  );
};

export default CreditCard;
