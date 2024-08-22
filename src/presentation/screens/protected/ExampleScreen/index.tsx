import { View, Button } from 'react-native'
import { UserSA } from '@/services/applicatif/User.sa'

const ExampleScreen = () => {
  const {  getUsersSA, updateUserConnected } = UserSA();
  const update = async() => {
    const dataToSend = { id: '6672bb423c616ed18f2c802c', data: { isConnected: true } }
    updateUserConnected.mutate(dataToSend);
  }
  const { data } = getUsersSA();
  return (
    <View>
      <Button
        title="Press me"
        onPress={update}
      />
    </View>
  )
}

export default ExampleScreen;
