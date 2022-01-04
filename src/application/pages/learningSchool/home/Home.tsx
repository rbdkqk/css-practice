import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>
        <Link to={'/learning-school'}>러닝스쿨 HOME</Link>
      </h1>

      <div>
        <Link to={'news'}>NEWS</Link>
        {'  '}
        <Link to={'menu'}>MENU</Link>
        {'  '}
        <Link to={'contact'}>CONTACT</Link>
        {'  '}
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
