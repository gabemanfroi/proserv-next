"use client";
import styled from "styled-components";

export const HeroSectionContainer = styled.main(() => {
  return {
    background: "url(hero-background.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    zIndex: 0,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)",
      zIndex: -1,
    },
  };
});
