import React from 'react';
import { View, ViewProps } from 'react-native';

import { RneFunctionComponent } from '../helpers';

export type TabViewItemProps = ViewProps;

/** They are individual item of the parent Tab. */
export const TabViewItem: RneFunctionComponent<TabViewItemProps> = ({
  children,
  ...props
}) => {
  return <View {...props}>{React.isValidElement(children) && children}</View>;
};

TabViewItem.displayName = 'TabView.Item';
