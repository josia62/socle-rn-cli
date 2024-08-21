import { useAuth } from '@/services/redux/ducks/auth';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Navigation = (): any => {
  const { accessToken, credentials } = useSelector(({ auth }) => auth)
  const {updateAccessToken} = useAuth();
  return (
    <>
      <View>
        <Text>
          HELLO WORLD
        </Text>
      </View>
    </>
  );
};

export default Navigation;
