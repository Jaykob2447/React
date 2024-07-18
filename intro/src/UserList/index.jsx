import ListItem from "./UserListItem";

const USER_DATA = [
  {
    id: 0,
    userName: "some name",
    imageSrc:
      "https://keepsmilingenglish.com/wp-content/uploads/2017/12/diferencia-entre-some-y-any.png",
    userAbout:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse eaque nihil cumque ea ipsa voluptate?",
  },
  {
    id: 1,
    userName: "some name",
    imageSrc:
      "https://static1.squarespace.com/static/5ceafa407824f80001793b84/5ceafcab6e9a7f68cda0e90b/5e3b3db0620bc34f20b7f7a4/1697669435090/some-any.jpg?format=1500w",
    userAbout:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse eaque nihil cumque ea ipsa voluptate?",
  },
];

function List() {
  function createUser(e) {
    return <ListItem user={e} key={e.id} />;
  }

  return (
    <>
      <ul>{USER_DATA.map((e) => createUser(e))}</ul>
    </>
  );
}

export default List;
