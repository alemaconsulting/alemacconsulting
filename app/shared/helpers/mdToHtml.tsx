import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';

import Overrides = MarkdownToJSX.Overrides;

type propsType = { mdSource: string };

const MdToHtml = ({ mdSource }: propsType) => {
  const overrides: Overrides = {
    h1: {
      component: 'h1',
      props: {
        className: 'h1Styles',
      },
    },
    h2: { component: 'h2', props: { className: 'h2Styles' } },
    h3: { component: 'h3', props: { className: 'h3Styles' } },
    h4: { component: 'h4', props: { className: 'h4Styles' } },
    ul: {
      component: 'ul',
      props: {
        className: 'contentUL',
      },
    },
    p: { component: 'p', props: { className: 'pStyles' } },
  };
  return <Markdown options={{ overrides }}>{mdSource}</Markdown>;
};

export default MdToHtml;
