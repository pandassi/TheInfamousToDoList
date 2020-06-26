import React from "react";
import Icon from "./x.js";
import "./styles.css";

function List(props) {
  const myItems = (
    <ul>
      <span>
        {props.items.map(item => (
          <li key={item.id}>
            <div className="list">
              {item.value}

              <p
                className="delete"
                icon="delete"
                onClick={() => props.deleteItem(item.id)}
              >
                <Icon />
              </p>
            </div>
          </li>
        ))}
      </span>
    </ul>
  );

  return <div>{myItems}</div>;
}
export default List;
