import cx from 'classnames';
import { Counter } from './Counter';
import svgImage from './react-native-1.svg';
import image from './react.png';
import styles from './styles.scss';

import stylesapp from './stylesapp.scss';

import teststyles from './teststyles.scss';

export const App = () => {
  const hello = 'Hello';
  return (
    <div className={stylesapp.container}>
      <h1 className={cx(stylesapp.containerTitle, styles.containerSmall)}>
        {hello} App React Typescript Webpack {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <div className={teststyles.box}>
        <p className={teststyles.boxTitle}>Test styles</p>
      </div>
      <img src={image} alt="react" width={200} height={200} />
      <img src={svgImage} alt="react SVG" width={200} height={200} />
      <Counter />
    </div>
  );
};
