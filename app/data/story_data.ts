import { StoryType } from "../types/StoryModel";

export const STORY_DATA_EXTRAS_MAP: {
  [key: string]: {
    thumbUrl: number;
    introVideo: string;
    failVideo: string;
    passVideo: string;
    successVideo: string;
    danceVideo: string;
  };
} = {
  story001: {
    thumbUrl: require("../assets/images/storythumbs/1.png"),
    introVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_1_intro.m4v?alt=media&token=d303672a-85b3-4e05-a896-ecc00cb9fff8",
    failVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_1_sad.m4v?alt=media&token=517cf6e5-d762-4460-8de3-540e5c9703ca",
    passVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_1_pass.m4v?alt=media&token=8971bc3f-922d-4942-a563-f833ad84c58a",
    successVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_1_complete.m4v?alt=media&token=254ab035-6b27-4ae5-8d99-64d20ac6a491",
    danceVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_1_dance.m4v?alt=media&token=3ec13c01-05a8-4f15-b01b-09957be9eb01",
  },
  story002: {
    thumbUrl: require("../assets/images/storythumbs/2.png"),
    introVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_2_intro.m4v?alt=media&token=8314bd7b-32f6-4b3e-9710-2a031192e361",
    failVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_2_fail.m4v?alt=media&token=dc9a03ef-a0b5-427e-a97e-1b6a6314bf3c",
    passVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_2_pass.m4v?alt=media&token=3cd9f26a-3340-49ff-b688-4df8d7c35adb",
    successVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_2_complete.m4v?alt=media&token=477fef70-e29f-4339-a564-6020ea9e7f0f",
    danceVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_2_dance.m4v?alt=media&token=f59240d5-caa2-4fbd-89eb-eeb7855969ff",
  },
  story003: {
    thumbUrl: require("../assets/images/storythumbs/3.png"),
    introVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_3_intro.m4v?alt=media&token=16058baa-92f9-49b9-8ee7-aa61dd466aa0",
    failVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_3_fail.m4v?alt=media&token=493879ed-fd0d-48de-92a0-9286d1e82bc6",
    passVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_3_pass.m4v?alt=media&token=ec44b090-8075-48dc-900b-a7eee8d4c82c",
    successVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_3_complete.m4v?alt=media&token=b09ff12b-5d92-4763-b48c-6c01a103f82e",
    danceVideo: "string",
  },
  story004: {
    thumbUrl: require("../assets/images/storythumbs/4.png"),
    introVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_4_intro.m4v?alt=media&token=63d174f0-4286-45b6-a8ff-93b3ef2ca85c",
    failVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_4_fail.m4v?alt=media&token=526e2815-71d6-4608-aa0e-3758376b09e3",
    passVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_4_pass.m4v?alt=media&token=c6b122ed-04c4-4eb1-bf5f-7bce7955fdf5",
    successVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_4_complete.m4v?alt=media&token=6e0444e7-5f53-4f77-8896-d276905282d9",
    danceVideo:
      "https://firebasestorage.googleapis.com/v0/b/afrofit-app.appspot.com/o/videos%2Fstory_4_dance.m4v?alt=media&token=ce661881-d8bf-482c-9671-d39546e4611c",
  },
};

export const STORY_DATA: StoryType[] = [
  {
    id: "story001",
    title: "Afia's Wedding",
    order: 1,
    color: "hilite_orange",
    description:
      "You must help Afia train to get in shape for her long awaited wedding!",
    difficulty: "easy",
    storySuccessText:
      "So you've made Afia's dream come true! You've not only helped her change her body and habits but you've changed her life!",
  },
  {
    id: "story002",
    title: "Frank's Return",
    order: 2,
    color: "purple_100",
    description:
      "You've got to help Frank train to be at his very best when his girlfriend returns from the reality TV show.",
    difficulty: "medium",
    storySuccessText:
      "Oh ye amazing trainer! Now Frank can focus on his deejaying knowing full well that he's covered! You go fam!",
  },
  {
    id: "story003",
    title: "Eliana's Chance",
    order: 3,
    color: "hilite_purpink",
    description:
      "You've got to help Eliana train to impress Coach Sampson of the Tornadoes so she can get into the team and start her pro football career.",
    difficulty: "hard",
    storySuccessText:
      "You are a dream come true! You've amazed everyone, especially Eliana's family. You're superb! Just super!",
  },
  {
    id: "story004",
    title: "AJ's Big Night",
    order: 4,
    color: "hilite_pink",
    description:
      "You must help AJ train to get into proper shape for his fight against Gregg. He will need to bulk up by 25kg. Good luck!",
    difficulty: "super hard",
    storySuccessText:
      "You are a champ! You are an amazing trainer! Here's to you staying on top! You cleared everyone's doubts! R-E-S-P-E-C-T!",
  },
];
