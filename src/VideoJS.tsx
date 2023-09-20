import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = (props: any) => {
  const refVideo = useRef<HTMLDivElement>(null);
  const refPlayer = useRef<HTMLVideoElement | any>(null);
  const { options } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!refPlayer.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      refVideo.current?.appendChild(videoElement);

      refPlayer.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
      });

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player: any = refPlayer.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, refVideo]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player: any = refPlayer.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        refPlayer.current = null;
      }
    };
  }, [refPlayer]);

  return (
    <div data-vjs-player>
      <div ref={refVideo} />
    </div>
  );
};

export default VideoJS;
