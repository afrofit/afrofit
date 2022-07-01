import * as React from "react";
import { ListWrapper } from "./ChapterList.styled";
import { ChapterItem } from "./ChapterItem";
import { PlayedChapterType } from "../../../../../utils/types";
import { Font } from "../../../../../src/components/font/Font";
import { calculatePercentageCompleted } from "../../../../../utils/calculators";

interface Props {
  currentChapters: PlayedChapterType[] | null;
  onTapCell: (chapterId: string) => void;
}

export const ChapterList: React.FC<Props> = ({
  currentChapters,
  onTapCell,
}) => {
  if (!currentChapters || currentChapters.length < 1)
    return (
      <Font variant="p">There are presently no chapters for this story!</Font>
    );
  return (
    <ListWrapper>
      {currentChapters.map((chapter: PlayedChapterType, index: number) => {
        return (
          <ChapterItem
            key={chapter.id}
            outlined={false}
            isSquare
            first={index === 0}
            last={index + 1 === currentChapters.length}
            title={`Chapter ${index + 1}`}
            value={
              chapter.user_steps
                ? calculatePercentageCompleted(
                    chapter.user_steps,
                    chapter.target_steps
                  )
                : 0
            }
            onPress={() => onTapCell(chapter.id)}
          />
        );
      })}
    </ListWrapper>
  );
};
