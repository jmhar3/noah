import { Text } from "@mantine/core";

import PageLayout from "./PageLayout";

import aboutImage from "../assets/images/m.a.n.png";

function AboutMe() {
  return (
    <PageLayout label="Who am I?" image={aboutImage}>
      <Text py="4em" size="lg">
        So who is M.A.N? Prior to working under the branding of M.A.N I had many
        years experience in both photography and film+tv. I picked up a camera
        around 13yrs old when my dad got me into it as a hobby, just as his dad
        and HIS dad before him. So you could say I’m a fourth generation
        photographer, but I’m the only one who is stupid (stubborn?) enough to
        make this their career and life’s work. Initially my hobby photography
        started as travel photos while on holiday with my family, before
        branching out into street photography and Urban Exploration or Urbex
        photography. For my VCE Media project I created a documentary on Urbex
        and this film made the top 3 of its category nationwide. This was my
        first attempt at delving into the moving image, and not long after this
        I began my career in Film and Television.
        <br />
        This career would take me through many pathways and allow me to wear
        many hats on set. During my 10 years of Film Industry experience I was a
        Location Scout/Manager, 1st and 2nd AC, Camera Operator, 1st and 2nd
        Electrics and a Gaffer. The scale of the productions I worked on varied
        from small music videos to massive car commercials and everything in
        between. My time in this industry highlighted to me that I did not want
        to spend my time working on advertising selling products and companies I
        didn’t believe in. I wanted to use my time and my skills to make a
        bigger difference to individuals in their daily lives.
        <br />
        So this is where the journey of M.A.N begins. At the end of 2019 I began
        this adventure with the idea that taking portraits in a realistic and
        grounded way would be my way to contribute to peoples positive self
        image and mental health, and to combat the rise of apps like Face Tuner
        or the overly edited skin textures and unrealistic aesthetics that
        plague modern media. My ethos has, and will always remain; I want to
        make you look as beautiful/interesting/erotic/different as possible, but
        I always want to capture your individualism and the things that make you
        special. I don’t offer air brushing of the skin, I do not reshape bodies
        or faces, and I don’t add a tan in post. I use all of my knowledge and
        my skills on set to make you look as incredible as possible, but I want
        the representation of you to be the real you. I want you to look and
        feel confident and amazing when you see these images, but I also want
        anyone else who sees this content to understand that this is a real
        human being with flaws and imperfections; but that these are not things
        to hide or to cover up. Rather these are things to be celebrated and to
        be proud of the body that has carried us to this point in our lives.{" "}
        <br />
        If you’ve made it this far, I deeply implore you to contact me so that
        we can celebrate you and the physical embodiment of you that has brought
        you here.
      </Text>
    </PageLayout>
  );
}

export default AboutMe;
