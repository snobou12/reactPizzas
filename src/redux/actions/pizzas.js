import axios from 'axios';

export const setLoaded = (value) => ({
  type: 'SET_LOADED',
  payload: value,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false)); // когда еще нет API то делай нам плез loadingBlocks
  // асинхронная функция будет с помощью redux thunk ,тип thunk чекает анонимная это функция или просто передаваемый обьект

  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data)); //  (ТО ЕСТЬ data.pizzas(обьект) кинулся в redux c помощью диспатча)
    });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
