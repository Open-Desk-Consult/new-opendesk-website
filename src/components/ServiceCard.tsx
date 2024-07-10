interface IProps {
  title: string;
  icon: string;
  info: string;
  hasBtn?: boolean;
  onClick?(): void;
}

const ServiceCard = ({ title, icon, info, onClick, hasBtn = true }: IProps) => {
  const baseStyle =
    "flex flex-col items-start justify-start gap-y-5 text-[#142A49] border border-gray-400 rounded-[40px] p-[30px] hover:bg-[#E15B3B] hover:border-[#E15B3B] hover:text-white hover:shadow-lg mt-5 service-card";
  const sizeStyle = hasBtn
    ? "max-w-[379.26px] max-h-[322.81px] lg:!w-[430px] lg:!h-[366px]"
    : "h-[335.81px] max-h-[350px] lg:h-[366px] lg:!max-h-[370px]";

  const styleClass = `${baseStyle} ${sizeStyle}`;

  return (
    <div className={styleClass}>
      <div className="hover:text-white">
        <img
          src={icon}
          alt="Service icon"
          className="service-card hover:filter hover:brightness-0 hover:invert"
        />
      </div>
      <div className="font-medium text-[27px] leading-[27px] hover:text-white">
        {title}
      </div>
      <div className="font-normal text-[19px] leading-[25px] hover:text-white">
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

// const ServiceCard = ({ title, icon, info, onClick, hasBtn = true }: IProps) => {
//   const styleClass = hasBtn
//     ? "flex flex-col items-start justify-start gap-y-5 text-[#142A49] border border-gray-400 rounded-[40px] p-[30px] hover:bg-[#E15B3B] hover:border-[#E15B3B] max-w-[379.26px] max-h-[322.81px] lg:!w-[430px] lg:!h-[366px] hover:!text-white mt-5 service-card"
//     : "flex flex-col items-start justify-start gap-y-5 text-[#142A49] border border-gray-400 rounded-[40px] p-[30px] hover:bg-[#E15B3B] hover:border-[#E15B3B] h-[335.81px] max-h-[350px] lg:h-[366px] lg:!max-h-[370px] hover:!text-white mt-5 service-card";
//   return (
//     <>
//       <div className={styleClass}>
//         <div>
//           <img src={icon} alt="Service icon" className="service-card" />
//         </div>
//         <div className="font-medium text-[27px] leading-[27px]">{title}</div>
//         <div className="font-normal text-[19px] leading-[25px]">{info}</div>
//         {hasBtn && (
//           <div>
//             <button className="inline-flex items-center" onClick={onClick}>
//               Get started{" "}
//               <img src="/circle-arrow-right-02-sharp.svg" className="ml-2" />
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ServiceCard;
