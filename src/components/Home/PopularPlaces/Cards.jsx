import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Cards(props) {
  const { key, itemData } = props;
  return (
    <Card id={{ key }} category={itemData.category}>
      <CardMedia
        component="img"
        alt={itemData.name + " image"}
        sx={{
          objectFit: "cover",
          borderRadius: 2,
          height: "35vh",
          width: "30vw",
        }}
        image={itemData.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            width: "20vw",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            height: "1em",
            lineHeight: "1em", // controls consistent spacing
          }}
        >
          {itemData.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            width: "20vw",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            textOverflow: "ellipsis",
            lineHeight: "1.4em", // controls consistent spacing
            height: "4.2em", // 3 lines × lineHeight (1.4em)
          }}
        >
          {itemData.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

import PropTypes from "prop-types";

Cards.propTypes = {
  itemData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  key: PropTypes.any,
};
