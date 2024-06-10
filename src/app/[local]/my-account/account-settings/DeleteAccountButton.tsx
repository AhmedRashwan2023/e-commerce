"use client";
import { Button } from "@chakra-ui/react";
import React from "react";

const DeleteAccountButton = ({ text }: { text: string }) => {
  const deleteMyAccount = () => {
    console.log("Delete Account");
  };

  return (
    <Button
      colorScheme="red"
      w={"fit-content"}
      variant="outline"
      onClick={deleteMyAccount}
    >
      {text}
    </Button>
  );
};

export default DeleteAccountButton;
