import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/actions/pizzas';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

export default function Home() {
  //вытаскиваем из редакс пиццы
  const items = useSelector(({ pizzas }) => pizzas.items); // верни нам то, что нужно  items: pizzas.items,
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const { category, sortBy } = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category)); // для сортировки
  }, [category, sortBy]); //

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index)); // чтобы не пересоздавалось ничего и не было подгрузки ячеек памяти(ведь новая анонимная функция всегда новая) и ссылка тоже новая (теперь она одна и та же,даже если произошел ререндер)
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (
    obj, // закидываем наш обьект с пиццами в редакс(карта)
  ) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {
          isLoaded
            ? items.map((obj) => (
                <PizzaBlock
                  onClickAddPizza={handleAddPizzaToCart}
                  key={obj.id}
                  {...obj}
                  addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <PizzaLoadingBlock key={index} />) // Превращает в лоуд блоки,если выше isLoaded false     (...obj- все свойства перекинуты в компонент)
        }
      </div>
    </div>
  );
}
