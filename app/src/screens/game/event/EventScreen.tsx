import { SolidBackground } from "../../../../src/components/screen/SolidBackground";
import { Screen } from "../../../../src/components/screen/Screen";
import * as React from "react";
import { Font } from "../../../../src/components/font/Font";
import { Card } from "../../../../src/components/cards/Card";
import { useDispatch } from "react-redux";
import { getEvents } from "../../../../store/reducers/events/thunks/getAll-events.thunk";
import { useSelector } from "react-redux";
import { getAllEvents } from "../../../../store/reducers/events/events.slice";
import { EventList } from "./components/EventListing";
import Spacer from "../../../../src/components/elements/Spacer";

export const EventScreen = () => {
  const dispatch = useDispatch();
  const allEvent = useSelector(getAllEvents);

  React.useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <>
      <SolidBackground />
        <Spacer h={10} />
        <EventList allevent={allEvent} />
    </>
  );
};
