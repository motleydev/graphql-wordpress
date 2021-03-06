// @flow
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import type { Element as ElementType } from 'relay-wordpress';

type ElementProps = {
  node: ElementType,
  children: any,
};

const attrMap = {
  allowfullscreen: 'allowFullScreen',
  allowtransparency: 'allowTransparency',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  colspan: 'colSpan',
  contentrditable: 'contentEditable',
  crossorigin: 'crossOrigin',
  datetime: 'dateTime',
  frameborder: 'frameBorder',
  marginheight: 'marginHeight',
  marginwidth: 'marginWidth',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  rowspan: 'rowSpan',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  tabindex: 'tabIndex',
};

const camelize = name => attrMap[name] || name;

const Element = ({ node, children }: ElementProps) => {
  const props = (node.attributes || []).reduce((memo, { name, value }) => {
    if (name === 'class') {
      memo.className = value;
    } else {
      memo[camelize(name)] = value;
    }
    return memo;
  }, {});

  return React.createElement(node.tagName, props, children);
};

export default createFragmentContainer(
  Element,
  graphql`
    fragment Element_node on Element {
      tagName
      attributes {
        name
        value
      }
    }
  `
);
