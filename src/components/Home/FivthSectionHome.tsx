import CustomButton from "../CustomButton";

const FivthSectionHome = () => {
  return (
    <>
      <div className="w-full !items-center !justify-center flex flex-col !mt-[150px] mb-4 lg:hidden">
        <div className="!w-full !h-[631px]">
          <div className="w-full relative border h-full bg-[#FFECE7] !rounded-[28px] flex flex-col items-center justify-start bgImg">
            <div className="p-5 text-center !absolute">
              <div className="font-medium text-[45px] h-[114px] text-left !px-8">
                Ready to partner with our team to help your brand?
              </div>
              <div className="mt-[80px] text-left !px-8">
                <CustomButton
                  btnText="Contact us"
                  color="primary"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full !items-center !justify-center hidden lg:flex !mt-[150px] mb-4">
        <div className="!w-[1237px] !h-[420px]">
          <div className="w-full relative border h-full bg-[#FFECE7] !rounded-[28px]">
            <div className="p-5 mt-[100px] ml-[100px]">
              <div className="font-medium text-[45px] w-[584px] h-[114px]">
                Ready to partner with our team to help your brand?
              </div>
              <div className="mt-[80px]">
                <CustomButton
                  btnText="Contact us"
                  color="primary"
                  onClick={() => {}}
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 !rounded-[28px]">
              <img
                src="/cardImage.png"
                alt="card image"
                className="rounded-tr-[28px] rounded-br-[28px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FivthSectionHome;
