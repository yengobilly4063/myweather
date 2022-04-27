import { useTemperatureContext } from "../../context/temperatureContext";
import { MetricOptions } from "../types/metrics";

const useTemperatureMetric = () => {
  const { metric, setMetric } = useTemperatureContext();

  const handleToggleMetric = () => {
    switch (metric) {
      case MetricOptions.FAR:
        setMetric(MetricOptions.CEL);
        return;
      case MetricOptions.CEL:
        return setMetric(MetricOptions.FAR);
      default:
        return;
    }
  };

  return { metric, setMetric, handleToggleMetric };
};

export default useTemperatureMetric;
