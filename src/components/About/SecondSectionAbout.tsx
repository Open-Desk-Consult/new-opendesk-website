const SecondSectionAbout = () => {
  return (
    <>
      <div className="mt-6 lg:hidden">
        <img
          src="/Team image.jpg"
          alt="Caroul image"
          className="w-full sm:!h-[250px] lg:h-full"
        />
      </div>

      <div className="mt-[100px] hidden lg:block w-full relative">
        <img
          src="/Team image.jpg"
          alt="Caroul image"
          className="w-full h-[600px] !bg-contain"
        />
      </div>
    </>
  );
};

export default SecondSectionAbout;
