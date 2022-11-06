import './styles.scss'
import image from './react.png'
import svgImage from './react-native-1.svg'
import { Counter } from './Counter'

export const App = () => {
  const hello = 'Hello'
  return (
    <div>
      <h1>
        {hello} App React Typescript Webpack {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={image} alt="react" width={200} height={200} />
      <img src={svgImage} alt="react SVG" width={200} height={200} />
      <Counter />
    </div>
  )
}
