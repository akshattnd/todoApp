import React, { useState, FormEvent } from "react";
import { v4 } from "uuid";
import { useTodo } from "../context/context";
const Form: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const { addTodo } = useTodo();
  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todo == undefined || todo == "") {
      return;
    } else {
      addTodo && addTodo({ todo, completed: false, id: v4() });
      setTodo("");
    }
  };
  return (
    <>
      {" "}
      <form onSubmit={add} className="flex ">
        <input
          type="text"
          placeholder="Write Todo..."
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-4 py-2 bg-[#1230AE] text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
};
export default Form;
