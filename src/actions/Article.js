import * as actions from './ActionType';

export const addArticle = (article) => ({
  type: actions.ADD_ARTICLE,
  article
});

export const updateArticle = (article) => ({
  type: actions.UPDATE_ARTICLE,
  article
});

export const deleteArticle = (articleId) => ({
  type: actions.DELETE_ARTICLE,
  articleId
});
