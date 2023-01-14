"use client";
import { HStack, Icon, Text, StackProps, Box, Stack } from "@chakra-ui/react";
import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscription,
} from "../icons/Icons";
import React from "react";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;
  return (
    <HStack spacing="20px" {...rest}>
      <Icon as={icon} boxSize="48px" />
      <Text textAlign="left" fontSize={["14px","16px","18px"]} fontWeight={["500","600","600"]}>
        {children}
      </Text>
    </HStack>
  );
};

function Features() {
  return (
    <Box mb="135px" mt="57px" mx={["50px","100px","257px"]}>
      <Stack spacing="26px" direction={["column", "column", "row"]}>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscription}>
          No monthly subscription Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}

export default Features;
