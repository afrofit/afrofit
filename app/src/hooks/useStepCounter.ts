import * as React from "react";
import { Pedometer } from "expo-sensors";
import { Subscription } from "expo-sensors/build/Pedometer";

const useStepCounter = () => {
  const [pedometerIsAvailable, setPedometerIsAvailable] =
    React.useState<boolean>(false);
  const [stepCount, setStepCount] = React.useState<number>(0);

  React.useEffect(() => {
    Pedometer.isAvailableAsync().then((result) => {
      return setPedometerIsAvailable(result);
    });
  }, []);

  let bodyMovementSubscription: Subscription | null;

  const startStepCounting = () => {
    bodyMovementSubscription = Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
      //   setAdjustedCount(Math.floor(result.steps / stepDivisor));
      return;
    });
  };

  const stopStepCounting = () => {
    bodyMovementSubscription?.remove();
    bodyMovementSubscription = null;
    console.log("counting stopped!");
  };

  return {
    pedometerIsAvailable,
    startStepCounting,
    stopStepCounting,
    setStepCount,
    stepCount,
  };
};

export default useStepCounter;
