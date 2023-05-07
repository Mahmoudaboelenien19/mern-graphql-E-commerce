import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <div className="loading center">
      <motion.svg
        width="118"
        height="29"
        viewBox="0 0 118 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ scale: [1, 1.2] }}
        transition={{ delay: 1.6, duration: 0.3 }}
      >
        <motion.path
          d="M6.3 13.465C5.22 13.465 4.275 13.075 3.465 12.295C2.655 11.515 2.25 10.465 2.25 9.145V6.445H6.975V7.075C6.975 7.705 7.08 8.08 7.29 8.2C7.53 8.29 7.935 8.335 8.505 8.335H20.97L10.08 24.175L8.91 22.87H20.835V28H0.9L12.105 11.665L13.05 13.465H6.3ZM61.1051 26.6C60.7051 25.8533 60.4518 25.0267 60.3451 24.12C60.2385 23.1867 60.1851 21.9067 60.1851 20.28C60.1851 18.7333 59.9718 17.3867 59.5451 16.24C59.1185 15.0933 58.2385 14.52 56.9051 14.52C56.3985 14.52 55.8918 14.68 55.3851 15C54.9051 15.2933 54.5451 15.6667 54.3051 16.12C53.9318 16.84 53.6785 17.6267 53.5451 18.48C53.4118 19.3067 53.3451 20.2667 53.3451 21.36C53.3451 22.0533 53.3851 22.76 53.4651 23.48C53.4651 23.6933 53.4785 24.04 53.5051 24.52C53.5585 24.9733 53.5851 25.3867 53.5851 25.76C53.5851 27.36 53.0251 28.16 51.9051 28.16C50.4385 28.16 49.6651 27.3867 49.5851 25.84C49.5851 24.7467 49.5985 24.16 49.6251 24.08V22.36C49.6251 21.4 49.5851 20.4667 49.5051 19.56C49.4251 18.6533 49.3318 17.9733 49.2251 17.52C48.9851 16.64 48.6651 15.96 48.2651 15.48C47.8918 15 47.2918 14.76 46.4651 14.76C45.2918 14.76 44.3451 15.2667 43.6251 16.28C43.1185 17.08 42.7851 18.0533 42.6251 19.2C42.4651 20.6667 42.3451 21.8267 42.2651 22.68C42.2118 23.5067 42.1851 24.4667 42.1851 25.56C42.1851 26.3333 42.0518 26.96 41.7851 27.44C41.5451 27.92 41.0785 28.16 40.3851 28.16C39.8785 28.16 39.3451 28.0267 38.7851 27.76C38.2518 27.4667 37.9851 27.08 37.9851 26.6C37.9851 26.0933 38.0385 25.5867 38.1451 25.08C38.3851 23.56 38.5051 20.84 38.5051 16.92C38.5051 16.28 38.3451 15.6667 38.0251 15.08C37.7318 14.4667 37.3718 14.16 36.9451 14.16C36.8385 14.16 36.6385 14.2133 36.3451 14.32C36.0785 14.4267 35.8785 14.48 35.7451 14.48C35.3985 14.48 35.0785 14.32 34.7851 14C34.5185 13.68 34.3851 13.4133 34.3851 13.2C34.3851 12.5333 34.7051 11.9733 35.3451 11.52C36.0118 11.04 36.7051 10.8 37.4251 10.8C38.4118 10.8 39.2518 11.1067 39.9451 11.72C40.6385 12.3333 41.1718 13.1867 41.5451 14.28C42.1585 13.2133 42.9851 12.36 44.0251 11.72C45.0651 11.0533 46.2251 10.72 47.5051 10.72C48.3051 10.72 48.9451 10.8267 49.4251 11.04C49.9318 11.2267 50.3451 11.5067 50.6651 11.88C50.9851 12.2267 51.3985 12.76 51.9051 13.48C52.5718 12.6267 53.4251 11.96 54.4651 11.48C55.5318 11 56.6251 10.76 57.7451 10.76C59.0785 10.76 60.2785 11.3067 61.3451 12.4C62.4118 13.4667 63.1318 14.7067 63.5051 16.12C63.6918 16.84 63.7851 18.2267 63.7851 20.28L63.9451 22.6C64.0785 23.9867 64.5318 24.8267 65.3051 25.12C66.2118 25.3867 66.6651 25.6667 66.6651 25.96C66.6651 26.6 66.5051 27.0667 66.1851 27.36C65.9451 27.52 65.6118 27.6933 65.1851 27.88C64.7585 28.0667 64.4251 28.16 64.1851 28.16C62.7451 28.16 61.7185 27.64 61.1051 26.6ZM87.6979 26.08C87.6979 26.6667 87.3779 27.16 86.7379 27.56C86.1246 27.96 85.5513 28.16 85.0179 28.16C84.0046 28.16 83.1913 28.04 82.5779 27.8C81.9913 27.5333 81.4446 27.0533 80.9379 26.36C80.2446 26.9733 79.2979 27.44 78.0979 27.76C76.8979 28.0533 75.7913 28.2 74.7779 28.2C73.1246 28.2 71.7646 27.76 70.6979 26.88C69.6313 25.9733 69.0979 24.6533 69.0979 22.92C69.0979 22.1733 69.2979 21.4933 69.6979 20.88C70.0979 20.24 70.6446 19.68 71.3379 19.2C72.1113 18.6933 72.9913 18.3067 73.9779 18.04C74.9646 17.7467 75.9913 17.6 77.0579 17.6C77.6179 17.6 78.2846 17.7067 79.0579 17.92C79.8313 18.1333 80.4313 18.36 80.8579 18.6V17.96C80.8579 16.52 80.5113 15.5333 79.8179 15C79.1246 14.44 78.0046 14.16 76.4579 14.16C76.0046 14.16 75.5513 14.2533 75.0979 14.44C74.6713 14.6267 74.1779 14.88 73.6179 15.2C72.8713 15.6 72.1646 15.8 71.4979 15.8C71.2579 15.8 71.0313 15.64 70.8179 15.32C70.6046 14.9733 70.4979 14.6667 70.4979 14.4C70.4979 13.6267 70.8579 12.96 71.5779 12.4C72.3246 11.84 73.2046 11.4267 74.2179 11.16C75.2313 10.8667 76.1379 10.72 76.9379 10.72C77.7379 10.72 78.6579 10.88 79.6979 11.2C80.7379 11.4933 81.5913 11.9067 82.2579 12.44C83.0579 13.1333 83.6713 13.9467 84.0979 14.88C84.5513 15.7867 84.7779 16.7867 84.7779 17.88C84.7779 18.2267 84.7513 18.7467 84.6979 19.44C84.6446 20.1867 84.6179 20.8267 84.6179 21.36C84.6179 21.6 84.5913 21.96 84.5379 22.44C84.4846 23.0267 84.4579 23.4933 84.4579 23.84C84.4579 24.16 84.5779 24.44 84.8179 24.68C85.0579 24.8933 85.3379 25 85.6579 25L86.7779 24.96C87.0713 24.96 87.2979 25.0667 87.4579 25.28C87.6179 25.4933 87.6979 25.76 87.6979 26.08ZM74.8179 25.04C75.9646 25.04 76.9246 24.92 77.6979 24.68C78.4713 24.44 79.4046 24 80.4979 23.36C80.6046 22.9067 80.6713 22.3067 80.6979 21.56C79.2313 20.8667 78.0179 20.52 77.0579 20.52C75.9646 20.52 74.9913 20.72 74.1379 21.12C73.2846 21.52 72.8579 22.2267 72.8579 23.24C72.8579 23.7467 73.0713 24.1733 73.4979 24.52C73.9246 24.8667 74.3646 25.04 74.8179 25.04ZM90.5173 13.96C89.824 13.48 89.4773 12.9733 89.4773 12.44C89.4773 12.0667 89.6373 11.72 89.9573 11.4C90.2773 11.08 90.7573 10.92 91.3973 10.92C92.144 10.92 92.8106 11.12 93.3973 11.52C94.0106 11.8933 94.4373 12.44 94.6773 13.16C95.2906 12.44 95.984 11.8667 96.7573 11.44C97.5573 11.0133 98.3706 10.8 99.1973 10.8C100.184 10.8 101.077 11.0667 101.877 11.6C102.677 12.1333 103.077 12.8533 103.077 13.76C103.077 14.2667 102.851 14.7867 102.397 15.32C101.971 15.8533 101.531 16.12 101.077 16.12C100.837 16.12 100.624 16.0667 100.437 15.96C100.277 15.8267 100.077 15.64 99.8373 15.4C99.5706 15.1333 99.344 14.9467 99.1573 14.84C98.9706 14.7067 98.7573 14.64 98.5173 14.64C98.0906 14.64 97.6906 14.7067 97.3173 14.84C96.944 14.9733 96.6906 15.1333 96.5573 15.32C96.1306 15.9867 95.8106 16.5867 95.5973 17.12C95.4106 17.6533 95.3173 18.2267 95.3173 18.84C95.3173 19.2933 95.304 19.6533 95.2773 19.92L95.2373 22.2C95.2373 22.5467 95.2506 22.9333 95.2773 23.36C95.304 23.7867 95.3306 24.1067 95.3573 24.32C95.4373 25.04 95.4773 25.7333 95.4773 26.4C95.4773 26.8533 95.304 27.2533 94.9573 27.6C94.6106 27.9467 94.184 28.12 93.6773 28.12C92.8773 28.12 92.2906 27.9733 91.9173 27.68C91.544 27.36 91.3573 26.7867 91.3573 25.96L91.3173 23.4C91.2906 22.8933 91.2773 22.1733 91.2773 21.24L91.3173 18.6C91.3706 17.32 91.3973 16.28 91.3973 15.48C91.3973 15.1867 91.3306 14.92 91.1973 14.68C91.0906 14.44 90.864 14.2 90.5173 13.96ZM105.515 14.16C105.142 14.1067 104.835 13.9467 104.595 13.68C104.382 13.4133 104.275 13.0933 104.275 12.72C104.275 12.5333 104.315 12.3333 104.395 12.12C104.502 11.9067 104.649 11.72 104.835 11.56C105.182 11.2667 105.649 10.9867 106.235 10.72C106.849 10.48 107.289 10.1867 107.555 9.84C107.822 9.49333 107.955 8.84 107.955 7.88C107.955 7.48 107.929 7.13333 107.875 6.84C107.849 6.54667 107.835 6.32 107.835 6.16C107.835 5.57333 108.049 5.13333 108.475 4.84C108.902 4.54667 109.395 4.4 109.955 4.4C110.649 4.4 111.115 4.57333 111.355 4.92C111.622 5.26667 111.755 5.90667 111.755 6.84C111.755 7.74667 111.715 8.53333 111.635 9.2C111.555 9.84 111.382 10.4133 111.115 10.92C111.489 10.92 112.102 10.8933 112.955 10.84C114.129 10.7867 114.942 10.76 115.395 10.76C115.849 10.76 116.249 10.88 116.595 11.12C116.942 11.3333 117.115 11.64 117.115 12.04C117.115 12.6 116.995 13.0133 116.755 13.28C116.515 13.5467 116.169 13.72 115.715 13.8C114.622 14.0933 113.075 14.2667 111.075 14.32C111.022 15.36 110.995 16.4933 110.995 17.72C110.995 19.7733 111.115 21.3467 111.355 22.44C111.515 23.2933 111.782 23.92 112.155 24.32C112.555 24.6933 113.142 24.88 113.915 24.88C114.315 24.88 114.635 24.8267 114.875 24.72C115.142 24.6133 115.289 24.5467 115.315 24.52C115.635 24.3333 115.929 24.24 116.195 24.24C116.569 24.24 116.835 24.36 116.995 24.6C117.182 24.84 117.275 25.16 117.275 25.56C117.275 26.3067 116.875 26.9333 116.075 27.44C115.275 27.92 114.249 28.16 112.995 28.16C111.582 28.16 110.382 27.7467 109.395 26.92C108.435 26.0667 107.862 24.9467 107.675 23.56C107.409 22.3067 107.275 20.5467 107.275 18.28C107.275 17.2933 107.329 15.9733 107.435 14.32L105.515 14.16Z"
          stroke={"url(#paint0_radial_0_1)"}
          initial={{ fill: "none", pathOffset: 0.1, pathLength: 0 }}
          animate={{
            fill: "url(#paint0_radial_0_1)",
            pathOffset: 0,
            pathLength: 1,
            transition: { delay: 0.2, duration: 0.4, fill: { delay: 1.5 } },
          }}
        />

        <motion.path
          stroke={"url(#paint1_linear_0_1)"}
          initial={{ y: -400, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            fill: "url(#paint1_linear_0_1)",
            transition: { delay: 0.5, duration: 0.4, fill: { delay: 1.5 } },
          }}
          d="M27.6707 2.32C28.6041 2.4 29.4174 2.65333 30.1107 3.08C30.8041 3.48 31.1507 4.09333 31.1507 4.92C31.1507 5.53333 30.8574 6.02667 30.2707 6.4C29.7107 6.74667 29.0307 6.92 28.2307 6.92C27.4574 6.92 26.9241 6.72 26.6307 6.32C26.3374 5.92 26.1907 5.50667 26.1907 5.08C26.1907 4.28 26.2707 3.61333 26.4307 3.08C26.6174 2.54667 27.0307 2.29333 27.6707 2.32ZM30.8707 20.04V21.2C30.8707 22.24 30.8974 23.2267 30.9507 24.16C31.0307 25.0667 31.1241 25.9867 31.2307 26.92C31.2041 27.1867 31.0041 27.4667 30.6307 27.76C30.2574 28.0267 29.9241 28.16 29.6307 28.16C29.1241 28.16 28.6041 28.0667 28.0707 27.88C27.5641 27.6667 27.2574 27.4133 27.1507 27.12C26.9907 26.2667 26.9107 25.5067 26.9107 24.84C26.9107 22.6533 26.8441 20.2 26.7107 17.48C26.6041 15.08 26.5507 13.4 26.5507 12.44C26.5507 11.96 26.7907 11.5467 27.2707 11.2C27.7507 10.8533 28.2574 10.68 28.7907 10.68C29.5641 10.68 30.0974 10.8533 30.3907 11.2C30.7107 11.5467 30.8707 12.0933 30.8707 12.84V20.04Z"
          fill="none"
        />
        <motion.circle
          cx="29"
          cy="3"
          r="3"
          fill="none"
          //   initial={{ y: -400 }}
          animate={{
            y: [12, 0],
            fill: "url(#paint2_linear_0_1)",
            transition: {
              y: { delay: 1, duration: 0.4 },
              fill: { delay: 1.2, duration: 0.2 },
            },
          }}
        />
        <defs>
          <radialGradient
            id="paint0_radial_0_1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(59.5 15) rotate(90) scale(24 59.5)"
          >
            <stop offset="0.210934" stopColor="#E0C695" />
            <stop offset="0.908859" stopColor="#4A8B64" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="59.5"
            y1="-9"
            x2="59.5"
            y2="39"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.32031" stopColor="#E0C695" stopOpacity="0" />
            <stop offset="0.497396" stopColor="#E0C695" />
            <stop offset="0.74219" stopColor="#4A8B64" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_1"
            x1="29"
            y1="0"
            x2="29"
            y2="6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0C695" />
            <stop offset="0.299477" stopColor="#589069" />
            <stop offset="0.71094" stopColor="#4A8B64" />
            <stop offset="1" stopColor="#E0C695" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Loading;
