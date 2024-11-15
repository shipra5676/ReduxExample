import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTodo } from '../store/actions/todoActions';
import TodoList from '../components/TodoList';
import { fetchData } from '../store/actions/productListAction';
import ProductCard from '../components/ProductCard';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.api); // get stored data from redux store
  const [searchTerm, setSearchTerm] = useState('');
  let [filteredItems, setFilteredItems] = useState();

  /** Get Product list function  starts*/
  useEffect(() => {
    dispatch(fetchData('https://dummyjson.com/products?limit=4&&skip=4'));

  }, [dispatch]);
  /** Get Product list function  ends*/

/*Search event function  starts**/

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Filter items based on searchTerm
    if (value === '') {
      setFilteredItems(data); // If searchTerm is empty, show all items
    } else {
      setFilteredItems(
        data.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };
  /*Search event function  ends**/

  // const handleAddTodo = (event) => {
  //   event.preventDefault();
  //   const text = event.target.elements.text.value;
  //   dispatch(addNewTodo(text));
  //   event.target.reset();
  // };


  return (
    <div>
      <div className='container mx-auto p-6'>
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 p-2">Search Products</h1>
        <input
          type="text"
          className="p-2 w-full border rounded-md mb-4"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
          {filteredItems ? (filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
          ) : (data && data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
          )}
        </div>
      </div>

      {/* <h1>Todo List App</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="text" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
      <TodoList /> */}
    </div>
  );


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available</div>;

};

export default App;
