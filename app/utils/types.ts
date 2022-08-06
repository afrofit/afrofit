export type ChapterType = {
  audio_instruction: string;
  instruction: string;
  order: number;
  story_id: string;
  target_steps: number;
  id: string;
};

export type PlayedChapterType = ChapterType & {
  user_steps?: number;
  user_time_ms?: number;
};

export type PlayedChapterRawType = {
  chapter_id: string;
  story_id: string;
  user_id: string;
  user_steps: number;
  user_time: number;
};
