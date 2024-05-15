// client/src/pages/Tutorials.jsx

import React from "react";
import styled from "styled-components";

const TutorialsContainer = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const VideoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const VideoWrapper = styled.div`
  width: calc(33.33% - 10px);
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  iframe {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Tutorials = () => {
  // Define an array of YouTube video IDs
  const videoIds = [
    "dQw4w9WgXcQ",
    "5qap5aO4i9A",
    "ScMzIvxBSi4",
    "V-_O7nl0Ii0",
    "Ct6BUPvE2sM",
    "Wch3gJG2GJ4",
    "LXb3EKWsInQ",
    "iNpXCzaWW1s",
    "dQw4w9WgXcQ",

  ];

  return (
    <TutorialsContainer>
      <h1>Tutorials</h1>

      {/* Display videos in rows of three */}
      {[...Array(Math.ceil(videoIds.length / 3))].map((_, rowIndex) => (
        <VideoRow key={rowIndex}>
          {/* Render up to 3 videos in each row */}
          {[...Array(3)].map((_, columnIndex) => {
            const videoIndex = rowIndex * 3 + columnIndex;
            if (videoIndex < videoIds.length) {
              const videoId = videoIds[videoIndex];
              return (
                <VideoWrapper key={videoId}>
                  {/* Embed YouTube video using iframe */}
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube Video ${videoId}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </VideoWrapper>
              );
            } else {
              return null; // Render empty div if no video available for this slot
            }
          })}
        </VideoRow>
      ))}
    </TutorialsContainer>
  );
};

export default Tutorials;
