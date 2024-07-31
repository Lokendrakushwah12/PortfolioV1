import React from 'react'

const Cauldron = () => {
  return (
    <svg
      className="w-5 opacity-70"
      width="41"
      height="39"
      viewBox="0 0 41 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_876_17072)">
        <path
          d="M20.0665 1.95125L10.2375 18.1077L11.7441 18.5817L0.503771 37.0577L0.503113 37.0587H4.99761C8.46905 37.0587 11.6708 35.187 13.3738 32.1621L20.1587 20.1005L20.6917 21.0343L26.9584 32.1621C28.6614 35.187 31.8631 37.0587 35.3346 37.0587H40.4969L28.8428 18.5392L30.234 18.1082L20.0665 1.95125Z"
          fill="url(#paint0_linear_876_17072)"
        />
      </g>
      <path
        d="M28.6312 18.6723L40.0442 36.8087H35.3346C31.9534 36.8087 28.8349 34.9857 27.1763 32.0394L27.1763 32.0394L20.9095 20.9116L20.9088 20.9104L20.3758 19.9766L20.1571 19.5934L19.9408 19.9779L13.156 32.0394C11.4972 34.9857 8.37877 36.8087 4.99761 36.8087H0.947845L11.9577 18.7117L12.1236 18.439L11.8191 18.3432L10.6169 17.965L20.0701 2.42635L29.849 17.9657L28.7688 18.3003L28.4577 18.3967L28.6312 18.6723Z"
        stroke="#fbfbfb"
        stroke-width="0.5"
      />
      <defs>
        <filter
          id="filter0_i_876_17072"
          x="0.503113"
          y="1.95125"
          width="39.9938"
          height="35.1075"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.75" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.48 0 0 0 0 0.48 0 0 0 0 0.48 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_876_17072"
          />
        </filter>
        <linearGradient
          id="paint0_linear_876_17072"
          x1="20.5"
          y1="1.95125"
          x2="20.5"
          y2="37.0587"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#eaeaea" />
          <stop offset="1" stop-color="#d9d9d9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Cauldron
