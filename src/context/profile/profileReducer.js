
const profileReducer = (state, action) => {
  switch (action.type) {
    // Global
    case 'set_profiles_loading':
      return {
        ...state,
        all: [],
        isLoading: true
      };
    case 'get_profiles_success':
      return {
        ...state,
        all: action.data,
        isLoading: false
      };
    case 'get_profiles_fail':
      return {
        ...state,
        all: [],
        isLoading: false
      };

    // Profile by id
    case 'set_profile_id_loading':
      return {
        ...state,
        single: null,
        isLoading: true
      };
    case 'get_profile_id_success':
      return {
        ...state,
        single: action.data,
        isLoading: false
      };
    case 'get_profile_id_fail':
      return {
        ...state,
        single: null,
        isLoading: false
      };
    default:
      return state;
  }
}

export default profileReducer;