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
