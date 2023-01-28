import React from "react";
import Box, { BoxProps } from "@mui/material/Box";
// import { styled, alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

// const MyBox = (
//   <Box
//     sx={{
//       width: 300,
//       height: 300,
//       backgroundColor: "primary.dark",
//       "&:hover": {
//         backgroundColor: "primary.main",
//         opacity: [0.9, 0.8, 0.7],
//       },
//     }}
//   />
// );
// const CustomBox = styled(MyBox)<BoxProps>(({ theme }) => ({
//   width: 300,
//   color: theme.palette.success.main,
//   '& .MuiSlider-thumb': {
//     '&:hover, &.Mui-focusVisible': {
//       boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
//     },
//     '&.Mui-active': {
//       boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
//     },
//   },
// }));

const MyComponent = styled("div")({
  // color: "darkcyan",
  padding: 20,
  width:300,
  height:300,
  backgroundColor:'darkcyan'
});

const CustomComponent = styled(MyComponent)({
  padding:50,
  backgroundColor:'red'
})
const App = () => {
  return (
    <div>
      <CustomComponent>hello</CustomComponent>
    </div>
  );
};

export default App;
