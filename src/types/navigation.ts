import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined;
  Main: { userName?: string } | undefined;
  Details: {
    serviceId: string;
    title: string;
    description: string;
    icon: string;
  };
};

export type MainTabParamList = {
  Home: undefined;
  Services: undefined;
  Profile: undefined;
};

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;