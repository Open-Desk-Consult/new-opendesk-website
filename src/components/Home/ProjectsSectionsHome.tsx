import { Collapse, ConfigProvider } from "antd";
import { useAccordion } from "../../hook/useAccordion";

const ProjectsSectionsHome = () => {
  const { items } = useAccordion();
  return (
    <>
      <div className="!mt-[140px] lg:!px-[64px]">
        <div className="text-[25px] lg:text-[35px] leading-4 lg:leading-6 font-bold text-[#CE5A3B] mb-4 lg:mb-10">
          Projects{" "}
        </div>
        <div className="text-[28px] lg:text-[40px] leading-[35px] font-bold text-[#3A5B89] !max-w-[650px]">
          There are many industries we’ve solve digital solution for{" "}
        </div>
      </div>
      <div className="!w-full mt-12">
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Space Grotesk",
            },
            components: {
              Collapse: { contentBg: "#142A49", headerBg: "#142A49" },
            },
          }}
        >
          <Collapse
            defaultActiveKey={["1"]}
            onChange={() => {}}
            items={items}
            accordion
            className="!rounded-lg"
          />
        </ConfigProvider>
      </div>
    </>
  );
};

export default ProjectsSectionsHome;
