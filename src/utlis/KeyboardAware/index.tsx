import React from 'react';
import {Keyboard, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import globalStyles from '@globalStyles';

type Props = {
  child: any;
  scrollRef?: any;
};

const KeyboardAware = (props: Props) => {
  return (
    <KeyboardAwareScrollView
      bounces={false}
      contentContainerStyle={globalStyles.container}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <ScrollView
          ref={props.scrollRef ? props.scrollRef : null}
          style={globalStyles.container}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          {props.child && props.child()}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAware;
