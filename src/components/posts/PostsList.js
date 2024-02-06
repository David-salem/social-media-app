import { Box, Text } from "@chakra-ui/react";
import Post from "./index.js";

export default function PostsLists({ posts }) {
  return (
    <Box p="4" align="center">
      {posts?.length === 0 ? (
        <Text textAlign="center" fontSize="xl">
          No post yet... Feeling a little lonely here.
        </Text>
      ) : (
        posts?.map((post) => <Post key={post.id} post={post} />)
      )}
    </Box>
  );
}
