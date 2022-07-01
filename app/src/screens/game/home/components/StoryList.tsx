import { ColorType } from "../../../../../theme/globals";
import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "../../../../../src/components/cards/Card";
import { Font } from "../../../../../src/components/font/Font";
import {
  ItemWrapper,
  LabelWrapper,
  ListWrapper,
  NumWrapper,
} from "./ActivityTodayList.styled";
import {
  CardContentWrapper,
  CardImage,
  StoryListWrapper,
  TagWrapper,
} from "./StoryList.styled";
import Spacer from "../../../../../src/components/elements/Spacer";
import { Placer } from "../../../../../src/components/elements/Placer";
import { StoryType } from "app/utils/types";

interface Props {
  stories: StoryType[] | null;
  handleNavigateToStory: (storyId: string) => void;
}

export const StoryList: React.FC<Props> = ({
  stories,
  handleNavigateToStory,
}) => {
  return (
    <StoryListWrapper showsVerticalScrollIndicator={false}>
      {!stories && (
        <Font variant={"sm2"} color="hilite_purpink">
          Oops! No stories for you to play right now.
        </Font>
      )}
      {stories &&
        stories.length &&
        stories
          .sort((a, b) => (a.order > b.order ? 1 : -1))
          .map((story, index: number) => {
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
                    <CardImage
                      source={
                        story.thumbnail
                          ? { uri: story.thumbnail }
                          : require("../../../../../assets/images/art/sample.png")
                      }
                    />
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
