import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Divider from "rn-dividers";
import { TouchableOpacity } from "react-native-web";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://instagram.fdel3-3.fna.fbcdn.net/v/t51.2885-15/271266258_3051978025090893_1475305425478943407_n.jpg?stp=dst-jpg_e35&cb=2d435ae8-0fbdf7c6&_nc_ht=instagram.fdel3-3.fna.fbcdn.net&_nc_cat=109&_nc_ohc=JDc0XyIoHSIAX9T8oLh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc0MzgxNzYzODYzMDE0NzQ5NA%3D%3D.2-ccb7-5&oh=00_AT--CwPynzGndjYeUOoG_LkPf8UETbpeS2-Jt6DAOEbqEQ&oe=62E5DA63&_nc_sid=30a2ef",
    inactive:
      "https://instagram.fdel3-3.fna.fbcdn.net/v/t51.2885-15/271266258_3051978025090893_1475305425478943407_n.jpg?stp=dst-jpg_e35&cb=2d435ae8-0fbdf7c6&_nc_ht=instagram.fdel3-3.fna.fbcdn.net&_nc_cat=109&_nc_ohc=JDc0XyIoHSIAX9T8oLh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc0MzgxNzYzODYzMDE0NzQ5NA%3D%3D.2-ccb7-5&oh=00_AT--CwPynzGndjYeUOoG_LkPf8UETbpeS2-Jt6DAOEbqEQ&oe=62E5DA63&_nc_sid=30a2ef",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={styles.icon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Divider width={1} />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  wrapper: {},

  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },

  icon: {
    width: 30,
    height: 30,
  },
});
