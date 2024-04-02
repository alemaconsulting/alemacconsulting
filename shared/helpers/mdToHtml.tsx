import Markdown from 'markdown-to-jsx';

type HTMLTags = keyof JSX.IntrinsicElements;
type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

type Override =
  | RequireAtLeastOne<{
      component: React.ElementType;
      props: object;
    }>
  | React.ElementType;

type Overrides = {
  [tag in HTMLTags]?: Override;
} & {
  [customComponent: string]: Override;
};

type propsType = { mdSource: string };

const MdToHtml = ({ mdSource }: propsType) => {
  const overrides: Overrides = {
    h1: { component: 'h1', props: { className: 'text-4xl font-bold my-4' } },
    h2: { component: 'h2', props: { className: 'text-2xl font-bold my-4' } },
    h3: { component: 'h3', props: { className: 'text-lg font-bold my-2' } },
    h4: { component: 'h4', props: { className: 'text-lg font-bold my-2' } },
    h5: { component: 'h5', props: { className: 'text-lg font-bold my-2' } },
    h6: { component: 'h6', props: { className: 'text-lg font-bold my-2' } },
    pre: {
      component: 'pre',
      props: { className: 'bg-gray-100 p-4 rounded-md overflow-x-auto' },
    },
    code: { component: 'code', props: { className: 'text-gray-800' } },
    div: { component: 'div', props: { className: 'mb-2' } },
    p: { component: 'p', props: { className: 'my-4' } },
    a: {
      component: 'a',
      props: {
        className: 'text-blue-500 hover:underline',
        role: 'link',
        'aria-label': 'external link',
      },
    },
    ul: {
      component: 'ul',
      props: {
        className:
          'list-disc my-4 ml-4 list-image-checkmark flex flex-col sm:grid sm:grid-cols-2 gap-y-6 sm:w-3/4 sm:mx-auto sm:justify-items-start sm:w-full',
      },
    },
    ol: { component: 'ol', props: { className: 'list-decimal my-4 ml-8' } },
    li: { component: 'li', props: { className: '' } },
    img: {
      component: 'img',
      props: {
        className: 'my-4 rounded-md border-2 border-gray-300 p-1',
        alt: '',
        width: '60%',
      },
    },
    figcaption: {
      component: 'figcaption',
      props: { className: 'text-sm text-gray-500 mt-2' },
    },
  };
  return <Markdown options={{ overrides }}>{mdSource}</Markdown>;
};

export default MdToHtml;
