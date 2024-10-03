import { policies } from "../data";
import opendeskImage from "../../assets/openDeskIcon.svg";

export const iconSelector = (pathName: string) => {
  if (
    pathName === policies.termsOfUse ||
    pathName === policies.dataPrivacy ||
    pathName === policies.supportPolicy
  ) {
    return "/zVerify_logo.svg";
  }
  return opendeskImage;
};

export const getHeaderByPath = (pathName: string) => {
  let policy = "";
  if (pathName === policies.termsOfUse) {
    policy = "Terms of Use";
  }
  if (pathName === policies.dataPrivacy) {
    policy = "Data Privacy";
  }
  if (pathName === policies.supportPolicy) {
    policy = "Support Policy";
  }

  return policy;
};
