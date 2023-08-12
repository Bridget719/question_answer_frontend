import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import Home from '@/pages/home/index.tsx'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      {/* <Text className='welcomeUnshow'>欢迎来到鄢俊雯的页面</Text> */}
      <Home></Home>
    </View>
  )
}
