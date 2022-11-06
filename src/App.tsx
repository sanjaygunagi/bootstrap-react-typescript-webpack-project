import styles from './styles.scss'
import image from './react.png'
import svgImage from './react-native-1.svg'
import { Counter } from './Counter'
import cx from 'classnames'

import stylesapp from './stylesapp.scss'

export const App = () => {
  const hello = 'Hello'
  return (
    <div className={stylesapp.container}>
      <h1 className={cx(styles.containerTitle, styles.containerSmall)}>
        {hello} App React Typescript Webpack {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={image} alt="react" width={200} height={200} />
      <img src={svgImage} alt="react SVG" width={200} height={200} />
      <Counter />
    </div>
  )
}
