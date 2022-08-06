import { ChapterType } from "../../types/ChapterModel";

export const CHAPTER1_AUDIO_MAP: { [key: string]: { url: number } } = {
  story001_chapter1: {
    url: require("../../assets/audio/chapters/1/story001_chapter1.mp3"),
  },
  story001_chapter2: {
    url: require("../../assets/audio/chapters/1/story001_chapter2.mp3"),
  },
  story001_chapter3: {
    url: require("../../assets/audio/chapters/1/story001_chapter3.mp3"),
  },
  story001_chapter4: {
    url: require("../../assets/audio/chapters/1/story001_chapter4.mp3"),
  },
  story001_chapter5: {
    url: require("../../assets/audio/chapters/1/story001_chapter5.mp3"),
  },
  story001_chapter6: {
    url: require("../../assets/audio/chapters/1/story001_chapter6.mp3"),
  },
  story001_chapter7: {
    url: require("../../assets/audio/chapters/1/story001_chapter7.mp3"),
  },
  story001_chapter8: {
    url: require("../../assets/audio/chapters/1/story001_chapter8.mp3"),
  },
  story001_chapter9: {
    url: require("../../assets/audio/chapters/1/story001_chapter9.mp3"),
  },
  story001_chapter10: {
    url: require("../../assets/audio/chapters/1/story001_chapter10.mp3"),
  },
};

export const CHAPTER_1_DATA: ChapterType[] = [
  {
    id: "story001_chapter1",
    order: 1,
    storyId: "story001",
    targetSteps: 500,
  },
  {
    id: "story001_chapter2",
    order: 2,
    storyId: "story001",
    targetSteps: 550,
  },
  {
    id: "story001_chapter3",
    order: 3,
    storyId: "story001",
    targetSteps: 600,
  },
  {
    id: "story001_chapter4",
    order: 4,
    storyId: "story004",
    targetSteps: 700,
  },
  {
    id: "story001_chapter5",
    order: 5,
    storyId: "story001",
    targetSteps: 800,
  },
  {
    id: "story001_chapter6",
    order: 6,
    storyId: "story001",
    targetSteps: 900,
  },
  {
    id: "story001_chapter7",
    order: 7,
    storyId: "story001",
    targetSteps: 950,
  },
  {
    id: "story001_chapter8",
    order: 8,
    storyId: "story001",
    targetSteps: 1050,
  },
  {
    id: "story001_chapter9",
    order: 9,
    storyId: "story001",
    targetSteps: 1050,
  },
  {
    id: "story001_chapter10",
    order: 10,
    storyId: "story001",
    targetSteps: 1250,
  },
];
