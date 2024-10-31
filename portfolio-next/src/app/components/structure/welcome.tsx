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
      <div className="grid md:grid-cols-2 gap-4 px-2 md:px-12">
        {services.map((service, index) => (
          <Card
            key={index}
            className="relative flex shadow-2xl max-w-xs lg:max-w-sm xl:max-w-md mx-auto cursor-pointer border-none transform transition duration-500 hover:scale-105"
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
