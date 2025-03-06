import { useNavigation as nativeUseNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList} from 'types/navigation/Navigation.ts';

const useNavigation = (): NativeStackNavigationProp<RootStackParamList> =>
  nativeUseNavigation<NativeStackNavigationProp<RootStackParamList>>();

export type Navigation = NativeStackNavigationProp<RootStackParamList>

export default useNavigation;
