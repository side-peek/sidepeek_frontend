import { Box, Grid, GridItem, Text } from "@chakra-ui/react"

import CustomTag from "@components/Tag/components/CustomTag"

const TechStack = () => {
  return (
    <Box
      w="32rem"
      px="1rem"
      py="3rem">
      <Text
        fontSize="xl"
        fontFamily="SCDream_Bold">
        기술스택
      </Text>
      <Text
        mt="1rem"
        fontSize="lg">
        프론트엔드
      </Text>
      <Grid
        mt="0.5rem"
        templateColumns="repeat(4, 1fr)"
        gap={3}>
        <GridItem>
          <CustomTag label="React" />
        </GridItem>
        <GridItem>
          <CustomTag label="React" />
        </GridItem>
        <GridItem>
          <CustomTag label="React" />
        </GridItem>
        <GridItem>
          <CustomTag label="React" />
        </GridItem>
        <GridItem>
          <CustomTag label="React" />
        </GridItem>
        <GridItem>
          <CustomTag label="React" />
        </GridItem>
      </Grid>
      <Text
        mt="1rem"
        fontSize="lg">
        백엔드
      </Text>
      <Grid
        mt="0.5rem"
        templateColumns="repeat(4, 1fr)"
        gap={3}>
        <GridItem>
          <CustomTag label="Spring" />
        </GridItem>
        <GridItem>
          <CustomTag label="Spring" />
        </GridItem>
        <GridItem>
          <CustomTag label="Spring" />
        </GridItem>
        <GridItem>
          <CustomTag label="Spring" />
        </GridItem>
        <GridItem>
          <CustomTag label="Spring" />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default TechStack
