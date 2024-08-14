import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default DetailsPage;
