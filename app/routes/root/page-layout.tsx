import { Link, useNavigate } from 'react-router';
import { logoutUser } from '~/appwrite/auth';

const PageLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/sign-in');
  };

  return (
    <div>
      <Link to={'/dashboard'}>Go to Dashboard</Link>
    </div>
  );
};
export default PageLayout;
