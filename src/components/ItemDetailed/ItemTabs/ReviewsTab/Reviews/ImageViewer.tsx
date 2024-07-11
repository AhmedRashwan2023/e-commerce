"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

const ImageViewer = ({ imgSrc }: { imgSrc: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    imgSrc && (
      <>
        <Image
          boxSize={20}
          src={imgSrc}
          alt="Image attached to review"
          onClick={onOpen}
          cursor={"pointer"}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <Image src={imgSrc} alt="Image attached to review" />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  );
};

export default ImageViewer;
