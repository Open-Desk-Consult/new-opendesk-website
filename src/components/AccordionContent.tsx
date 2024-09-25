interface IProps {
  content: string;
  details: { title: string; icon: string; desc: string }[];
  heading?: string;
  image?: string;
  year?: string;
}
const AccordionContent = ({ content, details, image }: IProps) => {
  return (
    <>
      <div className="lg:hidden flex-col justify-between items-start">
        <div className="mb-5">
          <img
            src={image}
            alt="project image"
            className="w-[327px] h-[172px] rounded-[20px]"
          />{" "}
        </div>
        <div className="w-full">
          <div className="border-b-2 border-white text-white text-[14.4px] font-normal leading-[24px] pb-3 mb-2 text-left">
            {content}
          </div>
          {details.map((detail, idx) => (
            <div
              className="flex gap-x-2 items-start border-b-2 border-white mb-3 pb-3"
              key={idx}
            >
              <div className="">
                <img
                  src={detail.icon}
                  alt="content"
                  className="w-[32.4px] h-[32.4px]"
                />
              </div>
              <div>
                <p className="text-xs font-normal leading-[19px]">
                  {detail.title}
                </p>
                <p className="text-xs font-medium leading-[19px]">
                  {detail.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-start">
        <div className="w-[50%]">
          <div className="border-b-2 border-white text-white text-[24px] font-normal leading-[40px] mb-3 pb-3">
            {content}
          </div>
          {details.map((detail, idx) => (
            <div
              className="flex gap-x-2 items-start border-b-2 border-white mb-3 pb-3"
              key={idx}
            >
              <div>
                <img
                  src={detail.icon}
                  alt="content"
                  className="w-[32.4px] h-[32.4px] bg-contain"
                />
              </div>
              <div>
                <p className="text-xs font-normal leading-[19px]">
                  {detail.title}
                </p>
                <p className="text-xs font-medium leading-[19px]">
                  {detail.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            src={image}
            alt="project image"
            className="!w-[480px] !h-[328px] rounded-[20px] bg-contain"
          />{" "}
        </div>
      </div>
    </>
  );
};

export default AccordionContent;
