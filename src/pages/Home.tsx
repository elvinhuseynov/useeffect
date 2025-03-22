import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { userData, setAction } = useStore();
  const navigate = useNavigate();

  const handleAction = (actionType: "cashIn" | "cashOut" | null) => {
    setAction(actionType);
    navigate("/action");
  };

  return (
    <VStack>
      <VStack>
        <Text>Name: {userData.name}</Text>
        <Text>Account Id: {userData.accountId}</Text>
        <Text>Balance: {userData.balance}</Text>
        <Text>Credit: {userData.credit}</Text>
      </VStack>
      <HStack>
        <Button onClick={() => handleAction("cashIn")} color="#fff">
          Cash In
        </Button>
        <Button onClick={() => handleAction("cashOut")} color="#fff">
          Cash out
        </Button>
      </HStack>
    </VStack>
  );
};
