import React, {ErrorInfo} from 'react';
import {TextStyle, View, ViewStyle, ScrollView, Text} from 'react-native';
import {color} from '../../../Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CONTAINER: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  padding: 16,
  paddingVertical: 50,
  backgroundColor: color.background,
};

const ERROR_DETAILS_CONTAINER: ViewStyle = {
  width: '100%',
  maxHeight: '60%',
  backgroundColor: color.line,
  marginVertical: 15,
  paddingHorizontal: 10,
  paddingBottom: 15,
  borderRadius: 6,
};

const BTN_RESET: ViewStyle = {
  paddingHorizontal: 40,

  backgroundColor: color.primary,
};

const TITLE_ERROR: TextStyle = {
  color: color.error,
  fontWeight: 'bold',
  paddingVertical: 15,
};

// Uncomment this and the Text component in the ErrorComponent if
// you want to see a backtrace in your error reporting screen.
// const CONTENT_BACKTRACE: TextStyle = {
//   color: color.dim,
// }

export interface ErrorComponentProps {
  error: Error;
  errorInfo: ErrorInfo | null;
  onReset(): void;
}

/**
 * Describe your component here
 */
export const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <View style={CONTAINER}>
      <Text style={TITLE_ERROR}>{'errorScreen.title'}</Text>
      <Text style={TITLE_ERROR}>{'errorScreen.friendlySubtitle'}</Text>

      <View style={ERROR_DETAILS_CONTAINER}>
        <ScrollView>
          <Text style={TITLE_ERROR}>{`${props.error}`}</Text>

          {/* <Text selectable style={CONTENT_BACKTRACE} text={`${props.errorInfo.componentStack}`} /> */}
        </ScrollView>
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        style={BTN_RESET}
        onPress={props.onReset}>
        <Text>{'errorScreen.reset'}</Text>
      </TouchableOpacity>
    </View>
  );
};
