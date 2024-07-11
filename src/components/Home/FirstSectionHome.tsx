import CustomButton from "../CustomButton";
const FirstSectionHome = () => {
  return (
    <>
      <div className="lg:hidden flex flex-col gap-y-3 !px-[16px] z-10 animate-fade-down animate-once animate-ease-in">
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
            onClick={() => {}}
            color="secondary"
            className="mt-5"
          />
        </div>
      </div>

      <div className="hidden !mt-[150px] lg:grid lg:grid-cols-5 items-start !px-[64px] animate-fade-down animate-once animate-ease-in">
        <div className="col-span-3 font-[700px] text-[65px] leading-[74px]">
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
            onClick={() => {}}
            color="secondary"
            className="mt-5"
          />
        </div>
      </div>
    </>
  );
};

export default FirstSectionHome;
