import * as actions from './ActionType';

export const addArticle = function(article){
  type: "ADD_ARTICLE",
  article
};

export const updateArticle = function(article){
  type: "UPDATE_ARTICLE",
  article
};

export const deleteArticle = (articleId) => ({
  type: "DELETE_ARTICLE",
  articleId
});
