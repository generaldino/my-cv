import React from "react";
import { IconType } from "react-icons";
import { GrLinkedin, GrTwitter, GrGithub } from "react-icons/gr";

const IconComponents: { [key: string]: IconType } = {
  GrLinkedin,
  GrTwitter,
  GrGithub,
};

interface CategoryIconProps {
  iconName: string;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ iconName }) => {
  const Icon = IconComponents[iconName];
  if (!Icon) return null;

  return <Icon />;
};

export default CategoryIcon;
