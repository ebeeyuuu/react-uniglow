import * as React from "react";
import { SVGProps } from "react";
const Home = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35px"
    height="35px"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
  </svg>
);
export default Home;
