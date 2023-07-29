import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Button,
  ButtonGroup,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useChain } from "@cosmos-kit/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { openView } = useChain("kujiratestnet");
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Container p={8}>
      <ButtonGroup>
        <Button onClick={openView}>Open cosmos kit directly</Button>
        <Button onClick={onOpen}>Open chakra modal</Button>
      </ButtonGroup>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button onClick={openView}>
              Open cosmos kit in a chakra modal
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
