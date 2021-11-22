import { Link } from 'react-router-dom';

const PageNotFound = (props) => {
    const { isAuthorized } = props;
  
    const pageName = isAuthorized ? 'home' : 'login';
    const to = isAuthorized ? '/home' : '/';
  
    return (
      <div>
        <h2>SORRY PAGE NOT FOUND</h2>
        <Link to={to}>Go to {pageName}</Link>
      </div>
    );
  };

export default PageNotFound