const React = require('react');
const AppLayout = require('./AppLayout');

class User_Index extends React.Component {
  render() {
    const { user, food, menu, meal, filter } = this.props;
    // console.log(user);

    // render method must return something...
    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          {/* USER PANEL */}
          <div className='user_panel'>
            <div className='user_top'>
              <div className='user_photo'>
                <p>
                  <img
                    src='../../images/user-orange.png'
                    alt='User Icon'
                    className='userImage'
                  />
                </p>
              </div>
              <div className='btn_group'>
                <input
                  type='button'
                  value='EDIT'
                  className='btn  w3-border w3-round-large'
                />
                <form action=''>
                  <input
                    type='submit'
                    value='DELETE'
                    className='btn w3-border w3-round-large'
                  />
                </form>
              </div>
            </div>
            <div className='user_info w3-container'>
              <p className='w3-container'>User Name: {user.name}</p>
              <p className='w3-container'>Height: {user.height}</p>
              <p className='w3-container'>
                Starting Weight: {user.startingWeight}
              </p>
              <p className='w3-container'>
                Current Weight: {user.currentWeight}
              </p>
              <p className='w3-container'>Goal Weight: {user.goalWeight}</p>
              <p className='w3-container'>
                Body Type: {user.blueprint.body_type.alias} (
                {user.blueprint.body_type.name})
              </p>
              <p className='w3-container'>
                {user.blueprint.body_type.description}
              </p>
            </div>
          </div>

          {/* MENU PLANNER */}
          <div className='menu_planner'>
            {/* MENU ITEMS */}
            <aside className=''>
              <div className='aside_header mp-bg-orange'>
                <div className='aside_header_title'>
                  <p className='aside_header_title_menus'>MENUS</p>
                  <input type='button' value='+' className='w3-circle addBtn' />
                </div>
                <div className='aside_header_center'>
                  {/* <input type='button' value='+' className='w3-circle addBtn' /> */}
                  {/* <a href='/meal/new' className='addBtn'>
                    <img src='../../images/add.png' alt='Add Button' />
                  </a> */}
                </div>
                <div className='aside_header_seeAll'>
                  <a href='/menu' className='seeAll'>
                    SEE ALL
                  </a>
                </div>
              </div>
              <div className='aside_body'>
                {menu.map((menuItem, index) => {
                  return (
                    <a href={`/menu/${menuItem.id}`} className='menu_list_link'>
                      <div
                        className={`card w3-card w3-hover-shadow card_menu_item`}
                      >
                        <p className='menu_list_name w3-container'>
                          {menuItem.name}
                        </p>
                        {/* <p className='menu_list_type'>{menuItem.date}</p> */}
                      </div>
                    </a>
                  );
                })}
              </div>
            </aside>
            {/* MEAL ITEMS */}
            <aside className=''>
              <div className='aside_header mp-bg-blue'>
                <div className='aside_header_title'>
                  <p className='aside_header_title_meals'>MEALS</p>
                  <input type='button' value='+' className='w3-circle addBtn' />
                </div>
                <div className='aside_header_center'>
                  {/* <a href='/meal/new' className='addBtn'>
                    <img src='../../images/add.png' alt='Add Button' />
                  </a> */}
                </div>
                <div className='aside_header_seeAll'>
                  <a href='/meal' className='seeAll_meals'>
                    SEE ALL
                  </a>
                </div>
              </div>
              <div className='aside_body'>
                {meal.map((mealItem, index) => {
                  return (
                    <a href={`/meal/${mealItem.id}`} className='meal_list_link'>
                      <div
                        className={`card w3-card w3-hover-shadow card_meal_item`}
                      >
                        <p className='meal_list_name w3-container'>
                          {mealItem.name}
                        </p>
                        {/* <p className='meal_list_type w3-container'>
                          {mealItem.type}
                        </p> */}
                      </div>
                    </a>
                  );
                })}
              </div>
            </aside>
            {/* FOOD ITEMS */}
            <aside className=''>
              <div className='aside_header mp-bg-green'>
                <div className='aside_header_title'>
                  <p className='aside_header_title_food'>FOOD</p>
                  <form action={`/user/menu_planner/${user.id}`} method='get'>
                    <select
                      className='food_selection'
                      id='food_selection'
                      name='filter'
                    >
                      <option value='ALL'>ALL</option>
                      <option value='Protein'>Protein</option>
                      <option value='Carbohydrate'>Carbohydrate</option>
                      <option value='Fruit'>Fruit</option>
                      <option value='Vegetable'>Vegetable</option>
                    </select>
                    <input type='submit' value='Filter' />
                  </form>
                </div>
                <div className='aside_header_center'></div>
                <div className='aside_header_seeAll'>
                  <a href='/food' className='seeAll'>
                    SEE ALL
                  </a>
                </div>
              </div>
              <div className='aside_body'>
                {food.map((foodItem, index) => {
                  let foodClass = foodItem.class;
                  foodClass =
                    foodClass.charAt(0).toLowerCase() + foodClass.slice(1);
                  return (
                    <a href={`/food/${foodItem.id}`} className='food_list_link'>
                      <div
                        className={`card w3-card w3-hover-shadow card_food_item ${foodClass}`}
                      >
                        <p className='food_list_name w3-container'>
                          {foodItem.name}
                        </p>
                        {/* <p className='food_list_type w3-container'>
                          Type: {foodItem.type}
                        </p> */}
                      </div>
                    </a>
                  );
                })}

                {/* <div className='card card_food_item'>FOOD 2</div>
                <div className='card card_food_item'>FOOD 3</div> */}
              </div>
            </aside>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = User_Index;
