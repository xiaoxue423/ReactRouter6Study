import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  const id = state.id;
  const title = state.title;
  const content = state.content;

  return (
    <div>
      <ul>
        <li>id：{id}</li>
        <li>title：{title}</li>
        <li>content：{content}</li>
      </ul>
    </div>
  );
}
