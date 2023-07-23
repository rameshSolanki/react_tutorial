import { useState } from "react";

const Todo = () => {
  const [form, setForm] = useState({todo: '', notes: ''});
  const [data, setData] = useState([]);

  const addTodo = () => {
    setData([...data, form]);
    setForm(form);
    setForm({...form, todo: ''});
    setForm({...form, notes: ''});
  };

  const removeTodo = (index) => {
    let newData = data;
    newData.splice(index, 1);
    setData([...newData]);
  }

  const listTodo = data.map((item, index) => (
    <li key={index}>
      <strong>{item.todo}</strong><br /> (<span>{item.notes}</span>)
      <button onClick={() => removeTodo(index)} type="button" className="ml-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Remove</button>

    </li>
  ));

  return (
    <div className="max-w-lg w-full my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <div className="mb-6">
        <label
          htmlFor="todo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Todo
        </label>
        <input
          type="text"
          id="todo"
          value={form.todo}
          onChange={(event) => setForm({...form, todo: event.target.value})}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="notes"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Notes
        </label>
        <input
          type="text"
          id="notes"
          value={form.notes}
          onChange={(event) => setForm({...form, notes: event.target.value})}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button
        onClick={addTodo}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      {
      data.length ? (
        <>
          <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Todos:
          </h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {listTodo}
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Todo;
