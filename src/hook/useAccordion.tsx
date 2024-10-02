import AccordionContent from "../components/AccordionContent";
import type { CollapseProps } from "antd";
import { useMobileView } from "./useMobileView";

export const useAccordion = () => {
  const isMobile = useMobileView();
  const genExtra = (url: string) => (
    <>
      {!isMobile ? (
        <div className="flex justify-center items-center gap-x-3 lg:mt-0">
          <div className=" text-[15px] lg:text-[30px] font-normal leading-[25px] lg:leading-[50px] text-white">
            <img src={url} alt="Project logo" className="" />
          </div>
        </div>
      ) : null}
    </>
  );

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "zVerify",
      extra: genExtra("/zVerify_logo.svg"),
      children: (
        <AccordionContent
          content="
            zVerify is a versatile OTP verification solution designed to provide businesses with secure, multi-channel authentication services. It features a comprehensive API for generating, verifying, and revoking OTPs, ensuring robust user security across SMS, voice calls, WhatsApp, RCS, and email. Additionally, zVerify offers an Admin Dashboard that enables businesses to monitor transactions, track OTP delivery, and analyze usage metrics in real-time.
With its seamless integration and powerful monitoring capabilities, zVerify helps businesses enhance security, streamline customer interactions, and ensure a smooth verification experience.
          "
          image="/zVerify.png"
          details={[
            {
              title: "Industry",
              desc: "All Businesses (SMEs)",
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
      extra: genExtra("/Baya_logo.svg"),
      children: (
        <AccordionContent
          content="
        Baya is an all-in-one estate management solution tailored for modern residential communities. It simplifies the management of estate dues, enables utility vending, facilitates visitor booking, and includes an SOS emergency feature for enhanced security. The solution is divided into three main components:
      "
          list={[
            {
              T: "Resident App",
              des: "Empowers residents to manage their estate dues, buy utilities, book visitors, and access emergency services with ease.",
            },
            {
              T: "Security Gate App",
              des: "Optimizes security operations by providing a streamlined platform for visitor verification, gate passes, and real-time resident alerts.",
            },
            {
              T: "Facility Manager's Dashboard",
              des: "Centralizes estate management, offering tools for tracking payments, monitoring utility consumption, managing visitor logs, and handling resident communications.",
            },
          ]}
          others="Together, Baya offers a cohesive platform that fosters efficient estate management and an improved living experience for all community members."
          image="/baya-1.png"
          details={[
            {
              title: "Industry",
              desc: "Real Estate",
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
      extra: genExtra("/Nottie_logo.svg"),

      children: (
        <AccordionContent
          image="/nottie-1.png"
          content="
        Nottie.net is an advanced transaction alert solution designed for financial institutions to provide real-time notifications and enhance customer engagement. It offers seamless integration with banking systems to generate transaction alerts and deliver them to customers through multiple channels, including SMS, email, WhatsApp, and other social media platforms.
The solution includes an Analytic Dashboard that allows financial institutions to monitor alert delivery, track customer responses, and ensure optimal performance of the alert services. With Nottie.net, banks can maintain transparency, improve customer satisfaction, and ensure compliance with regulatory requirements for transaction notifications.
      "
          details={[
            {
              title: "Industry",
              desc: "Financial Institution (Banks)",
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
      extra: genExtra("/Bubo_logo.svg"),
      children: (
        <AccordionContent
          image="/Bubo_.png"
          content="
        Bubo is a comprehensive financial accounting solution designed to streamline business finance management. It offers a suite of features, including financial accounting, invoicing, taxation reporting, excess bank charge tracking, and bookkeeping. With Bubo, businesses can efficiently manage their financial operations, ensure compliance with tax regulations, and gain insights into their financial health.
The solution is ideal for small to medium-sized enterprises looking to automate their accounting processes and optimize financial oversight with accurate reporting and easy-to-use tools.
      "
          details={[
            {
              title: "Industry",
              desc: "All Businesses (SMEs, Personal)",
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
