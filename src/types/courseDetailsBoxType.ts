import { SvgIconType } from "./IconType";
import { Uuid } from "./uuidType";

export type CourseDetailsBox = {
  Icon: SvgIconType;
  value: string | number;
  id: Uuid;
};
