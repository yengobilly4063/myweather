import useTemperatureMetric from "../../../shared/hooks/useTemperatureMetric";
import { MetricOptions } from "../../../shared/types/metrics";

const useTemperature = (value: number) => {
  const BASETEMP = 273.15;
  const { metric } = useTemperatureMetric();

  const getTemp = () => {
    switch (metric) {
      case MetricOptions.CEL:
        return Math.ceil(value - BASETEMP);
      case MetricOptions.FAR:
        return Math.ceil((value - BASETEMP) * (9 / 5) + 32);
      default:
        return value;
    }
  };

  const temp = getTemp();

  return { temp, metric };
};

export default useTemperature;
