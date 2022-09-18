import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import image from "../../public/img5.jpg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span class="text-success" className={classes}>
                Need of KrishiUrja
              </span>{" "}
              <br />
            </Title>
            <Text color="dimmed" mt="md">
              With the expansion of the world economy, energy consumption is
              rising daily. The problem of increasing energy consumption must be
              a top priority for those who are incharge of power generation,
              governments, policymakers, and other decision-makers. Compared to
              renewable energy sources, fossil fuels are thought to be limited.
              When evaluating the data on biomass-based power generation, a
              number of factors have been taken into account because bioenergy
              is one of the most significant sources of renewable energy.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Anonymous</b>{" "}
                {"- Lets nuture the nature,so that we can have better future."}
              </List.Item>
              <List.Item>
                <b>Mahatma Gandhi</b>{" "}
                {
                  "– Earth provides enough to satisfy every man's needs,but not every man's greed."
                }
              </List.Item>
              <List.Item>
                <b>Lady Bird johnson</b> {"– The environment is where we all meet;where all have a mutual interest; it is the one thing all of us share."}
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                {"Farmer's data"}
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                {"Industrialist's data"}
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
