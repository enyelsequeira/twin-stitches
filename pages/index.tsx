import tw, { styled } from "twin.macro";
import { Logo, Button, Typography, Box } from "../components";
import { SecondBox } from "../components/Box";

const Container = styled.div({
  ...tw`flex flex-col items-center justify-center h-screen`,
  variants: {
    hasBackground: {
      true: tw`bg-gradient-to-b from-electric to-ribbon`,
    },
  },
});

const ButtonBox = tw.div`flex flex-col justify-center h-full gap-y-5`;

const IndexPage = () => (
  <Container hasBackground>
    <Typography as="h2" variant="secondary">
      My Typography Components
    </Typography>

    <Box variant="secondary" hasBackground>
      <Typography>I am inside the Box Component</Typography>
    </Box>

    <SecondBox variant="secondary" hasBackground>
      <Typography>I am inside the Box Component</Typography>
    </SecondBox>
    <SecondBox>THIS IS AS TEST</SecondBox>
    <SecondBox>THIS IS AS TESTw</SecondBox>
    <SecondBox>THIS IS AS TEST-testing branch</SecondBox>

    <ButtonBox>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
    </ButtonBox>
    <Logo />
  </Container>
);

export default IndexPage;
