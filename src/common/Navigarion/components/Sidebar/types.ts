import {PropsWithChildren, RefObject} from 'react';

export interface ISidebarProps extends PropsWithChildren {
  innerRef: RefObject<any>
}
