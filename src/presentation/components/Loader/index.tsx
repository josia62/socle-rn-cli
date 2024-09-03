import { Spinner, View } from 'tamagui'

export const Loader = () => {
  return (
    <View style={{position: "absolute", height: '100%', width: '100%', zIndex: 50}} >
      <View className="flex-1 justify-center items-center">
        <Spinner size="large" color="$orange10" />
      </View>
    </View>
  )
}

