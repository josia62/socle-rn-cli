import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';

import { HOME } from '@/data/constants/strings';
import { selectAge, selectToken } from '@/services/redux/reducers/selectors/exampleSelectors';
import { exampleAction } from '@/services/redux/reducers/actions/exampleAction';
import { resetExample, updateAge, updateToken } from '@/services/redux/reducers/slices/exampleSlice';

const ReduxScreen = () => {
  const age = useSelector(selectAge);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleAction = async () => {
    dispatch(exampleAction("token", 23));
  }

  const handleSlice = async () => {
    dispatch(resetExample());
  }
  
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>
      {HOME.WELCOME}
      </Text>
      <Button
        title="Press me"
        onPress={handleSlice}
      />
    </View>
  );
};

export default ReduxScreen;
