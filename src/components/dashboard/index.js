import { Box, Heading, HStack, Textarea, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { useAddPost } from "hooks/posts";
import { useAuth } from "hooks/auth";
import PostsLists from "components/posts/PostsList";
import { usePosts } from "hooks/posts";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="teal"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText="Loading"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="Create a new post..."
          minRows={3}
          {...register("text", { required: true })}
        />
      </form>
    </Box>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading...";
  return (
    <>
      <NewPost />
      <PostsLists posts={posts} />
    </>
  );
}
