// src/components/social/TwitterEmbed.tsx
import React, { useEffect, useRef } from "react";

interface TwitterEmbedProps {
  tweetId: string;
  options?: any; // Twitter widget options
}

export const TwitterEmbed: React.FC<TwitterEmbedProps> = ({ tweetId, options }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.twttr) {
      // Twitter script yükle
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.createTweet(tweetId, ref.current!, options);
        }
      };
    } else {
      window.twttr.widgets.createTweet(tweetId, ref.current!, options);
    }
  }, [tweetId, options]);

  return <div ref={ref}></div>;
};
