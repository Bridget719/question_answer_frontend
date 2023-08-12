import { View, Text, Input } from '@tarojs/components';
import './index.scss'

const list = [
    {
        title: '这是我给你们设置的静态的推荐信息1',
        types: 'tech,life'
    },
    {
        title: '这是我给你们设置的静态的这是我给你们设置的静态的推荐信息1',
        types: 'tech,life'
    },
    {
        title: '这是我给你们设置的静态的这是我给你们设置的静态的这是我给你们设置的静态的这是我给你们设置的静态的推荐信息1',
        types: 'tech,life'
    },
]
const Home = () => {
    return (
        <View className='container'>
            <View>
                <Input placeholder='搜索信息' className='search-input' />
            </View>
            <View>
                {
                    list.map((item, index) => {
                        return (
                            <View className='recommend-item' key={index}>
                                <View>{item.title}</View>
                                <View className='recommend-item-types'>
                                    {
                                        item.types.split(',').map(item => {
                                            return (
                                                <Text key={item}>#{item} </Text>
                                            )
                                        })}
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};

export default Home;