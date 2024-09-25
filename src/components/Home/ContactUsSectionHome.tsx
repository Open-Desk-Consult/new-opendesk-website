import CustomButton from "../CustomButton";
import { useCustomNavigation } from "../../hook/useCustomNavigation";

const ContactUsSectionHome = () => {
  const onClick = useCustomNavigation();
  return (
    <>
      <div className="w-full !items-center !justify-center flex flex-col !mt-[150px] mb-4 lg:hidden mr-[22px]">
        <div className="!w-full">
          <div className="w-full max-w-[385px] border h-[580.54px] bg-[#FFECE7] !rounded-[28px] flex flex-col items-center justify-start bgImg">
            <div className="px-6 mt-[60px] text-center w-auto">
              <div className="font-medium text-[30px] h-[80px] text-left leading-[40.93px]">
                Ready to partner with our team to help your brand?
              </div>
              <div className="mt-[100px] text-left">
                <CustomButton
                  btnText="Contact us"
                  color="primary"
                  onClick={() => {
                    onClick("/about-us");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full !items-center !justify-center hidden lg:flex !mt-[150px] mb-4">
        <div className="!w-[1237px] !h-[420px]">
          <div className="w-full relative border h-full bg-[#FFECE7] !rounded-[28px] bgImg-web">
            <div className="p-5 mt-[75px] ml-[100px]">
              <div className="font-medium text-[45px] w-[584px] h-[114px]">
                Ready to partner with our team to help your brand?
              </div>
              <div className="mt-[80px]">
                <CustomButton
                  btnText="Contact us"
                  color="primary"
                  onClick={() => {
                    onClick("/about-us");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSectionHome;
