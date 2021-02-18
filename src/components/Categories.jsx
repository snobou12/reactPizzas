import React from 'react'
import PropTypes from 'prop-types';





const Categories =React.memo(function Categories({activeCategory, items,onClickCategory}) { //чтобы пропсы чекались со старыми на ссылку ,чтобы категории не производили ререндер (memo)

  
    
    return (

        <div className="categories">
              <ul>
                <li className={activeCategory===null ? "active": ""} onClick={()=>onClickCategory(null)}>Все</li>
                {
                    items.map((name,index)=>  // из пропсов массив из всех каттегорий,добавляем к ним li и уникализируем
                         <li className={activeCategory === index ? "active" : ""} onClick={()=> onClickCategory(index)} key={`${name}_${index}`}>{name}</li>  // уникализация name :index `` key:value
                         )
                }
              </ul>
            </div>
    )
}
);


Categories.propTypes = { 
  // activeCategory: PropTypes.oneOf([PropTypes.number,null]), // один из
  items:PropTypes.arrayOf(PropTypes.string).isRequired, // массив из стрингов
  onClickCategory:PropTypes.func.isRequired,

};



Categories.defaultProps={ activeCategory: null, items :[] };

export default Categories;
