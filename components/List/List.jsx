import Paragraph from "../Paragraph/Paragraph";
import classList from "./List.module.scss";

const List = ({children }) => {
    return (
        <div>
            <ul className={classList.wrap}>
                <li>
                    <Paragraph>{children}</Paragraph>
                </li>
            </ul>
        </div>
    );
};

export default List;
