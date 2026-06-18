import { useState } from "react";

import {
  Tabs,
  Text,
  Stack,
  Divider,
  Accordion,
  SegmentedControl,
} from "@mantine/core";

import PageLayout from "./PageLayout";
import PortfolioImage from "../components/PortfolioImage";

import { portfolio } from "../helpers/portfolio";

function Portfolio() {
  const [activeTab, setActiveTab] = useState<string | null>("0");

  return (
    <PageLayout
      label={`Explore My ${portfolio[Number(activeTab)].label} Work`}
      image={portfolio[Number(activeTab)].images[0]}
    >
      <Tabs
        variant="unstyled"
        color="#b44655"
        value={activeTab}
        onChange={setActiveTab}
      >
        <SegmentedControl
          fullWidth
          radius="sm"
          bg="floralwhite"
          color="#b44655"
          bd="solid 1px steelblue"
          value={activeTab || "0"}
          onChange={(value: string) => setActiveTab(value)}
          data={[
            { label: "DIGITAL", value: "0" },
            { label: "FILM", value: "1" },
            { label: "KINK", value: "2" },
          ]}
        />
        {/*<Tabs.List grow>
          {portfolio.map((portfolioGallery, index) => {
            return (
              <Tabs.Tab key={portfolioGallery.label} value={index.toString()}>
                <Text
                  py="md"
                  size="1.4em"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveTab(index.toString())}
                >
                  {portfolioGallery.label.toUpperCase()}
                </Text>
              </Tabs.Tab>
            );
          })}
        </Tabs.List>*/}

        {portfolio.map((portfolioGallery, index) => {
          return (
            <Tabs.Panel
              w="100%"
              value={index.toString()}
              key={portfolioGallery.pathname}
            >
              <Stack pt="lg">
                <Text size="xl">{portfolioGallery.description}</Text>

                <Divider color="#b44655" />

                {portfolioGallery.images.map((image) => (
                  <PortfolioImage key={image} image={image} />
                ))}
              </Stack>
            </Tabs.Panel>
          );
        })}
      </Tabs>
      <Accordion
        value={activeTab}
        onChange={(index) => setActiveTab(index || "0")}
        styles={{ item: { borderColor: "#b44655" } }}
      ></Accordion>
    </PageLayout>
  );
}

export default Portfolio;
