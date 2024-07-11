import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import BankLogoAlt from 'assets/bank-logo-alt.svg';
import BankLogo from 'assets/bank-logo.svg';
import ChipCardBlack from 'assets/chip_black.png';
import ChipCardWhite from 'assets/chip_white.png';
import Image from 'components/base/Image';
import { currencyFormat } from 'helpers/utils';

export interface CreditCardData {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  theme?: 'blue' | 'white';
}

interface CreditCardProps {
  theme?: 'blue' | 'white';
  cardData: CreditCardData;
}

const CreditCard = ({ theme = 'white', cardData }: CreditCardProps) => {
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
          textColor: 'primary.darker',
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

  const { balance, cardHolder, validThru, cardNumber } = cardData;

  return (
    <Card
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
        background: cardBg,
        color: textColor,
        border: 1,
        borderColor: 'action.focus',
      }}
    >
      <Stack sx={{ gap: 4, px: { xs: 2.5, md: 3 }, pt: 3, pb: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography
              sx={{
                color: labelColor,
                fontSize: { xs: 'overline.fontSize', md: 'caption.fontSize' },
                textTransform: 'capitalize',
              }}
            >
              Balance
            </Typography>
            <Typography sx={{ typography: { xs: 'body2', md: 'h4' } }}>
              {currencyFormat(Number(balance))}
            </Typography>
          </Box>
          <Image src={chipCard} alt="chip-card" sx={{ width: { xs: 30, md: 35 } }} />
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Stack sx={{ gap: 0.5 }}>
              <Typography
                sx={{
                  color: labelColor,
                  typography: { xs: 'overline', md: 'caption' },
                }}
              >
                CARD HOLDER
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 'subtitle1.fontSize', md: 'body1.fontSize' },
                }}
                fontWeight={600}
              >
                {cardHolder}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack sx={{ gap: 0.5 }}>
              <Typography
                variant="caption"
                sx={{
                  color: labelColor,
                  typography: { xs: 'overline', md: 'caption' },
                }}
              >
                VALID THRU
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 'subtitle1.fontSize', md: 'body1.fontSize' },
                }}
                fontWeight={600}
              >
                {validThru}
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
          pt: { xs: 2, md: 3 },
          pb: { xs: 2, md: 4 },
          borderTop: borderStyle,
          borderColor: 'action.focus',
        }}
      >
        <Typography
          sx={{
            typography: { xs: 'body1', md: 'h3' },
          }}
        >
          {cardNumber}
        </Typography>
        <Image src={bankLogo} alt="bank-logo" sx={{ width: 50 }} />
      </Stack>
    </Card>
  );
};

export default CreditCard;
