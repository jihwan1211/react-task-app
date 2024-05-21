import { style } from "@vanilla-extract/css";
import { globalStyle } from "../../App.css";

export const Container = style({
  position: "absolute",
  width: "100dvw",
  height: "100dvh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Wrapper = style({
  width: 700,

  backgroundColor: globalStyle.color.mainDarker,
  borderRadius: "12px",
  boxSizing: "border-box",
  padding: 15,
});

export const Header = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const Cancle = style({
  cursor: "pointer",
});

export const Main = style({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box",
  padding: 15,
  maxHeight: 500,
  overflowY: "auto",
});

export const Title = style({
  color: "white",
});
