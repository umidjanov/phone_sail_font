// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCube, Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-cube";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function Slider() {
//   return (
//     <div>
//       <Swiper
//         effect="cube"
//         grabCursor={true}
//         cubeEffect={{
//           shadow: true,
//           slideShadows: true,
//           shadowOffset: 20,
//           shadowScale: 0.94,
//         }}
//         navigation={true}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 300, disableOnInteraction: false }}
//         loop={true}
//         modules={[EffectCube, Navigation, Pagination, Autoplay]}
//         className="mySwiper rounded-md overflow-hidden"
//       >
//         {[
//           "https://images.uzum.uz/d0ddtc33uvph509t20fg/main_page_banner.jpg",
//         ].map((src, i) => (
//           <SwiperSlide key={i}>
//             <img
//               src={src}
//               alt={`Slide ${i + 1}`}
//               className="w-full h-auto object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx="true">{`
//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #4b5563; /* Tailwind: text-gray-600 */
//           width: 24px;
//           height: 24px;
//         }

//         .swiper-button-next::after,
//         .swiper-button-prev::after {
//           font-size: 16px;
//         }
//       `}</style>
//     </div>
//   );
// }
