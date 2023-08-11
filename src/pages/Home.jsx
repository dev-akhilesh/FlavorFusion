import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header
        title={
          <p>
            Taste the World with
            <br /> FlavorFusion!
          </p>
        }
        type='home'
      />

      <section id="recipes" className='md:max-w-[1500px] mx-auto px-4 md:px-20'>
        <Recipes />
      </section>
    </main>
  )
}

export default Home