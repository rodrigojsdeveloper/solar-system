import { IDescription } from "../../interfaces";
import Svg, { Path } from "react-native-svg";
import { Text, View } from "react-native";
import { styles } from "./style";

const Description = ({ title }: IDescription) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title} Planet</Text>

        <Svg width={22} height={22} viewBox="0 0 256 256">
          <Path
            fill="white"
            d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"
          />
        </Svg>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Planets are celestial bodies that orbit stars, like the Sun, and vary
          in size and composition. Some are rocky, like Earth, while others are
          gaseous, like Jupiter.
        </Text>

        <Svg width={24} height={24} viewBox="0 0 24 24">
          <Path
            fill="white"
            d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"
          />
        </Svg>
      </View>
    </View>
  );
};

export { Description };
