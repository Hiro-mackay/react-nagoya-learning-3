import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArticle } from "../actions/Article";
import uuid from "uuid/v4";
import { Link } from "react-router-dom";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();


  const formReset = () => {
    setTitle('');
    setDate('');
    setTag('');
    setContent('');
  }

  const Submit = e => {
    e.preventDefault();

    const article = {
      id: uuid(),
      title: title,
      date: date,
      tag: tag,
      content: content,
      admin: ""
    };

    dispatch(addArticle(article));
    formReset();
  };

  return (
    <div>
      <form>
        <div>
          <label>タイトル：</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>投稿時間：</label>
          <input
            type="text"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>タグ：</label>
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={e => setTag(e.target.value)}
          />
        </div>
        <div>
          <label>本文：</label>
          <textarea
            rows="20"
            cols="100"
            name="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button onClick={e => Submit(e)}>送信</button>
      </form>

      <div>
        <h3>
          <Link to="/">一覧を見る</Link>
        </h3>
      </div>
    </div>
  );
};

export default Editor;
