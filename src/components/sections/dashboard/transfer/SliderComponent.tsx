import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import {
//   Box,
//   Button,
//   IconButton,
//   InputAdornment,
//   Stack,
//   TextField,
//   Typography,
// } from '@mui/material';
import Image1 from 'assets/profile/image-1.png';
import Image2 from 'assets/profile/image-2.png';
import Image3 from 'assets/profile/image-3.png';
const cardWidth = 70; // Adjust card width as needed
// const cardSpacing = 0; // Adjust spacing between cards as needed

// import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Box, IconButton, Stack } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import SendAmountInput from 'components/sections/dashboard/transfer/SendAmountInput';
import SlideItem from 'components/sections/dashboard/transfer/SlideItem';
import SwiperCore from 'swiper/core';

// Install Swiper modules
SwiperCore.use([Navigation]);

const ItemData = [
  { id: 1, image: Image3, name: 'Livia Bator', designation: 'CEO' },
  { id: 2, image: Image2, name: 'Randy Press', designation: 'Director' },
  { id: 3, image: Image1, name: 'Workman', designation: 'Designer' },
  { id: 4, image: Image3, name: 'Zinia', designation: 'Designer' },
];

const SliderComponent = () => {
  const totalSlides = ItemData.length;
  const slidesPerView = totalSlides > 3 ? 3 : totalSlides;
  //   const handleNextPage = () => {
  //     setCurrentPage((prevPage) => (prevPage + 1) % ItemData.length);
  //   };

  //   const transformValue = `translateX(-${currentPage * cardWidth * 2}px)`;

  return (
    <Stack gap={5.5}>
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        {/** Slider main container */}
        <Box marginTop={4} sx={{ minWidth: 0 }}>
          <Swiper
            slideToClickedSlide={true}
            navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
            slidesPerView={slidesPerView}
            spaceBetween={20}
            loop={true}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {/** Slides */}
            {ItemData.map((item) => (
              <SwiperSlide key={item.id}>
                <SlideItem data={item} cardSize={cardWidth} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <IconButton
          className="arrow-right"
          sx={(theme) => ({
            zIndex: 1,
            bgcolor: 'common.white',
            boxShadow: theme.shadows[2],
            mr: 1.15,
          })}
        >
          <IconifyIcon icon="iconoir:nav-arrow-right" />
        </IconButton>
      </Stack>
      <SendAmountInput />
    </Stack>
  );
};
// const ProfileSlider = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % ItemData.length);
//   };

//   const transformValue = `translateX(-${currentPage * cardWidth * 2}px)`;

//   return (
//     <Stack gap={2.5} sx={{ p: 1.5 }}>
//       <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
//         <Box
//           sx={{
//             //   maxWidth: `${visibleCards * (cardWidth + cardSpacing)}px`,
//             overflow: 'hidden',
//             flex: 1,
//             m: 'auto',
//           }}
//         >
//           <Stack
//             direction="row"
//             sx={{
//               transform: transformValue,
//               transition: 'transform 0.5s ease-in-out',
//             }}
//           >
//             {ItemData.map((item, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   flex: '1 1 auto',
//                   marginRight: index < ItemData.length - 1 ? `${cardSpacing}px` : 0,
//                 }}
//               >
//                 <Card data={item} cardSize={cardWidth} />
//               </Box>
//             ))}
//           </Stack>
//         </Box>

//         <IconButton
//           sx={(theme) => ({
//             zIndex: 1,
//             bgcolor: 'common.white',
//             boxShadow: theme.shadows[2],
//           })}
//           onClick={handleNextPage}
//         >
//           <IconifyIcon icon="iconoir:nav-arrow-right" />
//         </IconButton>
//       </Stack>
//       <Stack
//         direction="row"
//         gap={3}
//         sx={{
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           width: 1,
//         }}
//       >
//         <Typography variant="body2" fontWeight="regular" color="text.secondary" whiteSpace="nowrap">
//           Write Amount
//         </Typography>
//         <TextField
//           placeholder="525.50"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="start">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   type="submit"
//                   sx={{
//                     borderRadius: 'inherit',
//                     minWidth: 120,
//                     py: 1.5,
//                   }}
//                   endIcon={<IconifyIcon icon="ph:telegram-logo" color="common.white" width={24} />}
//                   //   sx={{ px: 3, py: 1.75 }}
//                 >
//                   Send
//                 </Button>
//               </InputAdornment>
//             ),
//           }}
//           variant="filled"
//           sx={(theme) => ({
//             '& .MuiFilledInput-root': {
//               paddingRight: 0,
//               borderRadius: 40,
//             },
//             '& .MuiInputAdornment-root': {
//               backgroundColor: theme.palette.primary.main,
//               p: 3,
//               overflow: 'hidden',
//               borderRadius: 40,
//               justifyContent: 'center',
//             },

//             '&::placeholder': {
//               color: 'text.secondary',
//               ml: 5,
//             },
//           })}
//         />
//       </Stack>
//     </Stack>
//   );
// };

export default SliderComponent;
