import { Carousel } from "antd";
import cauroselImage from "../../assets/images/Frame 8.jpg";
import companyImage from "../../assets/Fictional company logo.svg";
import companyImage1 from "../../assets/Fictional company logo2.svg";
import companyImage2 from "../../assets/Fictional company logo3.svg";
import companyImage3 from "../../assets/Fictional company logo4.svg";
import companyImage4 from "../../assets/Fictional company logo5.svg";

const imageArray = [
  { key: "1", image: companyImage },
  { key: "2", image: companyImage1 },
  { key: "3", image: companyImage2 },
  { key: "4", image: companyImage3 },
  { key: "5", image: companyImage4 },
];

const SecondSectionHome = () => {
  return (
    <>
      <div className="!mt-[60px] mr-6 lg:hidden">
        <img
          src={cauroselImage}
          alt="Caroul image"
          className="w-full !h-[250px]"
        />
        <div className="bg-[#F7F7F7] !px-[30px] !py-[30px] flex flex-col items-center justify-center w-full">
          <div className="font-bold text-[12.6px] leading-[15.12px] text-[#838080]">
            50+ partnering clients:
          </div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-3 mt-4">
            {imageArray.map((item) => (
              <div>
                <img
                  key={item.key}
                  src={item.image}
                  alt="company image"
                  className="!w-[94px] !h-[26px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="!mt-[100px] hidden lg:block">
        <Carousel autoplay className="!mt-[150px] !h-[490px] !p-0">
          <div className="">
            <img src={cauroselImage} alt="Caroul image" className="w-full" />
          </div>
          <div>
            <img src={cauroselImage} alt="Caroul image" className="w-full" />
          </div>
        </Carousel>
      </div>
      <div className="bg-[#F7F7F7] !px-[64px] !py-[50px] hidden lg:flex items-center justify-between w-full mt-[45px]">
        <div className="font-bold text-xl leading-6 text-[#838080]">
          50+ partnering clients:
        </div>
        <div className="flex items-center justify-center gap-x-6">
          {imageArray.map((item) => (
            <div>
              <img key={item.key} src={item.image} alt="company image" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondSectionHome;
