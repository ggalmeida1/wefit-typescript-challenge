import Loader from '../../assets/Loader.svg'
import { HomeSection } from './styles'

function Home() {
  return (
    <HomeSection>
      <h1>Home maluca</h1>
      <img src={Loader} alt='' />
    </HomeSection>
  )
}

export default Home