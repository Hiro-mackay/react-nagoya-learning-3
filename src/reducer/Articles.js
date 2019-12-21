import * as actions from "../actions/ActionType";

export default function(state = [], action){
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        action.article
      ];

    case "UPDATE_ARTICLE":
      return state.map(item => item.id === action.article.id ? action.article : item);

    case "DELETE_ARTICLE":
      return state.filter(item => item.id !== action.articleId);

    default:
      return state;
  }
};