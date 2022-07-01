import tw, { styled, theme } from "twin.macro";

const Box = styled.div({
  variants: {
    hasBackground: {
      true: tw`bg-gradient-to-r via-blue-400 to-red-400`,
    },
    variant: {
      secondary: tw`px-[30px]  border border-b-blue-50 `,
    },
  },
});

export const SecondBox = styled(Box, {
  ...tw`rounded-[10px]`,
});

export default Box;
