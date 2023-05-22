import axios, { AxiosResponse } from 'axios';
import { IPersonProps } from '../../../interfaces/PersonPorps';
import { apiConfig } from '../../apiConfig';

export const getPersonById = async (
  personID: string | undefined,
): Promise<AxiosResponse<IPersonProps>> => {
  const response = await axios.get<IPersonProps>(
    `https://api.themoviedb.org/3/person/${personID}?api_key=${apiConfig.API_KEY}&append_to_response=combined_credits,external_ids`,
  );
  return response;
};
