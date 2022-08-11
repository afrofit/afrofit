import { ColorType } from "./../theme/globals";
import { DifficultyType } from "./Difficulty";

export type StoryType = {
  id: string;
  color: ColorType;
  description: string;
  order: number;
  storySuccessText: string;
  title: string;
  difficulty: DifficultyType;
};

export type StorySummaryType = Pick<
  StoryType,
  "id" | "color" | "difficulty" | "order" | "title"
>;

export type PlayedStoryType = StoryType & {
  totalTargetSteps: number;
  userSteps: number;
  userTime: number;
  playedStoryId: string;
  lastChapterCompleted: number;
};
