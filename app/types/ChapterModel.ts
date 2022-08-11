export type ChapterType = {
  id: string;
  order: number;
  storyId: string;
  targetSteps: number;
};

export type PlayedChapterType = {
  chapterId: string;
  userSteps?: number;
  userTime?: number;
};

export type ChapterPlayedType = {
  id: string;
  order: number;
  storyId: string;
  targetSteps: number;
  userSteps: number;
  userTime: number;
};
