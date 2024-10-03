import ServiceCard from "../ServiceCard";
import { aboutOpendesk } from "../../utils/data";
const ThirdSectionAbout = () => {
  return (
    <>
      <div className="w-full px-[16px] lg:px-[64px] mt-5 lg:my-14">
        <div className="grid grid-row-2 lg:grid-cols-4 items-start">
          <div className="col-span-1 mt-6 font-bold text-[25px] leading-[24px] text-[#E15B3B] lg:text-[35px] lg:leading-6">
            About us
          </div>
          <div className="col-span-1 mt-5 lg:col-span-3 font-normal text-base leading-[22px] lg:text-2xl lg:leading-[30px] pr-5">
            Open Desk is a top technology company specializing in app design,
            development, project management, UX engineering, and customer
            support. Our skilled team creates innovative, user-friendly
            applications that meet the highest standards. We elevate your
            digital presence with elegant and expertly implemented solutions
          </div>
        </div>
        <div className="grid grid-row lg:grid-cols-2 lg:gap-x-5 mt-[55px]">
          {aboutOpendesk.map((about) => (
            <div key={about.title} className="col-span-1 service_card">
              <ServiceCard
                title={about.title}
                info={about.info}
                icon={about.icon}
                hasBtn={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThirdSectionAbout;
