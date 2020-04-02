import React, { Component } from "react";
import "./List.css";
import Item from "./Item";
import Item2 from "./Item2";

class List extends Component {
   render() {
      const { todos, onToggle, onRemove, numRatign } = this.props;

      return (
         <div className="List">
            {todos.map(todo => {
               return (
                  <Item2
                     key={todo.id}
                     todo={todo}
                     onToggle={onToggle}
                     onRemove={onRemove}
                     numRatign={numRatign}
                  />
               );
            })}
         </div>
      );
   }
}

export default List;
