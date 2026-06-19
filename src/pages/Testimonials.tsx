import { useState } from "react";

import {
  Flex,
  Text,
  Group,
  Stack,
  Title,
  Button,
  Divider,
  Checkbox,
  Textarea,
  TextInput,
} from "@mantine/core";

import PageLayout from "./PageLayout";
import LinkButton from "../components/LinkButton";
import Testimonial from "../components/Testimonial";

import defaultImage from "../assets/images/gypsy.jpg";
import willowImage from "../assets/images/beach_portrait.webp";
import polizziImage from "../assets/images/forest_portrait.webp";
import rImage from "../assets/images/lake_portrait.webp";
import gypsyImage from "../assets/images/gypsy.jpg";
import huntImage from "../assets/images/beach_portrait.webp";
import korneykoImage from "../assets/images/beach_portrait.webp";

import type { TestimonialType } from "../components/Testimonial";

const testimonials: TestimonialType[] = [
  {
    name: "The Jungle Gypsy",
    testimonial: [
      "I’d only ever been photographed a handful of times previously and I feel like before I’d even gotten the chance to step in front of your lens you put whatever insecurities I had at ease. Though you’re well over a foot taller than me the space you hold has always felt safe and trusting and I believe part of that is from the relationship you helped build between us before ever meeting.You took the time to find out who I was and what past experiences I’d had when it came to photographers and showed me nothing but kindness and understanding.",
      "Unlike me, you’re quite structured in the way you shoot. Setting up the exact moments and details you want to capture with a confidence that flowed from you to me without hesitation. Gosh, you could tell me to get into negative degree waters and I’d know that it would be worth it if not just for one amazing shot. Hahaha",
      "You have these incredible visions that you bring to life but being a creative myself, I’ve loved that you’ve opened up the floor for me to voice how I’m craving to be captured and you find a way to collaborate our ideas and turn them into art. It’s never been just about what you want and you make it known.",
      "I truly cannot wait to see what we can create in the future.",
    ],
    image: gypsyImage,
  },
  {
    name: "Wilful.Willow",
    testimonial: [
      "My first experience standing in front of a camera was with M.A.N. The end result was photos more beautiful than any that have been taken to this day, even though I had no clue how to stand or pose in front of a camera. I will always remember that experience and every subsequent interaction and photo shoot with great fondness due to M.A.N’s personable, gentle and fun-loving humorous nature. I would recommend him 100 times over and will continue to work with him in the future.",
    ],
    image: willowImage,
  },
  {
    name: "TheChelseaPolizzi",
    testimonial: [
      "Working with M.A.N was such a great experience, we got to create some amazing work together. I was always super comfortable especially doing nude work. Always directed me without hesitation. It was really nice to work with someone who was nice and easy to click with. I'm always eager to work with him again!",
    ],
    image: polizziImage,
  },
  {
    name: "R",
    testimonial: [
      "Having worked with MAN multiple times over the course of a year there are so many words of praise that I struggle to even bring about because there are so many.",
      "My first ever shoot was with MAN. Both his friendliness and matter of fact way of speaking about photography immediately puts you at ease. He is a true professional who wants the best out of himself for every shoot, and that in turn brings out your own best being in front of his camera. The direction he gives you is so clear and you can tell it's from passion to achieve the best shot he can.",
      "You can watch the man behind MAN mull over his choice of location, lighting and composition with true skill and genuine thought.This coupled with his good nature and humour makes for a fantastic shooting experience. His feedback and direction to the people he is working with is always incredibly valuable. If you are novice to how photography works you learn more about the art (but I suspect he could teach even the most experienced photographers a thing or two) but this in turn makes you a better model. So not only will working with MAN provide amazing photographs but it'll elevate future shoots you plan to do. When you get a photo set back from MAN you might want to set aside a good amount of time because I guarantee you will bask in every detail of the amazing art he has delivered you.",
      "A truely 10/10 experience in every aspect of his work and working with him. A true professional with genuine passion for his craft.",
    ],
    image: rImage,
  },
  {
    name: "F0x Hunt",
    testimonial: [
      "From the initial consultation, to the day of the shoot, my experience with M.A.N felt supported, safe and empowering. Even though it was my first time in front of a camera in this type of setting, I felt super comfortable and loved the direction he gave to ensure we were getting all the amazing angles we needed to capture the shot I was after.",
      "Besides making me feel great, the shoot also taught me so much about photography and how to work with and highlight my favourite parts of my body. A wonderful experience, highly recommend working with M.A.N!",
    ],
    image: huntImage,
  },
  {
    name: "Jane Korneyko",
    testimonial: [
      'I was nervous enough to have postponed the shoot with M.A.N at least twice, feeling silly not knowing how to pose or look "sexy" considering the models he would have worked with. Later, I realised I should never have felt that way in the first place as M.A.N made me feel completely at ease before and throughout the shoot.',
      "Helping with angles and poses that worked for my body, the natural light in my apartment and the look I was going for, he interpreted my brief perfectly making me look and feel beautiful, both during the shoot and in the stunning photos.",
    ],
    image: korneykoImage,
  },
];

function Testimonials() {
  // const [image, setImage] = useState(defaultImage);
  const [showTestimonial, setShowTestimonial] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [permission, setPermission] = useState(false);
  const [successfulSubmission, setSuccessfulSubmission] = useState(false);

  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    displayName: "",
    contact: "",
    testimonial: "",
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", testimonialForm.name);
    formData.append("display_name", testimonialForm.displayName);
    formData.append("contact", testimonialForm.contact);
    formData.append("testimonial", testimonialForm.testimonial);
    formData.append(
      "permission",
      permission ? "Permission granted" : "Permission denied",
    );
    formData.append("access_key", "cd0c7928-bc7b-4c05-a40f-a0afa619602d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSuccessfulSubmission(true);
    } else {
      setShowError(true);
    }

    setIsSubmitting(false);
  };

  return (
    <PageLayout label="Testimonials*" image={defaultImage}>
      {showTestimonial ? (
        successfulSubmission ? (
          <Text size="lg" fs="italic">
            Your testimonial has been successfully submitted.
          </Text>
        ) : (
          <Stack gap="5px" pb="sm">
            <Title>Submit Your Testimonial</Title>
            <Group grow w="100%" gap="sm">
              <TextInput
                radius="md"
                withAsterisk
                label="NAME"
                value={testimonialForm.name}
                onChange={(event) =>
                  setTestimonialForm((prevForm) => ({
                    ...prevForm,
                    name: event.target.value,
                  }))
                }
              />

              <TextInput
                radius="md"
                withAsterisk
                label="DISPLAY NAME"
                value={testimonialForm.displayName}
                onChange={(event) =>
                  setTestimonialForm((prevForm) => ({
                    ...prevForm,
                    displayName: event.target.value,
                  }))
                }
              />
            </Group>

            <TextInput
              radius="md"
              withAsterisk
              label="CONTACT"
              value={testimonialForm.contact}
              onChange={(event) =>
                setTestimonialForm((prevForm) => ({
                  ...prevForm,
                  contact: event.target.value,
                }))
              }
            />

            <Textarea
              size="sm"
              radius="md"
              withAsterisk
              c="steelblue"
              label="TESTIMONIAL"
              value={testimonialForm.testimonial}
              onChange={(event) =>
                setTestimonialForm((prevForm) => ({
                  ...prevForm,
                  testimonial: event.target.value,
                }))
              }
            />

            <Flex
              pt="xs"
              pb="sm"
              w="100%"
              gap="sm"
              justify="space-between"
              align="center"
            >
              <Checkbox
                size="md"
                color="steelblue"
                label="Permission to share image from your shoot alongside testimonial."
                checked={permission}
                onChange={(event) => setPermission(event.currentTarget.checked)}
              />
              <Button onClick={onSubmit} loading={isSubmitting}>
                SUBMIT
              </Button>
            </Flex>

            {showError && (
              <Text c="crimson">
                An error occured. Please send your testimonial direct to me at
                melbourneartnude@gmail.com.
              </Text>
            )}

            <Text fs="italic" size="lg">
              Please note: Your display name is how you'll be credited in your
              testimonial. Be as anonymous as you'd like. Your private name is
              for M.A.N's reference only and your contact details won't be
              shared publicly.
            </Text>
          </Stack>
        )
      ) : (
        <LinkButton
          size="xl"
          onClick={() => setShowTestimonial(true)}
          label="* Worked with me before? Leave your own testimonial."
        />
      )}

      <Stack gap="0">
        <Divider color="#b44655" />

        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={testimonial.name}
            {...testimonial}
            setImage={() => {}}
            showDivider={index !== 0}
          />
        ))}
      </Stack>
    </PageLayout>
  );
}

export default Testimonials;
