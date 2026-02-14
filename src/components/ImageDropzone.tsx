import {
  ActionIcon,
  Box,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

import type { DropzoneProps, FileWithPath } from "@mantine/dropzone";

import AddPhotoIcon from "../assets/icons/AddPhotoIcon";
import NoPhotoIcon from "../assets/icons/NoPhotoIcon";
import PhotoIcon from "../assets/icons/PhotoIcon";
import CloseIcon from "../assets/icons/CloseIcon";
import { useState } from "react";

interface ImageDropzoneProps extends Partial<DropzoneProps> {
  files: FileWithPath[];
  onDrop: (files: FileWithPath[]) => void;
}

export function ImageDropzone(props: ImageDropzoneProps) {
  const [onHover, setOnHover] = useState(false);

  const onDeleteImage = (image: FileWithPath) => {
    const filteredFiles = props.files.filter((file) => file !== image);
    props.onDrop(filteredFiles);
  };

  const previews = props.files.map((file) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Box
        key={file.path}
        pos="relative"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <Image
          display="block"
          src={imageUrl}
          onLoad={() => URL.revokeObjectURL(imageUrl)}
        />
        {onHover && (
          <ActionIcon
            top="6px"
            right="6px"
            color="red"
            pos="absolute"
            variant="white"
            onClick={() => onDeleteImage(file)}
          >
            <CloseIcon />
          </ActionIcon>
        )}
      </Box>
    );
  });

  return (
    <Stack gap="0">
      <Dropzone
        onReject={(files) => console.log("rejected files", files)}
        maxSize={5 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
      >
        <Group
          justify="center"
          gap="xl"
          mih={220}
          style={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <AddPhotoIcon />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <NoPhotoIcon />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <PhotoIcon />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>

      <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? "xl" : 0}>
        {previews}
      </SimpleGrid>
    </Stack>
  );
}
