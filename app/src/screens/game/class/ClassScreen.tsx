import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { Screen } from "../../../../src/components/screen/Screen";
import * as React from "react";
import { Font } from "../../../../src/components/font/Font";
import { Card } from "../../../../src/components/cards/Card";
import { useDispatch } from "react-redux";
import { getEvents } from "../../../../store/reducers/events/thunks/getAll-events.thunk";
import { useSelector } from "react-redux";
import { getAllEvents } from "../../../../store/reducers/events/events.slice";
import Spacer from "../../../../src/components/elements/Spacer";
import { ClassList } from "./components/ClassListing";
import { getAllClasses } from "../../../../../app/store/reducers/class/class.slice";
import { getClasses } from "../../../../../app/store/reducers/class/thunks/getAll-class.thunk";

export const ClassScreen = () => {
  const dispatch = useDispatch();
  const allClass = useSelector(getAllClasses);

  React.useEffect(() => {
    dispatch(getClasses());
  }, []);

  return (
    <>
      <SolidBackground />
        <Spacer h={10} />
        <ClassList allClass={allClass} />
    </>
  );
};
