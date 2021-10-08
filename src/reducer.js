export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null,
  // token:
  // 'BQBnPsU6B8uiIQ2oiZwqGXY2eB4Ho4udZhJRLQc2vkpzqEBSUfvAzaK3vOZxFcUBJV4gfR-8_WN5i-5eE9j29M97k9g2oMervIs9a19Kc8W5b6szQ-tcxFvMVQOY6cgr7ySN0Fua1y1Xqj-Yy3R65EjYadF2UhhC98h6wO4cMBDFu5wgem8h',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
