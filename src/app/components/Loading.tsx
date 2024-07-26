import React from 'react';

const Loading = () => {
  return (
    <div className="loader w-full h-screen justify-center items-center">
      <style jsx>{`
        @keyframes loader_5191 {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

       .loader {
          position: relative;
        }

       .square {
          background: #ddd;
          width: 30px; /* multiplied by 2 */
          height: 30px; /* multiplied by 2 */
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -10px; /* adjusted */
          margin-left: -10px; /* adjusted */
        }

        #sq1 {
          margin-top: -50px; /* multiplied by 2 */
          margin-left: -50px; /* multiplied by 2 */
          animation: loader_5191 675ms ease-in-out 0s infinite alternate;
        }

        #sq2 {
          margin-top: -50px; /* multiplied by 2 */
          animation: loader_5191 675ms ease-in-out 75ms infinite alternate;
        }

        #sq3 {
          margin-top: -50px; /* multiplied by 2 */
          margin-left: 30px; /* adjusted */
          animation: loader_5191 675ms ease-in-out 150ms infinite;
        }

        #sq4 {
          margin-left: -50px; /* multiplied by 2 */
          animation: loader_5191 675ms ease-in-out 225ms infinite;
        }

        #sq5 {
          animation: loader_5191 675ms ease-in-out 300ms infinite;
        }

        #sq6 {
          margin-left: 30px; /* adjusted */
          animation: loader_5191 675ms ease-in-out 375ms infinite;
        }

        #sq7 {
          margin-top: 30px; /* adjusted */
          margin-left: -50px; /* multiplied by 2 */
          animation: loader_5191 675ms ease-in-out 450ms infinite;
        }

        #sq8 {
          margin-top: 30px; /* adjusted */
          animation: loader_5191 675ms ease-in-out 525ms infinite;
        }

        #sq9 {
          margin-top: 30px; /* adjusted */
          margin-left: 30px; /* adjusted */
          animation: loader_5191 675ms ease-in-out 600ms infinite;
        }
      `}</style>
      <div className="square" id="sq1"></div>
      <div className="square" id="sq2"></div>
      <div className="square" id="sq3"></div>
      <div className="square" id="sq4"></div>
      <div className="square" id="sq5"></div>
      <div className="square" id="sq6"></div>
      <div className="square" id="sq7"></div>
      <div className="square" id="sq8"></div>
      <div className="square" id="sq9"></div>
    </div>
  );
};

export default Loading;