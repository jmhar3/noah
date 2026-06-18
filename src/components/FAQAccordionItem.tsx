import { Accordion, Flex, Image, Stack, Text } from "@mantine/core";

interface FAQAccordionItemProps {
  question: string;
  answer: string[];
  images?: string[];
  index: string;
  onSelectQuestion: (index: string, image?: string) => void;
  setImage: (image: string) => void;
}

function FAQAccordionItem(props: FAQAccordionItemProps) {
  const { question, answer, images, index, onSelectQuestion, setImage } = props;

  return (
    <Accordion.Item key={question} value={index} w="100%">
      <Text
        py="md"
        size="1.4em"
        style={{ cursor: "pointer" }}
        onClick={() => onSelectQuestion(index, images?.[0])}
      >
        {question.toUpperCase()}
      </Text>
      <Accordion.Panel>
        <Stack>
          {answer.map((string) => (
            <Text key={string} size="xl">
              {string}
            </Text>
          ))}
          {images && (
            <Flex gap="sm">
              {images.map((image) => (
                <Image
                  mah="9em"
                  key={image}
                  src={image}
                  bdrs="sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => setImage(image)}
                />
              ))}
            </Flex>
          )}
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default FAQAccordionItem;
