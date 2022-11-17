import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 25,
            paddingTop: 30,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}

    >
        {/* CategoryCard */}


        <CategoryCard 
            imgUrl="https://www.acouplecooks.com/wp-content/uploads/2020/04/Vegan-Burritos-003s.jpg" 
            title="Sushi"
        />

         <CategoryCard 
            imgUrl="https://www.acouplecooks.com/wp-content/uploads/2020/04/Vegan-Burritos-003s.jpg" 
            title="Burritos"
        />

        <CategoryCard 
            imgUrl="https://links.papareact.com/wru" 
            title="Pizza"
        />


    </ScrollView>
  )
}

export default Categories
