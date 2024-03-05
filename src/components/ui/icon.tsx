import React from "react";
import { IconType } from "react-icons";
import { GrLinkedin, GrTwitter, GrGithub } from "react-icons/gr";
import {
  LuCode2,
  LuPalette,
  LuDatabase,
  LuLineChart,
  LuTerminalSquare,
} from "react-icons/lu";

const IconComponents: { [key: string]: IconType } = {
  GrLinkedin,
  GrTwitter,
  GrGithub,
  LuCode2,
  LuTerminalSquare,
  LuPalette,
  LuDatabase,
  LuLineChart,
};

interface CategoryIconProps {
  iconName: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ iconName }) => {
  const Icon = IconComponents[iconName];
  if (!Icon) return null;

  return <Icon />;
};
