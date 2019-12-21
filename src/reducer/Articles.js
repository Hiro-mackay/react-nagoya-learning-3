import * as actions from "../actions/ActionType";

export default (state = [], action) => {
  switch (action.type) {
    case actions.ADD_ARTICLE:
      return [
        ...state,
        action.article
      ];

    case actions.UPDATE_ARTICLE:
      return state.map(item => item.id === action.article.id ? action.article : item);

    case actions.DELETE_ARTICLE:
      return state.filter(item => item.id !== action.articleId);

    default:
      return state;
  }
};