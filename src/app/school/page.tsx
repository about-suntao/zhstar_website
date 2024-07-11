import React from 'react'
import Banner from '@/components/banner/banner'
import Profile from './profile/profile'
import Performance from './performance/performance'
function School() {
  return (
    <>
      <Banner id={1}></Banner>
      <Profile></Profile>
      <Performance></Performance>
    </>
  )
}

export default School

