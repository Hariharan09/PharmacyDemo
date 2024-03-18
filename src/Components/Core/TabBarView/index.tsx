import {color} from '@Theme/Color';
import React, {FC, useState} from 'react';
import {TabBar, TabView} from 'react-native-tab-view';
import {TabBarViewProps} from './interfaces';
import {fonts} from '@Utils/Fonts';

const TabBarView: FC<TabBarViewProps> = ({
  routes,
  renderSceneData,
  position,
  topTabHeight,
}) => {
  const [index, setIndex] = useState(0);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: color.primaryButton, top: topTabHeight}}
      style={{backgroundColor: color.white}}
      // eslint-disable-next-line react-native/no-inline-styles
      labelStyle={{
        color: color.black,
        fontSize: 9,
        fontFamily: fonts.medium,
        letterSpacing: 0.5,
      }}
    />
  );

  return (
    <>
      <TabView
        tabBarPosition={position}
        navigationState={{index, routes}}
        renderScene={renderSceneData}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </>
  );
};

export {TabBarView};
