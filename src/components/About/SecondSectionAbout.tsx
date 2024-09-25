const SecondSectionAbout = () => {
  return (
    <>
      <div className="mt-6 lg:hidden">
        <img
          src="/about-image.svg"
          alt="Caroul image"
          className="w-full sm:!h-[250px] lg:h-full"
        />
      </div>

      <div className="mt-[100px] hidden lg:block w-full relative">
        <img
          src="/about-image.svg"
          alt="Caroul image"
          className="max-h-[600px] w-full object-fill"
        />
      </div>
    </>
  );
};

export default SecondSectionAbout;
