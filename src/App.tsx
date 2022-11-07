import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchPosts } from './slices/userSlice';
import { AppDispatch } from './store/store';

export const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch<AppDispatch>();

  console.log(state);

  // const [user, setUser] = useState([]);
  const [name, setName] = useState('');

  return (
    <div>
      {/*       <h1 className={cx(stylesapp.containerTitle, styles.containerSmall)}>
        {hello} App React Typescript Webpack {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <div className={teststyles.box}>
        <p className={teststyles.boxTitle}>Test styles</p>
      </div>
      <img src={image} alt="react" width={200} height={200} />
      <img src={svgImage} alt="react SVG" width={200} height={200} />
      <Counter /> */}

      {/* <h1>{state[0]}</h1> */}

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch(addUser(name))}>Add</button>
      <button onClick={() => dispatch(fetchPosts())}>get data</button>
    </div>
  );
};
