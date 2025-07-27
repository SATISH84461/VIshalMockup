import { useRef, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Cards from "./Cards.jsx";
import PropTypes from "prop-types";

export default function Places(props) {
  const { option } = props;
  const scrollRef = useRef(null);
  const scrollAmount = 270; // width of card + spacing

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  // Optional: update currentIndex as user scrolls (rough estimation)
  //   const handleScroll = () => {
  //     if (!scrollRef.current) return;
  //   };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      //   container.addEventListener('scroll', handleScroll);
      //   return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Box
      sx={{
        borderRadius: 2,
        marginTop: 3,
        padding: 2,
        position: "relative",
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {option.label}
        {/* (Current: {count[currentIndex]?.name}) */}
      </Typography>

      {/* Left arrow */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Scrollable container */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          paddingY: 1,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {option.data && option.data.length > 0 ? (
          option.data.map((itemData) => (
            <Box key={itemData.name} sx={{ flexShrink: 0, minWidth: 250 }}>
              <Cards itemData={itemData} />
            </Box>
          ))
        ) : (
          <Typography>No data available</Typography>
        )}
      </Box>

      {/* Right arrow */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}

Places.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
