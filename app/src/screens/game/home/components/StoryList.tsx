import { ColorType } from "../../../../../theme/globals";
import * as React from "react";
import { Card } from "../../../../../src/components/cards/Card";
import { Font } from "../../../../../src/components/font/Font";

import {
  CardContentWrapper,
  CardImage,
  StoryListWrapper,
  TagWrapper,
} from "./StoryList.styled";
import Spacer from "../../../../../src/components/elements/Spacer";
import { Placer } from "../../../../../src/components/elements/Placer";

import { STORYTHUMBS_MAP, STORY_DATA } from "../../../../../data/story_data";

interface Props {
  handleNavigateToStory: (storyId: string) => void;
}

export const StoryList: React.FC<Props> = ({ handleNavigateToStory }) => {
  return (
    <StoryListWrapper showsVerticalScrollIndicator={false}>
      {STORY_DATA.sort((a, b) => (a.order > b.order ? 1 : -1)).map((story) => {
        const imageSource = STORYTHUMBS_MAP[story.order].url;
        return (
          <Card
            marginBottom={10}
            disablePadding
            key={story.id}
            outlined={false}
            bgColor={story.color as ColorType}
            onPress={() => handleNavigateToStory(story.id)}
          >
            <CardContentWrapper>
              <Placer left={-5}>
                <CardImage source={imageSource} />
              </Placer>
              <TagWrapper>
                <Font variant="sm2" color="lightblue" caps>
                  {story.difficulty}
                </Font>
              </TagWrapper>
              <Spacer h={10} />
              <Font variant="h3" color="dark">
                {story.title}
              </Font>
            </CardContentWrapper>
          </Card>
        );
      })}
    </StoryListWrapper>
  );
};
