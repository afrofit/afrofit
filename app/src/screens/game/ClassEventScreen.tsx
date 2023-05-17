import { SolidBackground } from "../../../../app/src/components/screen/SolidBackground";
import * as React from "react";
import { EventScreen } from "../../../src/screens/game/event/EventScreen";
import { Font } from "../../../../app/src/components/font/Font";
import { Screen } from "../../../../app/src/components/screen/Screen";
import Spacer from "../../../../app/src/components/elements/Spacer";
import { ClassScreen } from "../../../../app/src/screens/game/class/ClassScreen";
import { EventClassOpacity, EventClassview } from "./event/styled";

export const ClassEventScreen = () => {
  const [showEvent, setShowEvent] = React.useState(true);

  return (
    <>
      <SolidBackground />
      <Screen>
      <Spacer h={10}/>

        <EventClassview>
          <EventClassOpacity onPress={() => setShowEvent(true)}>
            <Font
              variant={showEvent ? "h4":"p"}
              align="center"
              color={showEvent ? "hilite_purpink" : "lightblue"}
            >
              Events
            </Font>
          </EventClassOpacity>
          <EventClassOpacity onPress={() => setShowEvent(false)}>
            <Font
              variant={showEvent ? "p":"h4"}
              align="center"
              color={showEvent ? "lightblue" : "hilite_purpink"}
            >
              Classes
            </Font>
          </EventClassOpacity>
        </EventClassview>
        {showEvent === true ? <EventScreen /> : <ClassScreen />}
      </Screen>
    </>
  );
};
