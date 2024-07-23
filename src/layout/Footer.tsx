import { Link } from "react-router-dom";
import { navItems, socialsLogo } from "../data";

const Footer = () => {
  return (
    <>
      <div className="!w-full px-[16px] bg-[#E15B3B] !pb-[100px] pt-[80px] mobileFooter mt-[80px] lg:hidden">
        <div className="flex items-center justify-between pb-6">
          <div className="flex flex-col items-start justify-start !gap-x-10 !pb-5 b-bottom w-full">
            <div>
              <img src="/opendeskLogoWhite.svg" alt="openDesk logo" />
            </div>
            <div className="flex items-center justify-center !gap-x-5 mt-8">
              {navItems.map((nav) => (
                <Link
                  to={nav.key}
                  key={nav.key}
                  className="text-[12px] font-medium leading-[16px] text-white"
                >
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-y-8 !pt-7">
          <div className="font-medium text-[12px] leading-[16px] text-[#FBFBFB]">
            info@opendeskng.com
          </div>

          <div className="flex items-center justify-center gap-x-4">
            {socialsLogo.map((soc) => (
              <Link to={soc.path} key={soc.name}>
                <img
                  src={soc.logo}
                  alt={soc.name}
                  className="w-[23px] h-[23px]"
                />
              </Link>
            ))}
          </div>
          <div className="font-medium text-[12px] leading-[16px] text-[#FBFBFB]">
            ©{new Date().getFullYear()} OpenDesk. All rights reserved
          </div>
        </div>
      </div>

      <div className="!w-full px-[64px] bg-[#E15B3B] !pb-[150px] pt-[80px] footerImg mt-[80px] hidden lg:block">
        <div className="flex items-center justify-between b-bottom pb-6">
          <div className="flex items-center justify-center !gap-x-10 !pb-5">
            <div>
              <img src="/opendeskLogoWhite.svg" alt="openDesk logo" />
            </div>
            <div className="flex items-center justify-center gap-x-3">
              {navItems.map((nav) => (
                <Link
                  to={nav.key}
                  key={nav.key}
                  className="text-[20px] font-medium leading-[25px] text-white"
                >
                  {nav.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            {socialsLogo.map((soc) => (
              <Link to={soc.path} key={soc.name}>
                <img src={soc.logo} alt={soc.name} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between !pt-7">
          <div className="font-medium text-xl leading-[25px] text-[#FBFBFB]">
            ©{new Date().getFullYear()} OpenDesk. All rights reserved
          </div>
          <div className="font-medium text-xl leading-[25px] text-[#FBFBFB]">
            info@opendeskng.com
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
