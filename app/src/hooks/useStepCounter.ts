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
    return (bodyMovementSubscription = Pedometer.watchStepCount((result) => {
      return setStepCount(Math.floor(result.steps * 50));
    }));
  };

  const stopStepCounting = () => {
    return bodyMovementSubscription && bodyMovementSubscription.remove();
    // bodyMovementSubscription = null;
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
