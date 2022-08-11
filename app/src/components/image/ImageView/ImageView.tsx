import { ImageElement } from "./styled";

interface Props {
  src: string | number;
}

export const ImageView: React.FC<Props> = ({ src }) => {
  return <ImageElement source={typeof src === "number" ? src : { uri: src }} />;
};
