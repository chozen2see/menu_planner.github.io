const React = require('react');
const AppLayout = require('./AppLayout');

class Food_Show extends React.Component {
  render() {
    const { food, user } = this.props;

    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='food_item'>
            <h2>Food: {food.name}</h2>
            <h3>Class: {food.class}</h3>
            <h3>Type: {food.type}</h3>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Food_Show;
