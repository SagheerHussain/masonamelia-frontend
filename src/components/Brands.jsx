// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { motion, useAnimationFrame } from "framer-motion";
// import { getBrands } from "../api/brands";

// const Brands = () => {
//   const [brands, setBrands] = useState([]);
//   const baseImages = useMemo(() => [...brands, ...brands], [brands]);

//   const xRef = useRef(0);
//   const containerRef = useRef(null);

//   const [isHovered, setIsHovered] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await getBrands();
//         if (res?.success && Array.isArray(res.data)) {
//           const logos = res.data.map(b => b.logo).filter(Boolean);
//           setBrands(logos);
//         }
//       } catch (e) {
//         console.error(e);
//       }
//     })();
//   }, []);

//   useAnimationFrame((t, delta) => {
//     if (containerRef.current && !isHovered) {
//       xRef.current -= 0.05 * delta;
//       containerRef.current.style.transform = `translateX(${xRef.current}px)`;
//       const containerWidth = containerRef.current.scrollWidth / 2;
//       if (Math.abs(xRef.current) >= containerWidth) xRef.current = 0;
//     }
//   });

//   return (
//     <section className="w-full overflow-x-hidden bg-[#111218] py-4">
//       <div
//         className="w-max flex"
//         ref={containerRef}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {baseImages.map((img, index) => {
//           const scale = isHovered && hoveredIndex === index ? 1.3 : 1;
//           return (
//             <motion.img
//               key={index}
//               src={img}
//               alt={`brand-${index}`}
//               draggable={false}
//               className="w-40 h-24 object-contain mx-12"
//               style={{ filter: "brightness(0) invert(1)" }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               animate={{ scale }}
//               transition={{ duration: 0.4 }}
//             />
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Brands;


import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { getBrands } from "../api/brands";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const baseImages = useMemo(() => [...brands, ...brands], [brands]);

  const xRef = useRef(0);
  const containerRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getBrands();
        if (res?.success && Array.isArray(res.data)) {
          const logos = res.data.map(b => b.logo).filter(Boolean);
          setBrands(logos);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useAnimationFrame((t, delta) => {
    if (containerRef.current && !isHovered) {
      xRef.current -= 0.05 * delta;
      containerRef.current.style.transform = `translateX(${xRef.current}px)`;
      const containerWidth = containerRef.current.scrollWidth / 2;
      if (Math.abs(xRef.current) >= containerWidth) xRef.current = 0;
    }
  });

  return (
    <section className="w-full overflow-x-hidden bg-[#111218] py-4">
      <div
        className="w-max flex"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {baseImages.map((img, index) => {
          const scale = isHovered && hoveredIndex === index ? 1.3 : 1;
          return (
            <motion.img
              key={index}
              src={img}
              alt={`brand-${index}`}
              draggable={false}
              className="w-40 h-24 object-contain mx-12"
              style={{ filter: "brightness(0) invert(1)" }}
              onMouseEnter={() => setHoveredIndex(index)}
              animate={{ scale }}
              transition={{ duration: 0.4 }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
