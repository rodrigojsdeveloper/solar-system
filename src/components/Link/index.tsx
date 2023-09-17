import { ILink } from "../../interfaces";
import { styles } from "./style";

const Link = ({ href, name }: ILink) => {
  return (
    <a style={styles.container} href={href}>
      {name}
    </a>
  );
};

export { Link };
