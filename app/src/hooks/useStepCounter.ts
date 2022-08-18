import * as React from "react";
import { Pedometer } from "expo-sensors";
import { Subscription } from "expo-sensors/build/Pedometer";

import useUnmount from "../../../app/src/hooks/useUnmount";

const useStepCounter = () => {
  const [pedometerIsAvailable, setPedometerIsAvailable] =
    React.useState<boolean>(false);
  const [stepCount, setStepCount] = React.useState<number>(0);

  React.useEffect(() => {
    Pedometer.isAvailableAsync().then(
      (result) => {
        return setPedometerIsAvailable(result);
      },
      (error) => {
        setStepCount(0);
        setPedometerIsAvailable(false);
        console.error("Pedometer error", error);
      }
    );
  }, []);

  let bodyMovementSubscription: Subscription | null;

  const startStepCounting = () => {
    bodyMovementSubscription?.remove();
    bodyMovementSubscription = null;
    return (bodyMovementSubscription = Pedometer.watchStepCount((result) => {
      return setStepCount(Math.floor(result.steps / 10));
    }));
  };

  const stopStepCounting = () => {
    bodyMovementSubscription?.remove();
    return (bodyMovementSubscription = null);
  };

  useUnmount(() => {
    return stopStepCounting();
  });

  return {
    pedometerIsAvailable,
    startStepCounting,
    stopStepCounting,
    setStepCount,
    stepCount,
  };
};

export default useStepCounter;
