const React = require('react');
const AppLayout = require('./AppLayout');

class Menu_Edit extends React.Component {
  render() {
    const { menu, meal, user } = this.props;
    // console.log(menu);
    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='menu_container'>
            <div className='menu_title'>
              <h2>Edit Menu:</h2>
              <a href='/menu/new'>
                <input type='button' value='+' className='w3-circle addBtn' />
              </a>
            </div>
            <div className='menu_details'>
              <form action={`/menu/${menu.id}?_method=PUT`} method='post'>
                {/* NOTE: the form is pre-populated with values for the server */}
                <div className='menu_breakfast'>
                  <h3>Name</h3>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    defaultValue={menu.name}
                  />
                  <h3 className='menu_breakfast_title'>Breakfast</h3>
                  {/* menu.breakfast.id */}
                  <select
                    className='breakfast_selection'
                    id='breakfast'
                    name='breakfast'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return (
                        <option
                          selected={
                            menu.breakfast && menu.breakfast.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='menu_morning_snack'>
                  <h3 className='menu_morning_snack_title'>
                    Mid Morning Snack
                  </h3>
                  {/* menu.morning_snack.id */}
                  <select
                    className='morning_snack_selection'
                    id='morning_snack'
                    name='morning_snack'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return (
                        <option
                          selected={
                            menu.morning_snack &&
                            menu.morning_snack.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='menu_lunch'>
                  <h3 className='menu_lunch_title'>Lunch</h3>
                  {/* menu.lunch.id */}
                  <select className='lunch_selection' id='lunch' name='lunch'>
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return (
                        <option
                          selected={
                            menu.lunch && menu.lunch.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='menu_afternoon_snack'>
                  <h3 className='menu_afternoon_snack_title'>
                    Mid Afternoon Snack
                  </h3>
                  {/* menu.afternoon_snack.id */}
                  <select
                    className='afternoon_snack_selection'
                    id='afternoon_snack'
                    name='afternoon_snack'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return (
                        <option
                          selected={
                            menu.afternoon_snack &&
                            menu.afternoon_snack.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='menu_dinner'>
                  <h3 className='menu_dinner_title'>Dinner</h3>
                  {/* menu.dinner.id  */}
                  <select
                    className='dinner_selection'
                    id='dinner'
                    name='dinner'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return (
                        <option
                          selected={
                            menu.dinner && menu.dinner.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='menu_evening_snack'>
                  <h3 className='menu_evening_snack_title'>
                    PM Snack (Optional)
                  </h3>
                  {/* menu.evening_snack.id */}
                  <select
                    className='evening_snack_selection'
                    id='evening_snack'
                    name='evening_snack'
                  >
                    <option value='5eb6a45f48c0b73e0e057f30'>
                      --SELECT A MEAL--
                    </option>
                    {meal.map((item, index) => {
                      return (
                        <option
                          selected={
                            menu.evening_snack &&
                            menu.evening_snack.id === item.id
                              ? 'true'
                              : ''
                          }
                          value={item.id}
                        >
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='btn_group'>
                  <input
                    type='submit'
                    value='SAVE CHANGES'
                    className='btn_menu w3-border w3-round-large'
                  />

                  <form action={`/menu/${menu._id}?_method=DELETE`}>
                    <input
                      type='submit'
                      value='DELETE'
                      className='btn_menu w3-border w3-round-large'
                    />
                  </form>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Menu_Edit;
