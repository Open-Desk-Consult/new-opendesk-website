import { services } from "../../data";
import ServiceCard from "../ServiceCard";

const FourthSectionHome = () => {
  return (
    <>
      <div className="flex flex-col mr-6 ml-[16px] items-start justify-start lg:items-center lg:justify-center lg:mr-0 mt-[150px]">
        <div className="font-bold text-[25px] leading-[16px] lg:text-[35px] lg:leading-6 text-[#E15B3B]">
          Our Service
        </div>
        <div className="font-bold text-[28px] leading-[29px] lg:text-[40px] lg:leading-[35px] mt-5 text-[#3A5B89] w-[60%] lg:text-center">
          Areas in which we provide our services
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 lg:grid lg:grid-cols-3 !w-screen lg:!px-[64px] lg:mt-[100px] lg:gap-x-4">
        {services.map((service) => (
          <div key={service.title}>
            <ServiceCard
              // key={service.title}
              title={service.title}
              icon={service.icon}
              info={service.info}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FourthSectionHome;
