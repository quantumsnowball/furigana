import { styled } from '@mui/material'


type Element = any
type Styler = (_: Element) => Element

export const Overflow: Styler = e => styled(e)`
  /* should allow children to overflow by creating a scroll bar itself and keep its height constant */
  overflow: auto;
`;

export const Stretch: Styler = e => styled(e)`
  width: 100%;
  /* take all vertical flex space from parents */
  flex-grow: 1;
`;

export const CenterContent: Styler = e => styled(e)`
  /* self */
  align-self: center;
  /* children */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  align-items: stretch;
  text-align: center;
`;

