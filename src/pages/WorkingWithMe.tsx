import { Divider, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router";

import PageLayout from "./PageLayout";
import LinkButton from "../components/LinkButton";

import aboutImage from "../assets/images/m.a.n.png";

const info = [
  {
    title: "What I’m like to work with*",
    text: [
      "I understand that male photographers taking images of women in various states of undress has had a bad wrap (with good reason), but I really do show up on set with the best of intentions and the utmost professionalism. I treat our photoshoots like a professional workplace and I expect that you do too.",
      "This is not a place to make remarks about someone's body, age or appearance, or a place to be intoxicated. This is a safe space to enjoy the process of making art together.",
      "When you’re on set with me you know you can expect my 15+ yrs of photography and lighting experience to be present, but above and beyond that the most important tool in my skillset is the ability to make anyone who steps in front of my camera feel comfortable and confident.",
    ],
  },
  {
    title: "What to expect from the booking process",
    text: [
      "Have a look at my packages and find one that suits your needs then get in touch using the booking form. After that I'll be in touch via your preferred method of contact to further refine your ideas and inspiration.",
      "Alternatively, we can arrange a meeting if you'd prefer to brainstorm in person or would just like to meet face-to-face before the big day.",
      "Once we have a clear vision, we'll set a date to make the magic happen!",
    ],
  },
  {
    title: "Time from shooting to receiving edits",
    text: [
      "Within a few days of the shoot, I’ll have uploaded the photos for you to choose from. While you’re busy making your selections, I’ll be creating custom colour-grading profiles tailor made to your image set. Once you’ve made your selections, I’ll have your edits back to you in a week or two. Depending on how long it takes you to make your selection, the whole process from start to finish can be done in as little as two weeks!",
      "If you’ve also shot film, this can take a couple weeks to a month to be developed and scanned.",
    ],
  },
  {
    title: "Where we can shoot",
    text: [
      "I always love shooting outdoors, and I have stunning beach and forest locations I use regularly. I do charge a small additional fee for travel time 1hr+ from the CBD, but I also have a gorgeous studio in Fitzroy called XIXI Studio we can use for no additional fee.",
      "If you would feel more comfortable to have me come to you, I am completely happy and capable of bringing my studio lights and cameras to your house, hotel or Airbnb.",
      "I’m also completely willing and able to travel interstate with additional costs covered.",
    ],
  },
  {
    title: "Privacy + handling of sensitive material",
    text: [
      "Your privacy, safety and security are very important to me. If you decide that you’d like to shoot images with me which may involve nudity or sexually suggestive/explicit content then I want to make sure you’re confident that they will be handled with care and discretion.",
      "Digital images will be stored offline and you are in control of how long I retain this data. By default your RAW images are stored on twin hard drives for 12 months to account for redundancy and data loss, and your final edits are also stored on the cloud. If you would like this data to be stored for more or less time, or you would like to purchase your RAWs, all of these options are available to you.",
      "In addition to digital images, I also shoot 35mm film. If you would like sensitive images captured on the beauty of film I can assure you that I scan and digitally process all of the film myself, so no labs and no other eyes will have access to your images. You are also entitled to the roll of film negatives to keep if you wish, but I’m also capable and willing to archive these safely if you’d prefer.",
    ],
  },
];

function WorkingWithMe() {
  const navigate = useNavigate();

  return (
    <PageLayout label="Working With Me" image={aboutImage}>
      {info.map(({ title, text }, index) => (
        <>
          {index !== 0 && <Divider color="#b44655" />}
          <Stack key={title} gap="sm">
            <Text size="1.4em">{title.toUpperCase()}</Text>
            <Stack>
              {text.map((string) => (
                <Text size="xl" key={string}>
                  {string}
                </Text>
              ))}
            </Stack>
            {index === 0 && (
              <LinkButton
                label="* Don't just take it from me. View my testimonials."
                onClick={() => navigate("/testimonials")}
                size="xl"
              />
            )}
          </Stack>
        </>
      ))}
    </PageLayout>
  );
}

export default WorkingWithMe;
