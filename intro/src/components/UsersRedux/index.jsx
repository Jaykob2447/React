import { connect } from "react-redux";
import { USERS } from "./../store/slices/userSlice";
import { changeFavorite } from "./../store/slices/userSlice";

const { user1, user2 } = USERS;
function UserRedux({ favorite, setFavorite }) {
  const favoriteHeandler = ({ target: { value } }) => {
    setFavorite(value);
  };
  return (
    <div>
      <div>
        <p>{user1.firstName}</p>
        <p>{user1.lastName}</p>
        <p>{user1.about}</p>
        <div>
          <button onClick={favoriteHeandler} value={favorite}>
            ♡<p>{favorite ? "true" : "false"}</p>
          </button>
        </div>
      </div>
      <div>
        <p>{user2.firstName}</p>
        <p>{user2.lastName}</p>
        <p>{user2.about}</p>
        <div>
          <button onClick={favoriteHeandler} value={favorite}>
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favorite: state.favorite.favorite,
});
const mapDispatchToProps = (dispatch) => ({
  setFavorite: (v) => dispatch(changeFavorite(v)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
