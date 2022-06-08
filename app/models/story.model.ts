import { ThumbnailModel } from './thumbnail.model';
import { ChapterModel } from './chapter.model';

export type StoryModel = {
    id: string;
    name: string;
    description: string;
    slug: string;
    chapters: ChapterModel[];
    story_success_text: string;
    order: number;
    video_finish: string;
    video_intro: string;
    video_intro_alt: string;
    thumnbnail: ThumbnailModel
}