import { Accordion, Flex, Image, Stack, Text } from "@mantine/core";
import PageLayout from "./PageLayout";

const questions = [
  {
    question:
      "Why should I book you and not some other photographer who is cheaper?",
    answer: [
      "Do you want to know for certain that the space you’re going to be vulnerable in is going to be unquestionably safe and respectful of you and your time? That alone should be enough, in addition to my skills as a photographer and my rates being much cheaper than they should be, I think you’re getting an absolute steal in terms of value for money.",
    ],
  },
  {
    question:
      "Do you work with amateurs or people who have never modelled before?",
    answer: [
      "All the time! I love working with people for their first shoot. It honestly keeps me so inspired and I always love hearing/seeing the reactions from people when they see themselves looking their best!",
    ],
  },
  {
    question:
      "I see you often post your clients photos on social media, what if I just want these photos for myself?",
    answer: [
      "I always have an open and clear discussion with my clients as part of the booking process, and again after the edits have been completed; to make sure I know what they feel comfortable with and what their preferences are for the final product. If you would rather keep the images to yourself then that's ok with me! You’ve paid me for my time and my expertise, the images are yours to do with as you will. If you’re happy for me to proudly display them/you to the world then that’s your decision to consent to and I’ll happily abide by your decision.",
    ],
  },
  {
    question: "What happens after we finish shooting?",
    answer: [
      "Once our shoot day is over, the next step is getting you previews of your images. I send through every single image from our shoot in the interest of transparency. You get to see every photo I took on the day, the good, the bad and the ugly; just to show you that I’m not taking any inappropriate or sneaky photos while you’re not looking. Everything my camera sees, you see too, and this is verifiable by the image file names being sequentially consistent from beginning to end. After you receive your low res previews you just need to make your selections and email me the list of file names you’ve chosen. Next you’ll receive your high resolution edits and then you’ll get to make your final three decisions: Would you like to purchase your RAW images to hold onto forever? Would you like to allow me to post any of our images(if yes, then you decide the specific images and platforms)? How long would you like me to retain your data(by default I hold onto clients' RAW images for 12 months, you can decide if you’d like me to retain them for more or less time)?",
    ],
  },
  {
    question: "What happens to the rest of my images once I receive my edits?",
    answer: [
      "After our shoot is completed you will be able to decide how long I hold onto your images and your sensitive data. By default I will keep all of my clients RAW images and final edits for 12 months, but you can choose for me to delete every single image off my hard drives earlier for your own peace of mind and security, or you can ask me to maintain a safe copy offline for longer than 12 months for a small additional fee. The last option is that you’re most welcome to purchase the RAWs yourself and you can store them however you’d like with the peace of mind knowing where your data is and who has access to it.",
    ],
  },
  {
    question: "What if I want to keep my identity hidden?",
    answer: [
      "I've had lots of conversations with people who love the idea of having their photo taken, but because of work, family or general privacy they didn't want their face or identity shown. Your comfort and safety is of paramount importance to me. I am absolutely happy to accomodate any requests you have regarding your privacy. I am happy to compose my images and pose you in a manner which conceals your face, I can hide tattoos or marks in post production and if you don't wish the images to be posted online then they will remain yours to do with as you please. I only post images that my clients and models have given me permission to post, so you will always have the final say.",
      "Featured here are several images taken for people who wished to have their face or identity kept private.",
    ],
    images: ["hidden-identity-image"],
  },
  {
    question: "Do you shoot with couples?",
    answer: [
      "Absolutely! Some of my favourite shoots have been taking capturing genuine and beautiful connections between people. It's something I love to photograph and it can be much easier to have your photograph taken when it's with someone you love and trust.",
      "Here's a few examples of some beautiful couples I've photographed:",
    ],
    images: ["couple-image"],
  },
  {
    question: "What locations are available to shoot?",
    answer: [
      "I always love shooting outdoors, and I have stunning beach and forest locations I use regularly. I charge a small additional fee for travel time 1hr+ from the CBD. If you'd prefer to stay central I also have a gorgeous studio in Fitzroy called XIXI Studio we can use for no additional fee. If you would feel more comfortable to have me come to you, I am completely happy and capable of bringing my studio lights and cameras to your house, hotel or Airbnb. I’m also completely willing and able to travel interstate with additional costs covered.",
      "Here are several images taken at XiXi studio:",
    ],
    images: ["location-image"],
  },
  {
    question: "What happens if I have to cancel?",
    answer: [
      "To cancel any shoot and receive a full refund you must allow at least 48hrs. This will allow us to fill an empty booking slot or arrange other work. If you cancel with less than 48hrs then your deposit will be deducted from anyone else's booking cost who may be filling your appointment.",
    ],
  },
];

function FAQ() {
  return (
    <PageLayout label="Frequently Asked Questions">
      <Accordion defaultValue="Apples">
        {questions.map(({ question, answer, images }) => (
          <Accordion.Item key={question} value={question}>
            <Accordion.Control>{question.toUpperCase()}</Accordion.Control>
            <Accordion.Panel>
              <Stack>
                {answer.map((string) => (
                  <Text key={string} size="lg">
                    {string}
                  </Text>
                ))}
                {images && (
                  <Flex>
                    {images.map((image) => (
                      <Image key={image} src={image} />
                    ))}
                  </Flex>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </PageLayout>
  );
}

export default FAQ;
