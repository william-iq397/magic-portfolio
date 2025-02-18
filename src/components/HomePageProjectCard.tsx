"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  images: string[];
  title: string;
  avatars: { src: string }[];
  link: string;
}

export const HomePageProjectCard: React.FC<ProjectCardProps> = ({
  images = [],
  title,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
    </Column>
  );
};
