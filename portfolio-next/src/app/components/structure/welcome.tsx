// "use client";
// import Link from "next/link";
// import {
//   Card,
//   CardHeader,
//   CardFooter,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "../ui/card";

// const WelcomeSection = () => {
//   return (
//     <div className="grid w-full justify-center pb-4 pt-4">
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-12">
//         <Card className="flex cols-3">
//           <img
//             className="h-full z-1 relative"
//             src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e948896757753.5eb58c727d672.png"
//             alt="Design"
//           />
//           <h4 className="text-center">UI/UX Design</h4>
//         </Card>
//         <Card>
//           <img
//             className="h-full z-1"
//             src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e948896757753.5eb58c727d672.png"
//             alt="Design"
//           />{" "}
//           <h4 className="text-center">Nettsider</h4>
//         </Card>
//         <Card>
//           <img
//             className="h-full z-1"
//             src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e948896757753.5eb58c727d672.png"
//             alt="Design"
//           />{" "}
//           <h4 className="text-center">Forenkle Innholdsproduksjon</h4>
//         </Card>
//       </div>
//     </div>
//   );
// };
// export default WelcomeSection;

// "use client";
// import { useEffect, useState } from "react";
// import { fetchServices, Service, urlFor } from "../import/FetchServices";
// import {
//   Card,
//   CardHeader,
//   CardFooter,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "../ui/card";

// const WelcomeSection = () => {
//   const [services, setServices] = useState<Service[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchServices();
//       setServices(data);
//     };

//     fetchData();
//   }, []);

//   if (services.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="grid w-full justify-center pb-4 pt-2">
//       <div className="grid grid-cols-2 gap-4 px-12">
//         {services.map((service, index) => (
//           <Card
//             key={index}
//             className="relative flex cols-3 shadow-xl max-w-xs lg:max-w-sm xl:max-w-md mx-auto"
//           >
//             <img
//               className="h-full w-full object-cover"
//               src={urlFor(service.image).url()}
//               alt={service.altText}
//             />
//             <h4 className="text-center absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-50">
//               {service.title}
//             </h4>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WelcomeSection;
"use client";

import { useEffect, useState } from "react";
import { fetchServices, Service, urlFor } from "../import/FetchServices";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

const WelcomeSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchServices();
      setServices(data);
    };

    fetchData();
  }, []);

  if (services.length === 0) {
    return <div>Loading...</div>;
  }

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid w-full justify-center pb-4 pt-2">
      <div className="grid md:grid-cols-2 gap-4 px-12">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative flex shadow-xl max-w-xs lg:max-w-sm xl:max-w-md mx-auto cursor-pointer transform transition duration-500 hover:scale-105"
            onClick={() => handleCardClick(index)}
          >
            <img
              className="h-full w-full object-cover"
              src={urlFor(service.image).url()}
              alt={service.altText}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-50 transition-opacity duration-500 ${
                activeIndex === index ? "opacity-0" : "opacity-100"
              }`}
            >
              <h4>{service.title}</h4>
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-90 transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="p-4 md:text-l">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;
