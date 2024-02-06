import { Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaRegComment,
  FaTrash,
} from "react-icons/fa";
import { useAuth } from "hooks/auth";
import { useToggleLike } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";

export default function Actions({ post }) {
  const { likes, id } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);

  const { toggleLike, isLoading: likeLoading } = useToggleLike({
    id,
    isLiked,
    uid: user?.id,
  });

  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || userLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          isRound
        />
        {likes.length}
      </Flex>
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          size="md"
          colorScheme="teal"
          variant="ghost"
          isRound
          icon={<FaRegComment />}
        />
        0
      </Flex>

      <IconButton
        ml="auto"
        size="md"
        colorScheme="red"
        variant="ghost"
        isRound
        icon={<FaTrash />}
      />
    </Flex>
  );
}
