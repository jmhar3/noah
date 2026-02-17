import { Accordion, Text } from "@mantine/core";

import type { PropsWithChildren } from "react";

interface AccordianItemProps extends PropsWithChildren {
  label: string;
  panelNum: string;
  isAccordionItemClickable?: boolean;
  setAccordionState: React.Dispatch<React.SetStateAction<string | null>>;
}

function AccordianItem(props: AccordianItemProps) {
  const {
    label,
    panelNum,
    isAccordionItemClickable = true,
    setAccordionState,
    children,
  } = props;

  return (
    <Accordion.Item value={panelNum} w="100%">
      <Text
        size="1.4em"
        py="md"
        onClick={() => isAccordionItemClickable && setAccordionState(panelNum)}
        style={{ cursor: isAccordionItemClickable ? "pointer" : "default" }}
      >
        {label.toUpperCase()}
      </Text>

      <Accordion.Panel>{children}</Accordion.Panel>
    </Accordion.Item>
  );
}

export default AccordianItem;
