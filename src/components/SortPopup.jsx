import React from 'react';
import PropTypes from 'prop-types';
const SortPopup = React.memo(function SortPopup({ items, onClickSortType, activeSortType }) {
  //чтобы пропсы чекались на их ссылки со старыми ,чтобы  не производили ререндер (memo)

  const [visiblePopup, setVisiblePopup] = React.useState(false); // для появления ul

  const sortRef = React.useRef(); // ссылка на DOM элемент

  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  // для name в блоке сортировки ИСПРАВИТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    setVisiblePopup(false); // при выборе наша  сортировка убиралась
  };

  const toggleVisiblePopup = () =>
    // Меняем !true !false
    {
      setVisiblePopup(!visiblePopup);
    };

  const handleOutsideClick = (e) => {
    // отлавливаем куда нажали
    if (!e.path.includes(sortRef.current)) {
      // клик внеобласти ,то есть e.path != sortRef.current(нужный div),то убирается
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []); // [] первый рендер страницы(внедрение)

  //Выдаем ссылку
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''} // переворачиваем с помощью css картинку
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>

      {visiblePopup && (
        <div className="sort__popup">
          {' '}
          {/* true значит отображать иначе нет */}
          <ul>
            {items &&
              items.map((
                obj,
                index, // из пропсов массив из всех каттегорий,добавляем к ним li и уникализируем
              ) => (
                <li
                  className={activeSortType === index ? 'active' : ''}
                  onClick={() => onSelectItem(obj)}
                  key={`${obj.type}_${index}`}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  // activeSortType:PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};
SortPopup.defaultProps = {
  items: [],
};

export default SortPopup;
