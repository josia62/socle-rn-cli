import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import { userActions } from '@/services/zustand/actions/user';
import { userStates } from '@/services/zustand/states/user';
import { HOME } from '@/data/constants/strings';
import { useAuth } from '@/services/redux/ducks/auth';

const ReduxScreen = () => {
  const { credentials, accessToken, } = useSelector(({ auth }: any) => auth);
  const {updateAccessToken} = useAuth();
  const { age } = userStates();
  const { incrementAge, handleUpdateAge } = userActions();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>
      {HOME.WELCOME}
      </Text>
    </View>
  );
};

export default ReduxScreen;
