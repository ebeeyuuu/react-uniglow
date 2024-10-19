import React from "react";

const AmountDisplay = ({ amount }: { amount: number | null }) => {
  return <div>{amount !== null ? `$${amount}` : "..."}</div>;
};

export default AmountDisplay;
