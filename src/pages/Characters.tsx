import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CharactersPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default CharactersPage;
