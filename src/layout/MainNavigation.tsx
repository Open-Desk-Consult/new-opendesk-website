import { useState } from "react";
import { Outlet } from "react-router-dom";
// import type { MenuProps } from "antd";
import { Drawer } from "antd";
import opendeskImage from "../assets/openDeskIcon.svg";
import cancelIcon from "../../public/xIcon.svg";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useMobileView } from "../hook/useMobileView";
import burgerMenuIcon from "../../public/burgermenuIcon.svg";
import { NavLink } from "react-router-dom";
import { navItems } from "../data";

// type MenuItem = Required<MenuProps>["items"][number];
// const items: MenuItem[] = [
//   {
//     label: "Home",
//     key: "/",
//   },

//   {
//     label: "About us",
//     key: "/about-us",
//   },
//   {
//     label: "Services",
//     key: "/services",
//   },
// ];

const MainNavigation = () => {
  // const [current, setCurrent] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMobileView();

  // const onClick: MenuProps["onClick"] = (e) => {
  //   navigate(e.key);
  //   setCurrent(e.key);
  // };

  const onClick = (link: string) => {
    navigate(link);
    // setCurrent(link);
  };

  return (
    <>
      {!isMobile ? (
        <div className="hidden lg:block">
          <div className="!w-full flex items-center justify-between !pt-[18px] !px-[64px] z-50 fixed">
            <div>
              <img src={opendeskImage} alt="open desk image" />
            </div>

            <div className="flex gap-x-4 items-center justify-center">
              <div className="flex items-center justify-center gap-x-8">
                {navItems?.map((nav) => (
                  <NavLink
                    to={nav?.key}
                    key={nav?.key}
                    onClick={() => {
                      onClick(nav.key);
                    }}
                    className="!font-[500] !text-xl !leading-[25.52px] !text-black main-nav"
                  >
                    {nav.label}
                  </NavLink>
                ))}
                {/* <Menu
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                  className="!font-[500] !text-xl !leading-[25.52px] !text-black"
                  defaultSelectedKeys={[current]}
                /> */}
              </div>
              <div className="ml-5">
                <CustomButton btnText="Contact us" onClick={() => {}} />
              </div>
            </div>
          </div>

          <div className="pt-[18px] w-screen h-screen overflow-y-scroll hide-scrollbar">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="z-50 mt-4 p-3">
          <Drawer
            closable={true}
            onClose={() => {
              setOpenMenu(!openMenu);
            }}
            open={openMenu}
            key={"menu"}
            placement={"top"}
            className="!rounded-tl-lg !rounded-tr-lg overflow-y-auto pb-5"
            height="100vh"
          >
            <div className="!w-full !h-[100vh] !bg-[#E15B3B] text-center absolute top-0 left-0 right-0 flex flex-col items-center justify-center">
              {navItems?.map((nav) => (
                <NavLink
                  to={nav?.key}
                  key={nav?.key}
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                  className="font-bold text-[40px] !text-white mb-6 !border-b-white mobile-nav"
                >
                  {nav.label}
                </NavLink>
              ))}
              <button
                className="mt-4"
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <img src={cancelIcon} alt="cancel button" />
              </button>
            </div>
          </Drawer>

          {!openMenu && (
            <div className="!w-full flex items-center justify-between !px-[16px] !py-4 border rounded-[16.5px] border-gray-500">
              <div>
                <img
                  src={opendeskImage}
                  alt="open desk image"
                  className="w-[132px] h-[24px]"
                />
              </div>

              <button
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
              >
                <img src={burgerMenuIcon} />
              </button>
            </div>
          )}

          <div className="pt-[18px] w-screen h-screen overflow-y-scroll hide-scrollbar">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MainNavigation;
