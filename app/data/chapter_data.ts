import { ChapterType } from "../types/ChapterModel";
import {
  CHAPTER1_AUDIO_MAP,
  CHAPTER_1_DATA,
} from "./chapters_data/chapter1_data";
import {
  CHAPTER2_AUDIO_MAP,
  CHAPTER_2_DATA,
} from "./chapters_data/chapter2_data";
import {
  CHAPTER3_AUDIO_MAP,
  CHAPTER_3_DATA,
} from "./chapters_data/chapter3_data";
import {
  CHAPTER4_AUDIO_MAP,
  CHAPTER_4_DATA,
} from "./chapters_data/chapter4_data";

export const CHAPTER_AUDIO_MAP: { [key: string]: { url: number } } = {
  ...CHAPTER1_AUDIO_MAP,
  ...CHAPTER2_AUDIO_MAP,
  ...CHAPTER3_AUDIO_MAP,
  ...CHAPTER4_AUDIO_MAP,
};

export const CHAPTER_DATA: ChapterType[] = [
  ...CHAPTER_1_DATA,
  ...CHAPTER_2_DATA,
  ...CHAPTER_3_DATA,
  ...CHAPTER_4_DATA,
];
