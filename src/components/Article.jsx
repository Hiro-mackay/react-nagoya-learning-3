import React from "react";
import { useHistory,Link } from "react-router-dom";

const Article = props => {
  const { article } = props.location.hasOwnProperty("article")
    ? props.location.article
    : {};

  const history = useHistory();

  return (
    <div>
      {article ? (
        <div>
          <h1>{article.title}</h1>
          <p>投稿時間：{article.date}</p>
          <p>タグ：{article.tag}</p>
          <div>
            <p>{article.content}</p>
          </div>
          <p> <button onClick={() => history.goBack()}>戻る</button></p>
        </div>
      ) : (
        <h1>記事が見つかりません。</h1>
        )}
    </div>
  );
};

export default Article;
