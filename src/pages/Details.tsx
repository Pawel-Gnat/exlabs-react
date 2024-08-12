import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const DetailsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default DetailsPage;
