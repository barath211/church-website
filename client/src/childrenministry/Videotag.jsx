import React from 'react';
import video from '../images/childrensvideo1.mp4'
const Videotag = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-4">
     {/* Left Side: Bible Verses */}
<div className="w-full md:w-1/2 p-4">
  <h2 className="text-xl font-semibold  mb-2">Bible Verses</h2>
  <p className="text-base md:text-2xl font-bold text-gray-600">
    “Jesus said, ‘Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.’”
    — Matthew 19:14
  </p>
</div>

{/* Right Side: Video */}
<div className="w-full md:w-1/2 p-2">
  <video
    className="w-[20rem] h-[10rem] md:w-[35rem] md:h-1/2  rounded-lg shadow-lg object-cover"
    controls
    src={video} // Replace with your video source
    alt="Video Content"
  />
</div>

    </div>
  );
};

export default Videotag;

// import React, { useRef } from 'react';

// const Videotag = () => {
//   // Create a reference to the video element
//   const videoRef = useRef(null);

//   // Function to handle play/pause
//   const handlePlayPause = () => {
//     // Check if the video is currently playing
//     if (videoRef.current.paused) {
//       videoRef.current.play(); // Play the video if paused
//     } else {
//       videoRef.current.pause(); // Pause the video if playing
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center p-4">
//       {/* Left Side: Video */}
//       <div className="w-full md:w-1/2 p-2">
//         <video
//           ref={videoRef} // Assign the video reference
//           className="w-full h-auto rounded-lg shadow-lg"
//           onClick={handlePlayPause} // Handle click to play/pause the video
//           src="path/to/your/video.mp4" // Replace with your video source
//           alt="Video Content"
//         />
//       </div>

//       {/* Right Side: Bible Verses */}
//       <div className="w-full md:w-1/2 p-4">
//         <h2 className="text-xl font-semibold mb-2">Bible Verses</h2>
//         <p className="text-base">
//           “Jesus said, ‘Let the little children come to me, and do not hinder
//           them, for the kingdom of heaven belongs to such as these.’” — Matthew
//           19:14
//         </p>
//         {/* Add more verses here if needed */}
//       </div>
//     </div>
//   );
// };

// export default Videotag;

