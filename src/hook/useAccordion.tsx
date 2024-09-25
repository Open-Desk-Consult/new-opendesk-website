import AccordionContent from "../components/AccordionContent";
import type { CollapseProps } from "antd";

export const useAccordion = () => {
  const genExtra = (year: string) => (
    <>
      <div className="flex justify-center items-center gap-x-3 mt-3 lg:mt-0">
        <div className="w-10 border-b-[1px] border-white"></div>
        <div className=" text-[15px] lg:text-[30px] font-normal leading-[25px] lg:leading-[50px] text-white">
          {year}
        </div>
      </div>
    </>
  );

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "zVerify",
      extra: genExtra("2020"),
      children: (
        <AccordionContent
          content="
            MICA is a cutting-edge mobile app for hailing cabs, delivering a premium
            experience for both riders and drivers. Riders enjoy seamless, luxurious
            journeys, while drivers benefit from enhanced tools that streamline
            operations and improve efficiency. MiCa redefines the cab-hailing
            experience with a focus on quality, convenience, and excellence for all
            users.
          "
          image="/zVerify.png"
          details={[
            {
              title: "Project scope",
              desc: "Design and development",
              icon: "/maze.svg",
            },
            {
              title: "Industry",
              desc: "Transportation technology",
              icon: "/building-06.svg",
            },
          ]}
        />
      ),
      showArrow: false,
    },
    {
      key: "2",
      label: "Baya",
      extra: genExtra("2023"),
      children: (
        <AccordionContent
          content="
        MICA is a cutting-edge mobile app for hailing cabs, delivering a premium
        experience for both riders and drivers. Riders enjoy seamless, luxurious
        journeys, while drivers benefit from enhanced tools that streamline
        operations and improve efficiency. MiCa redefines the cab-hailing
        experience with a focus on quality, convenience, and excellence for all
        users.
      "
          // image="/baya.svg"
          image="/baya-1.png"
          details={[
            {
              title: "Project scope",
              desc: "Design and development",
              icon: "/maze.svg",
            },
            {
              title: "Industry",
              desc: "Estate management technology",
              icon: "/building-06.svg",
            },
          ]}
        />
      ),
      showArrow: false,
    },
    {
      key: "3",
      label: "Nottie",
      extra: genExtra("2021"),

      children: (
        <AccordionContent
          // image="/nottie.svg"
          image="/nottie-1.png"
          content="
        MICA is a cutting-edge mobile app for hailing cabs, delivering a premium
        experience for both riders and drivers. Riders enjoy seamless, luxurious
        journeys, while drivers benefit from enhanced tools that streamline
        operations and improve efficiency. MiCa redefines the cab-hailing
        experience with a focus on quality, convenience, and excellence for all
        users.
      "
          details={[
            {
              title: "Project scope",
              desc: "Design and development",
              icon: "/maze.svg",
            },
            {
              title: "Industry",
              desc: "Transportation technology",
              icon: "/building-06.svg",
            },
          ]}
        />
      ),
      showArrow: false,
    },

    {
      key: "4",
      label: "Bubo",
      extra: genExtra("2020"),
      children: (
        <AccordionContent
          content="
        MICA is a cutting-edge mobile app for hailing cabs, delivering a premium
        experience for both riders and drivers. Riders enjoy seamless, luxurious
        journeys, while drivers benefit from enhanced tools that streamline
        operations and improve efficiency. MiCa redefines the cab-hailing
        experience with a focus on quality, convenience, and excellence for all
        users.
      "
          details={[
            {
              title: "Project scope",
              desc: "Design and development",
              icon: "/maze.svg",
            },
            {
              title: "Industry",
              desc: "Transportation technology",
              icon: "/building-06.svg",
            },
          ]}
        />
      ),
      showArrow: false,
    },
  ];
  return { items };
};
