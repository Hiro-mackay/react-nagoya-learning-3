import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteArticle } from '../actions/Article';

const Home = () => {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteArticle(id));
  }

  if (articles.length !== 0) {
    return (
      <div>
        <Link to="/editor">記事を投稿する</Link>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.id}>
                {article.title}
                <button>
                  <Link
                    to={{
                      pathname: `/article/${article.id}`,
                      article: { article }
                    }}
                  >
                    詳細をみる
                  </Link>
                </button>
                <button onClick={()=>onDelete(article.id)}>
                  削除する
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1>記事がまだありません。</h1>
        <Link to="/editor">記事を投稿する</Link>
      </div>
    );
  }
};

export default Home;
