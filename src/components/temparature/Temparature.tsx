import React, { FC } from "react";

type Props = {
  value?: number;
};

const Temparature: FC<Props> = ({ value }) => {
  return (
    <span>
      {value}F{/* <sup>o</sup>C */}
    </span>
  );
};

export default Temparature;
