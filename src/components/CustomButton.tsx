import { Button } from "antd";
interface IProps {
  color?: "primary" | "secondary";
  variant?: "outline" | "fill";
  className?: string;
  btnText: string;
  onClick(): void;
}
const CustomButton = ({
  btnText,
  className,
  color = "primary",
  onClick,
}: IProps) => {
  const primaryStyle =
    "!bg-[#E15B3B] !text-white !font-medium lg:!text-[17.17px] !text-[12.25px]";
  const secondaryStyle =
    "!bg-white !text-[#E15B3B] !font-medium lg:!text-[17.17px] !text-[12.25px]";

  const btnStyle = color === "primary" ? primaryStyle : secondaryStyle;

  return (
    <>
      <Button
        className={`${btnStyle} lg:!w-[201.12px] lg:!h-[53.71px] w-[140.59px] h-[39.53] !border !border-[#E15B3B] !rounded-full !py-[16.35px] !px-[49.06px] hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg web-font ${className}`}
        onClick={onClick}
      >
        {btnText}
      </Button>
    </>
  );
};

export default CustomButton;
