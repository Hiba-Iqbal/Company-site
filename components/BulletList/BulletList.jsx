import classList from "./BulletList.module.scss";
const BulletList = ({ options=[] }) => {
  return (
    <div className={classList.mainBullet}>
      <ul>
        {options.map((opt) => (
          <li>{opt}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
