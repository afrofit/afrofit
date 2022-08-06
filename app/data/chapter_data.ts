import { ChapterType } from "../types/ChapterModel";
import { CHAPTER_1_DATA } from "./chapters_data/chapter1_data";
import { CHAPTER_2_DATA } from "./chapters_data/chapter2_data";
import { CHAPTER_3_DATA } from "./chapters_data/chapter3_data";
import { CHAPTER_4_DATA } from "./chapters_data/chapter4_data";

export const CHAPTER_AUDIO_MAP: { [key: string]: { url: number } } = {
  story001_chapter1: {
    url: require("../assets/audio/chapters/1/story001_chapter1.mp3"),
  },
};

export const CHAPTER_DATA: ChapterType[] = [
  ...CHAPTER_1_DATA,
  ...CHAPTER_2_DATA,
  ...CHAPTER_3_DATA,
  ...CHAPTER_4_DATA,
];
