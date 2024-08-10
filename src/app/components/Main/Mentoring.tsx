import * as React from "react";
import { SVGProps } from "react";
const Mentoring = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.59 17.74c-.629.422-2.277 1.282-1.273 2.358c.49.526 1.037.902 1.723.902h3.92c.686 0 1.233-.376 1.723-.902c1.004-1.076-.644-1.936-1.273-2.357a4.29 4.29 0 0 0-4.82 0M20 12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M10 6h5m-5-3h8M7 9.5V14c0 .943 0 1.414-.293 1.707S5.943 16 5 16H4c-.943 0-1.414 0-1.707-.293S2 14.943 2 14v-2.5c0-.943 0-1.414.293-1.707S3.057 9.5 4 9.5zm0 0h5M6.5 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
      color="currentColor"
    />
  </svg>
);

export default Mentoring;
