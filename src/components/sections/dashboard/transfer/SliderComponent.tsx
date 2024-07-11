import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import Image1 from 'assets/profile/image-1.png';
import Image2 from 'assets/profile/image-2.png';
import Image3 from 'assets/profile/image-3.png';
import Image4 from 'assets/profile/image-4.png';
import Image5 from 'assets/profile/image-5.png';

// import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Box, IconButton, Stack } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import ReactSwiper, { SwiperComponentProps } from 'components/base/ReactSwiper';
import SendAmountInput from 'components/sections/dashboard/transfer/SendAmountInput';
import SlideItem from 'components/sections/dashboard/transfer/SlideItem';
import { useBreakpoints } from 'providers/useBreakpoints';
import { useState } from 'react';

/* ------------------------- Carousel Data ---------------------------- */
const ItemData = [
  { id: 1, image: Image3, name: 'Livia Bator', designation: 'CEO' },
  { id: 2, image: Image2, name: 'Randy Press', designation: 'Director' },
  { id: 3, image: Image1, name: 'Workman', designation: 'Designer' },
  { id: 4, image: Image4, name: 'Kevin Reed', designation: 'UX' },
  { id: 5, image: Image5, name: 'Charleen', designation: 'CTO' },
  //   { id: 5, image: Image5, name: 'Sophia Clark', designation: 'Marketing Manager' },
  //   { id: 6, image: Image3, name: 'Natalie', designation: 'Product Manager' },
  //   { id: 7, image: Image1, name: 'Chris Evans', designation: 'Developer' },
];
/* -------------------------------------------------------------------------- */
const cardSize = { lg: 70, md: 50, sm: 50 }; // Adjust card size as needed

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { only } = useBreakpoints();
  const isMd = only('md');
  const isSm = only('sm');

  const totalSlides = ItemData.length;
  const slidesPerView = (isMd && totalSlides >= 5) || (isSm && totalSlides >= 5) ? 5 : 3;

  const swiperProps: SwiperComponentProps['swiperProps'] = {
    navigation: { nextEl: '.arrow-left', prevEl: '.arrow-right' },
    slidesPerView: slidesPerView,
    spaceBetween: 20,
    slideToClickedSlide: true,
    loop: true,
    centeredSlides: true,
    slideActiveClass: 'swiper-slide-active',
    onRealIndexChange: (swiper) => setCurrentSlide(swiper.realIndex),
  };

  return (
    <Stack gap={4} justifyContent="space-between" sx={{ flex: 1 }}>
      <Stack direction="row" sx={{ alignItems: 'center', mt: 1 }}>
        {/** Slider main container */}
        <Box sx={{ overflow: 'hidden' }}>
          <ReactSwiper swiperProps={swiperProps}>
            {ItemData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <SlideItem data={item} cardSize={cardSize} active={currentSlide === index} />
              </SwiperSlide>
            ))}
          </ReactSwiper>
        </Box>
        <IconButton
          className="arrow-right"
          sx={(theme) => ({
            zIndex: 1,
            bgcolor: 'common.white',
            boxShadow: theme.shadows[2],
            mr: 1.15,
            ml: 1,
          })}
        >
          <IconifyIcon icon="iconoir:nav-arrow-right" />
        </IconButton>
      </Stack>
      <SendAmountInput />
    </Stack>
  );
};

export default SliderComponent;
