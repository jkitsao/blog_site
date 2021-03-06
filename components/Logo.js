import React from "react";

export default function Logo() {
  return (
    <svg
      width="154"
      height="137"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87 0l86.603 135.75H.397L87 0z"
        fill="url(#paint0_linear)"
        fill-opacity=".56"
      />
      <ellipse cx="88" cy="82.5" rx="62" ry="54.5" fill="url(#paint1_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="34"
          y1="29"
          x2="87"
          y2="181"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".057" stop-color="#D44258" />
          <stop offset=".103" stop-color="#2AA65C" />
          <stop offset=".479" stop-color="#FF3D00" />
          <stop offset=".521" stop-color="#6F3C42" />
          <stop offset=".957" stop-color="#DCE022" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="88"
          y1="28"
          x2="88"
          y2="137"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1E0F0F" />
          <stop offset=".063" stop-color="#251616" stop-opacity=".938" />
          <stop offset=".76" stop-color="#29AC36" stop-opacity=".22" />
          <stop offset="1" stop-color="#8F7272" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
