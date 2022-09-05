import { useState, useEffect } from 'react';
import { fetchTeams } from 'api/RedberryApi';

export const useData = () => {
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);
  const [brands, setBrands] = useState([]);
  const [cpus, setCpus] = useState([]);

  // Fetch Select Input Data
  useEffect(() => {
    const getTeams = async () => {
      const { data } = await fetchTeams.get('/teams');

      setTeams(data);
    };

    getTeams();
  }, []);
  useEffect(() => {
    const getPositions = async () => {
      const { data } = await fetchTeams.get('/positions');

      setPositions(data);
    };

    getPositions();
  }, []);
  useEffect(() => {
    const getBrands = async () => {
      const { data } = await fetchTeams.get('/brands');

      setBrands(data);
    };

    getBrands();
  }, []);
  useEffect(() => {
    const getCpu = async () => {
      const { data } = await fetchTeams.get('/cpus');

      setCpus(data);
    };

    getCpu();
  }, []);
  return { teams, positions, brands, cpus };
};
