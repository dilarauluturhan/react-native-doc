import React from "react";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import { ScrollView } from "react-native";

const index = () => {
  return (
    // stickyHeaderIndices sabit kalması için.
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ height: "100%", backgroundColor: "#f5f5f5" }}
    >
      <HeaderMain />
      <BannerCarousel />
    </ScrollView>
  );
};

export default index;
