import { useNavigate } from "react-router-dom";
export const useCustomNavigation = () => {
  const navigate = useNavigate();
  const onClick = (link: string) => {
    navigate(link);
  };
  return onClick;
};
