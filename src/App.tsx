import "./styles.scss";
import image from "./react.png";
import svgImage from "./react-native-1.svg";

export const App = () => {
  return (
    <div>
      <h1>
        Hello {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={image} alt="Image" width={200} height={200} />
      <img src={svgImage} alt="SVG Image" width={200} height={200} />
    </div>
  );
};
