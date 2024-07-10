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
  const primaryStyle = "!bg-[#E15B3B] !text-white !text-xl !font-medium";
  const secondaryStyle = "!bg-white !text-[#E15B3B] !text-xl !font-medium";

  const btnStyle = color === "primary" ? primaryStyle : secondaryStyle;

  return (
    <>
      <Button
        className={`${btnStyle} !w-[201.12px] !h-[53.71px] !border !border-[#E15B3B] !rounded-full !py-[16.35px] !px-[49.06px] hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-lg ${className}`}
        onClick={onClick}
      >
        {btnText}
      </Button>
    </>
  );
};

export default CustomButton;
