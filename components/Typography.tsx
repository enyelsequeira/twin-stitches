import tw, { styled, theme } from "twin.macro";

const Typography = styled.div({
  ...tw`text-6xl text-red-600 md:text-red-400 lg:text-blue-400`,

  variants: {
    variant: {
      primary: tw`text-black text-5xl`,
      secondary: tw`text-red-500 text-3xl`,
      third: tw`text-red-300 text-4xl`,
    },
  },
});

export default Typography;
