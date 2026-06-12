import { Button, Flex } from "@mantine/core";

import MailFastIcon from "../../assets/icons/MailFastIcon";

interface StepButtonsProps {
  onSubmit: () => void;
  isSubmitting: boolean;
  accordionState: string | null;
  setAccordionState: (index: string | null) => void;
  isNextButtonDisabled?: boolean;
}

function StepButtons(props: StepButtonsProps) {
  const {
    onSubmit,
    isSubmitting,
    accordionState,
    setAccordionState,
    isNextButtonDisabled,
  } = props;

  return (
    <Flex gap="sm">
      {accordionState !== "1" && (
        <Button
          size="sm"
          loading={isSubmitting}
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
          loading={isSubmitting}
          disabled={isNextButtonDisabled}
          onClick={() =>
            setAccordionState((Number(accordionState) + 1).toString())
          }
        >
          {accordionState === "3" ? "VIEW SUMMARY" : "NEXT"}
        </Button>
      )}
      {accordionState === "4" && (
        <Button
          size="sm"
          onClick={onSubmit}
          loading={isSubmitting}
          leftSection={<MailFastIcon />}
        >
          SEND INQUIRY
        </Button>
      )}
    </Flex>
  );
}

export default StepButtons;
