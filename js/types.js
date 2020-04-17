/**
 * @flow
 */

import type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';
import type {SyntheticEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import type {ColorValue} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Event = SyntheticEvent<
  $ReadOnly<{|
    value: number,
    selectedSegmentIndex: number,
  |}>,
>;

export type SegmentedControlProps = $ReadOnly<{|
  ...ViewProps,
  /**
   * The labels for the control's segment buttons, in order.
   */
  values?: $ReadOnlyArray<string>,
  /**
   * The index in `props.values` of the segment to be (pre)selected.
   */
  selectedIndex?: ?number,
  /**
   * Callback that is called when the user taps a segment;
   * passes the segment's value as an argument
   */
  onValueChange?: ?(value: number) => mixed,
  /**
   * Callback that is called when the user taps a segment;
   * passes the event as an argument
   */
  onChange?: ?(event: Event) => mixed,
  /**
   * If false the user won't be able to interact with the control.
   * Default value is true.
   */
  enabled?: boolean,
  /**
   * Accent color of the control.
   */
  tintColor?: ?ColorValue,
  /**
   * Text color of the control.
   * NOTE: this prop will only work for iOS >= 13
   */
  textColor?: ?ColorValue,
  /**
   * Text color of the control when selected.
   * NOTE: this prop will only work for iOS >= 13
   */
  activeTextColor?: ?ColorValue,
  /**
   * Background color of the control.
   * NOTE: this prop will only work for iOS >= 13
   */
  backgroundColor?: ?ColorValue,
  /**
   * If true, then selecting a segment won't persist visually.
   * The `onValueChange` callback will still work as expected.
   */
  momentary?: ?boolean,
  /**
   * (iOS 13 only)
   * Overrides the control's appearance irrespective of the OS theme
   */
  appearance?: 'dark' | 'light',
|}>;
