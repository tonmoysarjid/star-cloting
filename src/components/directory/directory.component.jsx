
import CategoryItem from '../category-item/category-item.component.jsx';
import './directory.styles.scss';


const Directory = ({catagories}) => {

    return (
        <div className="categories-container">
          {catagories.map((category) => {
            return (
              <CategoryItem key={category.id} category={category} />
            )
          })}
        </div>
      );
}

export default Directory;