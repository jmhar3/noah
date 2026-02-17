import { Button, Flex } from "@mantine/core";

import MailFastIcon from "../../assets/icons/MailFastIcon";

interface StepButtonsProps {
  onSubmit: () => void;
  accordionState: string | null;
  setAccordionState: React.Dispatch<React.SetStateAction<string | null>>;
  isNextButtonDisabled?: boolean;
}

function StepButtons(props: StepButtonsProps) {
  const { onSubmit, accordionState, setAccordionState, isNextButtonDisabled } =
    props;

  return (
    <Flex gap="sm">
      {accordionState !== "1" && (
        <Button
          size="sm"
          onClick={() =>
            setAccordionState((Number(accordionState) - 1).toString())
          }
        >
          PREV
        </Button>
      )}
      {accordionState !== "4" && (
        <Button
          size="sm"
          disabled={isNextButtonDisabled}
          onClick={() =>
            setAccordionState((Number(accordionState) + 1).toString())
          }
        >
          {accordionState === "3" ? "VIEW SUMMARY" : "NEXT"}
        </Button>
      )}
      {accordionState === "4" && (
        <Button size="sm" leftSection={<MailFastIcon />} onClick={onSubmit}>
          SEND INQUIRY
        </Button>
      )}
    </Flex>
  );
}

export default StepButtons;
