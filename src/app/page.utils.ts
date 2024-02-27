import { Tool } from "@/data/resume-data.types";

export interface GroupedTools {
  [categoryId: string]: Tool[];
}

export const groupToolsByCategory = (tools: Tool[]): GroupedTools => {
  return tools.reduce((acc: GroupedTools, tool: Tool) => {
    const categoryId = tool.categoryId;
    if (!acc[categoryId]) {
      acc[categoryId] = [];
    }
    acc[categoryId].push(tool);
    return acc;
  }, {});
};
