import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";

export const Navbar = styled("nav", {
  background: "$grey0",
  borderBottom: "2px solid $brand1",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoImg = styled("img", {
  maxHeight: "4rem",
  "@mobile": {
    maxHeight: "3rem",
  },
});

export const NavbarLinks = styled(Flex, {
  "a": {
    textDecoration: "underline",
    textDecorationColor: "$grey0",
    textDecorationThickness: "3px",
    "&:hover": {
      scale: 1.1,
      transition: ".4s",
      fontWeight: "bold",
      textDecorationColor: "$brand1",
    }
  },
  "@mobile": {
    marginTop: "$3",
    flexDirection: "column",
    alignItems: "flex-start",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: 0,
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  "button": {
    "&:hover": {
      transition: ".4s",
      filter: "brightness(1.75)"
    }
  }
});
