import Banner from "./home/banner/banner"
import Introduce from "./home/introduce/introduce"
import VideoComponents from './home/video/videoComponent'
import Dynamics from "./home/dynamics/dynamics"

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Introduce></Introduce>
      <VideoComponents></VideoComponents>
      <Dynamics></Dynamics>
    </main>
  )
}
