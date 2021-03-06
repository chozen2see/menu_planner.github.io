const React = require('react');
const AppLayout = require('./AppLayout');

class Menu_Show extends React.Component {
  render() {
    const { menu, user } = this.props;
    // console.log(menu);
    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='menu_container'>
            <div className='menu_title'>
              <h2>Menu: {menu.name}</h2>
            </div>
            <div className='menu_details'>
              <div className='menu_breakfast'>
                <h3 className='menu_breakfast_title'>Breakfast</h3>
                <a
                  href={
                    menu.breakfast.name === 'No Meal Selected'
                      ? ''
                      : `../meal/${menu.breakfast.id}`
                  }
                >
                  <h2 className=''>{menu.breakfast.name}</h2>
                </a>
              </div>
              <div className='menu_morning_snack'>
                <h3 className='menu_morning_snack_title'>Mid Morning Snack</h3>
                <a
                  href={
                    menu.morning_snack.name === 'No Meal Selected'
                      ? ''
                      : `../meal/${menu.morning_snack.id}`
                  }
                >
                  <h2 className=''>{menu.morning_snack.name}</h2>
                </a>
              </div>
              <div className='menu_lunch'>
                <h3 className='menu_lunch_title'>Lunch</h3>
                <a
                  href={
                    menu.lunch.name === 'No Meal Selected'
                      ? ''
                      : `../meal/${menu.lunch.id}`
                  }
                >
                  <h2 className=''>{menu.lunch.name}</h2>
                </a>
              </div>
              <div className='menu_afternoon_snack'>
                <h3 className='menu_afternoon_snack_title'>
                  Mid Afternoon Snack
                </h3>
                <a
                  href={
                    menu.afternoon_snack.name === 'No Meal Selected'
                      ? ''
                      : `../meal/${menu.afternoon_snack.id}`
                  }
                >
                  <h2 className=''>{menu.afternoon_snack.name}</h2>
                </a>
              </div>
              <div className='menu_dinner'>
                <h3 className='menu_dinner_title'>Dinner</h3>
                <a
                  href={
                    menu.dinner.name === 'No Meal Selected'
                      ? ''
                      : `../meal/${menu.dinner.id}`
                  }
                >
                  <h2 className=''>{menu.dinner.name}</h2>
                </a>
              </div>
              <div className='menu_evening_snack'>
                <h3 className='menu_evening_snack_title'>
                  PM Snack (Optional)
                </h3>
                <a
                  href={
                    menu.evening_snack.name === 'No Meal Selected'
                      ? ''
                      : `../meal/${menu.evening_snack.id}`
                  }
                >
                  <h2 className=''>{menu.evening_snack.name}</h2>
                </a>
              </div>
              <div className='btn_group'>
                <a href={`./${menu.id}/edit`}>
                  <input
                    type='button'
                    value='EDIT'
                    className='btn_menu w3-border w3-round-large'
                  />
                </a>
                <form action={`/menu/${menu._id}?_method=DELETE`} method='post'>
                  <input
                    type='submit'
                    value='DELETE'
                    className='btn_menu w3-border w3-round-large'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Menu_Show;
