"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Icon,
  StackProps,
  Text,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

export const ListItems = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

export const Pricing = () => {
  return (
    <Box m={[6]}>
      <Box
        maxW="994px"
        margin="auto"
        mt="-140px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box color="#171923" bg="#F0EAFB" px="48px" py="60px">
            <Text fontWeight={["500","600","800"]} fontSize={["16px","20px","24px"]}>
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["30px", "48px", "60px"]} mt={["12px","14px","16px"]}>
              $329
            </Heading>
            <Text fontWeight="500" fontSize={["14px","14px","18px"]} mt="8px">
              billed just once
            </Text>
            <Button w={["180px","220px","282px"]} h="51px" colorScheme="purple" mt="24px">
              Get Started
            </Button>
          </Box>
          <Box p={["18px","32px","48px"]} fontSize={["14px","16px","18px"]} bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" mt="24px" spacing={["12px","14px","16px"]}>
              <ListItems>International calling and messaging API</ListItems>
              <ListItems>Additional phone numbers</ListItems>
              <ListItems>Automated messages via Zapier</ListItems>
              <ListItems>24/7 support and consulting</ListItems>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
