import * as React from "react";
import { SVGProps } from "react";

const Application = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    stroke="currentColor" // Use current text color for the stroke
    {...props}
  >
    <polygon points="1.75 4.75 8 1.25 14.25 4.75 14.25 11.25 8 14.75 1.75 11.25" />
    <path d="m8 14v-6m5.75-3-5.75 3m-6-3 6 3" />
  </svg>
);

export default Application;
