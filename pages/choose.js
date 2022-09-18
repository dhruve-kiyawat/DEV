import { Button } from '@mantine/core';
import { IconBrandTwitter } from '@tabler/icons';

function Demo() {
  return (
    <button style="position: absolute; left: 50%; transform: translateX(-50%);">Click Me</button>
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/mantinedev"
      leftIcon={<IconBrandTwitter size={18} />}
      
      styles={(theme) => ({
        root: {
          backgroundColor: '#00acee',
          border: 10,
          height: 420,
          paddingLeft: 200,
          paddingRight: 100,

          '&:hover': {
            backgroundColor: theme.fn.darken('#00acee', 0.05),
          },
        },

        leftIcon: {
          marginRight: 40,
        },
      })}
    >
      Follow on Twitter
    </Button>
  );
}
export default Demo;