import { Box, Image, LinkBox } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

interface Props {
  imageUrl: string;
  title: string;
  alt: string;

  url: string;
}

function PostItemComponent(props: Props) {
  return (
    <div>
      <Link to={props.url}>
        <LinkBox>
          <Box>
            <Image
              className="rounded-lg"
              width="100%"
              height="auto"
              src={props.imageUrl}
              alt={props.alt}
            ></Image>
          </Box>
          <Box className="text-center mt-2">
            <span className="text-base">{props.title}</span>
          </Box>
        </LinkBox>
      </Link>
    </div>
  );
}

export default PostItemComponent;
