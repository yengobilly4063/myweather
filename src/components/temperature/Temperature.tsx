import React, { FC } from "react";
import { MetricOptions } from "../../shared/types/metrics";
import useTemperature from "./hooks/useTemperature";

type Props = {
  value?: number;
};

const Temperature: FC<Props> = ({ value = 0 }) => {
  const { temp, metric } = useTemperature(value);
  const getTemperatureText = () => {
    switch (metric) {
      case MetricOptions.FAR:
        return <span>{temp}F</span>;
      case MetricOptions.CEL:
        return (
          <span>
            {temp}
            <sup>o</sup>C
          </span>
        );
      default:
        return null;
    }
  };
  return <>{getTemperatureText()}</>;
};

export default Temperature;
