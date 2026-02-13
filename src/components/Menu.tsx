import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

import MenuIcon from "../assets/icons/MenuIcon";

function Menu() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal fullScreen opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button
        leftSection={<MenuIcon />}
        justify="center"
        variant="filled"
        onClick={open}
      >
        MENU
      </Button>
    </>
  );
}

export default Menu;
