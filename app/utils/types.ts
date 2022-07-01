export type StoryType = {
  color: string;
  description: string;
  order: number;
  slug: string;
  story_success_text: string;
  title: string;
  id: string;
  thumbnail: string;
  difficulty: string;
  story_id: string;
  intro_video: string;
  intro_video_alt: string;
};

export type PlayedStoryType = StoryType & {
  totalTargetSteps: number;
  userSteps: number;
};

export type ChapterType = {
  audio_instruction: string;
  instruction: string;
  order: number;
  story_id: string;
  target_steps: number;
};
