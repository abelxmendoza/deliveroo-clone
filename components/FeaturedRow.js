import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'


const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (

    <View>
      <View className="mt-9 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />

      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,

        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"

      >
        {/* Restaurant Cards */}
        <RestaurantCard 
             id={123}
             imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Wingstop_logo.svg/1200px-Wingstop_logo.svg.png"
             title="Wingstop"
             rating={4.5}
             genre="Wings"
             address="123 Main St."
             short_description="Hot wings and fries"
             dishes={23}
             long={32}
             lat={12}
        />

        <RestaurantCard 
             id={123}
             imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/2/26/The_Habit_Logo.svg/1200px-The_Habit_Logo.svg.png"
             title="The Habit"
             rating={4.5}
             genre="Burgers and Fries"
             address="857 Dumbledore St."
             short_description="Hot wings and fries"
             dishes={23}
             long={32}
             lat={12}
        />

        <RestaurantCard 
             id={123}
             imgUrl="https://discoverlamirada.com/wp-content/uploads/2017/08/flamebroiler2.jpg"
             title="Flame Broiler"
             rating={4.5}
             genre="Healthy"
             address="65321 Coppertone Drive"
             short_description="Hot wings and fries"
             dishes={23}
             long={32}
             lat={12}
        />


      </ScrollView>

    </View>
  )
}

export default FeaturedRow
