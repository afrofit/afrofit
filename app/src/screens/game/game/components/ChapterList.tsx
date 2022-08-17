import * as React from "react";
import { ListWrapper } from "./ChapterList.styled";
import { ChapterItem } from "./ChapterItem";
import { Font } from "../../../../../src/components/font/Font";
import { calculatePercentageCompleted } from "../../../../../utils/calculators";
import { ChapterPlayedType } from "../../../../../../app/types/ChapterModel";

interface Props {
  currentChapters: ChapterPlayedType[] | null;
  onTapCell: (chapterId: string) => void;
  lastCompletedChapter: number;
}

export const ChapterList: React.FC<Props> = ({
  currentChapters,
  onTapCell,
  lastCompletedChapter,
}) => {
  if (!currentChapters || currentChapters.length < 1)
    return (
      <Font variant="p">There are presently no chapters for this story!</Font>
    );
  return (
    <ListWrapper>
      {currentChapters.map((chapter: ChapterPlayedType, index: number) => {
        return (
          <ChapterItem
            key={chapter.id}
            outlined={false}
            isSquare
            first={index === 0}
            last={index + 1 === currentChapters.length}
            title={`Chapter ${chapter.order}`}
            value={
              chapter.userSteps > 0
                ? calculatePercentageCompleted(
                    chapter.userSteps,
                    chapter.targetSteps
                  )
                : 0
            }
            disabled={lastCompletedChapter !== chapter.order}
            onPress={() => onTapCell(chapter.id)}
          />
        );
      })}
    </ListWrapper>
  );
};
