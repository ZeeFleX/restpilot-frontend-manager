<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Button } from "$lib/components/ui/button";
  import { fn } from '@storybook/test';
  import '../app.css';

  const { Story } = defineMeta({
    title: 'Buttons',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select'},
        options: ['default', 'accent', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      }
    },
    args: {
      onclick: fn(),
      variant: 'default',
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ variant: "default" }} />
<Story name="Accent" args={{ variant: "accent" }} />

