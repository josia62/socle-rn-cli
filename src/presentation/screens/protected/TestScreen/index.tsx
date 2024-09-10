import { View, Button } from 'react-native'
import { Popup } from '@/presentation/components/Popup';
import { TEST_MESSAGE } from '@/data/constants/strings';

const TestScreen = () => {
  const handleOK = async() => {
    console.log('ok')
  }
  const handleCancel = async() => {
    console.log('cancel')
  }
  return (
    <View style={{ height: '100%', width: '100%'}}>
      <Popup title={TEST_MESSAGE.TITLE_POPUP} message={TEST_MESSAGE.MESSAGE_POPUP} onPress={handleOK} onCancel={handleCancel} />
    </View>
  )
}

export default TestScreen;
