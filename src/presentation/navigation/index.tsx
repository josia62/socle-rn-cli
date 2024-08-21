import { useAuth } from '@/services/redux/ducks/auth';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

const Navigation = (): any => {
  const { accessToken, credentials } = useSelector(({ auth }) => auth)
  const {updateAccessToken} = useAuth();
  return (
    <>
      <View>
      </View>
    </>
  );
};

export default Navigation;
