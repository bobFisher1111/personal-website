import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Pause } from "@mui/icons-material";
import Fade from "embla-carousel-fade";
// import { Article } from './types'

interface Article {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  imageUrl: string;
  link: string;
}

interface Props {
  articles: Article[];
}

// this will be to pass in
// const articles: Article[] = [
//   {
//     id: "1",
//     title: "Breaking News",
//     subtitle: "World events unfolding",
//     date: "Aug 6, 2025",
//     imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1173820/ss_ffbeaa0a8abbcb25f7d0f55b84e8229e3050d8eb.1920x1080.jpg?t=1696939883",
//     link: "/article/1",
//   },
//   {
//     id: "12",
//     title: "Breaking News",
//     subtitle: "World events unfolding",
//     date: "Aug 7, 2025",
//     imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1173820/ss_ffbeaa0a8abbcb25f7d0f55b84e8229e3050d8eb.1920x1080.jpg?t=1696939883",
//     link: "/article/1",
//   },
//   {
//     id: "13",
//     title: "Breaking News",
//     subtitle: "World events unfolding",
//     date: "Aug 8, 2025",
//     imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1173820/ss_ffbeaa0a8abbcb25f7d0f55b84e8229e3050d8eb.1920x1080.jpg?t=1696939883",
//     link: "/article/1",
//   },
//   {
//     id: "14",
//     title: "Breaking News",
//     subtitle: "World events unfolding",
//     date: "Aug 9, 2025",
//     imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1173820/ss_ffbeaa0a8abbcb25f7d0f55b84e8229e3050d8eb.1920x1080.jpg?t=1696939883",
//     link: "/article/1",
//   },
//   {
//     id: "15",
//     title: "Breaking News",
//     subtitle: "World events unfolding",
//     date: "Aug 10, 2025",
//     imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1173820/ss_ffbeaa0a8abbcb25f7d0f55b84e8229e3050d8eb.1920x1080.jpg?t=1696939883",
//     link: "/article/1",
//   },
//   {
//     id: "16",
//     title: "Breaking News",
//     subtitle: "World events unfolding",
//     date: "Aug 11, 2025",
//     imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1173820/ss_ffbeaa0a8abbcb25f7d0f55b84e8229e3050d8eb.1920x1080.jpg?t=1696939883",
//     link: "/article/1",
//   },
//   {
//     id: "17",
//     title: "Breaking News",
//     subtitle: "World events unfolding",
//     date: "Aug 12, 2025",
//     imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1173820/ss_ffbeaa0a8abbcb25f7d0f55b84e8229e3050d8eb.1920x1080.jpg?t=1696939883",
//     link: "/article/1",
//   },
//   // Add 7 more articles...
// ];

const TestCarousel: React.FC<Props> = ({ articles }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]); // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play logic
  useEffect(() => {
    if (!emblaApi || !isPlaying) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 1000);

    return () => clearInterval(interval);
  }, [emblaApi, isPlaying]);

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const handleClick = useCallback((link: string) => {
    window.location.href = link;
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box ref={emblaRef} sx={{ overflow: "hidden" }}>
        <Box sx={{ display: "flex" }}>
          {articles.map((article) => (
            <Box
              key={article.id}
              onClick={() => handleClick(article.link)}
              sx={{
                position: "relative",
                flex: "0 0 100%",
                cursor: "pointer",
              }}
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Typography
                variant="h4"
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  color: "white",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  padding: "4px 8px",
                }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  color: "white",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  padding: "2px 6px",
                }}
              >
                {article.subtitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  color: "white",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  padding: "2px 6px",
                }}
              >
                {article.date}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Controls */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          display: "flex",
          alignItems: "center",
          gap: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "4px 8px",
          borderRadius: "4px",
        }}
      >
        <IconButton
          onClick={() => emblaApi?.scrollPrev()}
          sx={{ color: "white" }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={() => emblaApi?.scrollNext()}
          sx={{ color: "white" }}
        >
          <ArrowForwardIos />
        </IconButton>
        <Typography sx={{ color: "white" }}>
          {selectedIndex + 1} of {articles.length}
        </Typography>
        <IconButton
          onClick={() => setIsPlaying(!isPlaying)}
          sx={{ color: "white" }}
        >
          <Pause />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestCarousel;
