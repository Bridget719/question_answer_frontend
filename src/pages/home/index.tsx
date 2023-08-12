import React from 'react';
import { View, Text, Input, Image } from '@tarojs/components';
import './index.scss'

const Home = () => {
    return (
        <View className='container'>
            <View>
                <Input placeholder='搜索信息' className='search-input' />
            </View>
            <View>
                <View className='recommend-item'>
                    <Image src='https://img2.baidu.com/it/u=1059374246,2764131380&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667' />
                    <Text>推荐信息1</Text>
                </View>
                <View className='recommend-item'>
                    <Image src='https://img2.baidu.com/it/u=1059374246,2764131380&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667' />
                    <Text>推荐信息2</Text>
                </View>
                <View className='recommend-item'>
                    <Image src='https://img2.baidu.com/it/u=1059374246,2764131380&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667' />
                    <Text>推荐信息3</Text>
                </View>
            </View>
        </View>
    );
};

export default Home;