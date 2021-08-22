import React, { useReducer } from 'react';
import { get } from '../../utils/api';
import ProfileContext from './profileContext';
import profileReducer from './profileReducer';
import { URL_API_TWITTER_PROFILE } from "../../utils/constants";

const ProfileState = props => {
  const initialState = {
    all: [],
    single: null,
    isLoading: false,
  }

  const [state, dispatch] = useReducer(profileReducer, initialState);

  const getProfiles = async () => {
    dispatch({ type: 'set_profiles_loading', isLoading: true });

    try {
      const url = `${URL_API_TWITTER_PROFILE}/profiles`;

      const result = await get(url);
      dispatch({
        type: 'get_profiles_success',
        data: result.data,
      });
    } catch (error) {
      dispatch({ type: 'get_profiles_fail', error });
      console.log('error', error);
    }
  }

  const getProfileById = async (id) => {
    dispatch({ type: 'set_profile_id_loading', isLoading: true });

    try {
      const url = `${URL_API_TWITTER_PROFILE}/profile/${id}`;

      const result = await get(url);
      console.log("🚀 ~ file: ProfileState.js ~ line 39 ~ getProfileById ~ result", result)
      dispatch({
        type: 'get_profile_id_success',
        data: result.data,
      });
    } catch (error) {
      dispatch({ type: 'get_profile_id_fail', error });
      console.log('error', error);
    }
  }

  return <ProfileContext.Provider
    value={{
      ...state,
      getProfiles,
      getProfileById,
    }}
  >
    {props.children}
  </ProfileContext.Provider>;
}

export default ProfileState;
