import { Button, Menu, Text, useMantineTheme } from "@mantine/core";
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
} from "@tabler/icons";
import styles from "./Button.module.css";
import Link from "next/link";

export function ButtonMenu() {
  const theme = useMantineTheme();
  return (
    <>
      <div className={styles.buttonmain}>
        <Menu transition="pop-top-right" position="top-end" width={220}>
          <h1>Are you a Farmer ?</h1>
          <br></br>
          <Link href="/registerpage">
<<<<<<< HEAD
            <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Login Here</Button>
=======
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              Login Here
            </Button>
>>>>>>> 10384b743864fd056f63c217dfb75ab602b83cf1
          </Link>
          <br></br>
          <br></br>
          <br></br>
          <h1>Or a Industrialist ?</h1>
          <br></br>
          <Link href="/registerpage">
<<<<<<< HEAD
          <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Login Here</Button>
=======
            <Button
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
            >
              Login Here
            </Button>
>>>>>>> 10384b743864fd056f63c217dfb75ab602b83cf1
          </Link>
        </Menu>
      </div>
    </>
  );
}
