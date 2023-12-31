import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M20.743 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99h-3.46c-.54 0-1.19.24-1.19.99 0 9.29 7.73 17.01 17.01 17.01.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.733 0h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
