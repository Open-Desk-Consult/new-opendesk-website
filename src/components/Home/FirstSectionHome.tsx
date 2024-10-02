import CustomButton from "../CustomButton";
import { useCustomNavigation } from "../../hook/useCustomNavigation";
const FirstSectionHome = () => {
  const onClick = useCustomNavigation();
  return (
    <>
      <div className="lg:hidden flex flex-col gap-y-3 z-10 animate-fade-down animate-once animate-ease-in px-[16px] lg:px-[64px]">
        <div className="font-[700px] text-[40px] leading-[50px]">
          Devising digital solutions for smart brands to edge
        </div>
        <div className="font-SpaceGrotesk">
          <div className="font-[400px] text-[15px] leading-[18px] text-left pr-3">
            We provide an operational range of cost effective, cutting edge
            solutions with instant visualisation to improve overall business
            performance
          </div>
          <CustomButton
            btnText="Get started"
            onClick={() => {
              onClick("/about-us");
            }}
            color="secondary"
            className="mt-5"
          />
        </div>
      </div>

      <div className="hidden !mt-[150px] lg:grid lg:grid-cols-5 items-start !px-[64px] animate-fade-down animate-once animate-ease-in">
        <div className="col-span-3 font-bold text-[65px] leading-[74px] text-[#142A49]">
          Devising digital solutions for smart brands to edge
        </div>
        <div className="col-span-2">
          <div className="font-[400px] text-[21px] leading-[25px] text-left">
            We provide an operational range of cost effective, cutting edge
            solutions with instant visualisation to improve overall business
            performance
          </div>
          <CustomButton
            btnText="Get started"
            onClick={() => {
              onClick("/about-us");
            }}
            color="secondary"
            className="mt-5"
          />
        </div>
      </div>
    </>
  );
};

export default FirstSectionHome;
