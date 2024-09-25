interface IProps {
  title: string;
  icon: string;
  info: string;
  hasBtn?: boolean;
  onClick?(): void;
}

const ServiceCard = ({ title, icon, info, onClick, hasBtn = true }: IProps) => {
  const baseStyle =
    "flex flex-col items-start justify-start gap-y-5 text-[#142A49] border border-gray-400 rounded-[40px] p-[30px] mt-5";
  const sizeStyle = hasBtn
    ? "lg:!mx-auto lg:!h-[370px] lg:w-auto w-full"
    : "lg:h-[366px] lg:!max-h-[370px] w-full";

  const styleClass = `${baseStyle} ${sizeStyle}`;

  return (
    <div className={styleClass}>
      <div className="">
        <img src={icon} alt="Service icon" className="text-[#E15B3B]" />
      </div>
      <div className="font-medium text-[22px] leading-[24px] lg:text-[27px] lg:leading-[27px] hover:text-white">
        {title}
      </div>
      <div className="font-normal text-[16px] lg:text-[19px] lg:leading-[25px] hover:text-white">
        {info}
      </div>
      {hasBtn && (
        <div>
          <button
            className="inline-flex items-center hover:text-white"
            onClick={onClick}
          >
            Get started{" "}
            <img
              src="/circle-arrow-right-02-sharp.svg"
              className="ml-2 hover:filter hover:brightness-0 hover:invert"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
