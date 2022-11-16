import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}

    >
        {/* CategoryCard */}


        <CategoryCard 
            imgUrl="https://i.imgur.com/X7ExVWa.jpg" 
            title="Testin"
        />

         <CategoryCard 
            imgUrl="https://www.foodandwine.com/thmb/I_QAIl1ARO5vVzSmC_MFFYHFxs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hatch-chile-smash-burgers-FT-seo-RECIPE0719_0-183c980af99541528d6cfa7f40ca2c21.jpg" 
            title="Testing"
        />

        <CategoryCard 
            imgUrl="https://links.papareact.com/wru" 
            title="Testing"
        />


    </ScrollView>
  )
}

export default Categories
