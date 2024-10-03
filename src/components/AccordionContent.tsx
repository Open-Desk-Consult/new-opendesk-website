interface IProps {
  content: string;
  details: { title: string; icon: string; desc: string }[];
  heading?: string;
  image?: string;
  year?: string;
  list?: { T: string; des: string }[];
  others?: string;
  termsOfService?: string;
  dataPrivacy?: string;
  supportPolicy?: string;
}
const AccordionContent = ({
  content,
  details,
  image,
  others,
  list,
  termsOfService,
  dataPrivacy,
  supportPolicy,
}: IProps) => {
  return (
    <>
      <div className="lg:hidden flex-col justify-between items-start">
        <div className="mb-5">
          <img
            src={image}
            alt="project image"
            className="w-[327px] max-h-[172px] rounded-[20px] bg-contain object-fill"
          />{" "}
        </div>
        <div className="w-full">
          <div className="border-b-2 border-white text-white text-[14.4px] font-normal leading-[24px] pb-3 mb-2 text-left">
            {content}{" "}
            {termsOfService && (
              <a href="/zverify/customer/terms-of-use" target="_blank">
                {termsOfService} |
              </a>
            )}
            {dataPrivacy && (
              <>
                {" "}
                <a href="/zverify/customer/data-privacy" target="_blank">
                  {dataPrivacy} |{" "}
                </a>
              </>
            )}
            {supportPolicy && (
              <>
                {" "}
                <a href="/zverify/customer/support-policy" target="_blank">
                  {" "}
                  {supportPolicy}
                </a>
              </>
            )}
            {list && (
              <>
                {list.map((ls) => (
                  <div className="mt-2 mb-2">
                    <strong>{`${ls.T}: `}</strong>
                    {ls.des}
                  </div>
                ))}
              </>
            )}
            {others && others}
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
            {termsOfService && (
              <a href="/zverify/customer/terms-of-use">{termsOfService} |</a>
            )}
            {dataPrivacy && (
              <>
                {" "}
                <a href="/zverify/customer/data-privacy">{dataPrivacy} |</a>
              </>
            )}

            {supportPolicy && (
              <a href="/zverify/customer/support-policy">{supportPolicy}</a>
            )}
            {list && (
              <>
                {list.map((ls) => (
                  <div className="mt-2 mb-2">
                    <strong>{`${ls.T}: `}</strong>
                    {ls.des}
                  </div>
                ))}
              </>
            )}
            {others && others}
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
            className="!w-[480px] !max-h-[328px] rounded-[20px] bg-contain"
          />{" "}
        </div>
      </div>
    </>
  );
};

export default AccordionContent;
