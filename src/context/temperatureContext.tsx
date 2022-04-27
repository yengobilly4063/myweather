import { createContext, useContext, useState } from "react";
import { Metric, MetricOptions } from "../shared/types/metrics";

export const TemperatureContext = createContext({
  metric: MetricOptions.FAR as Metric,
  setMetric: (metric: Metric) => {},
});

type Props = {
  children?: React.ReactNode;
};

export const useTemperatureContext = () => useContext(TemperatureContext);

const TemperatureContextProvider = ({ children }: Props) => {
  const [metric, setMetric] = useState<Metric>(MetricOptions.CEL);

  return <TemperatureContext.Provider value={{ metric, setMetric }}>{children}</TemperatureContext.Provider>;
};

export default TemperatureContextProvider;
