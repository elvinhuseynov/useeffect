import { Button, Input, VStack } from "@chakra-ui/react";
import { useStore } from "../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Action = () => {
  const [inputAmount, setInputAmount] = useState(0);
  const { action, userData, changeBalance } = useStore();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (action === "cashIn") {
      if (userData.credit > 0) {
        const creditAmount = userData.credit - inputAmount;
        if (creditAmount <= 0) {
          const balance = userData.balance + creditAmount;

          changeBalance(balance > 0 ? balance : balance * -1, 0);
          navigate("/");
          return;
        }
        changeBalance(0, creditAmount);
        navigate("/");
        return;
      }

      changeBalance(userData.balance + inputAmount, 0);
    }

    if (action === "cashOut") {
      if (userData.balance > 0) {
        const balance = userData.balance - inputAmount;

        if (balance <= 0) {
          changeBalance(0, balance * -1);
          navigate("/");
          return;
        }

        changeBalance(userData.balance - inputAmount, 0);
        navigate("/");
        return;
      }

      changeBalance(0, inputAmount);
    }

    navigate("/");
  };

  useEffect(() => {
    if (!action) {
      console.log({ action });
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  return (
    <VStack>
      <Input
        type="number"
        value={inputAmount}
        onChange={(e) => {
          if (+e.target.value > 0) {
            setInputAmount(+e.target.value);
          }
        }}
      />
      <Button onClick={onSubmit} color="#fff">
        Submit
      </Button>
    </VStack>
  );
};
