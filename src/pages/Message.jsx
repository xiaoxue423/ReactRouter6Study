import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const navigate = useNavigate();

  const [messages] = useState([
    { id: "1", title: "消息1", content: "内容1" },
    { id: "2", title: "消息2", content: "内容2" },
    { id: "3", title: "消息3", content: "内容3" },
    { id: "4", title: "消息4", content: "内容4" },
  ]);

  function showDetail(m) {
    navigate("detail", {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content: m.content,
      },
    });
  }

  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            // 路由链接
            <li key={m.id}>
              <Link
                to="detail"
                state={{
                  id: m.id,
                  title: m.title,
                  content: m.content,
                }}
              >
                {m.title}
              </Link>
              <button onClick={() => showDetail(m)}>查看详情</button>
            </li>
          );
        })}
      </ul>
      <h4>下面是Message组件的子组件</h4>
      <hr />
      {/* 指定路由组件的展示位置 */}
      <Outlet />
    </div>
  );
}
