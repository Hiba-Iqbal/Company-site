import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import classList from "./ShowCase.module.scss";
import sample from "../../assets/images/sample/sample1.svg";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import Header from "../Header/Header";
import { showCaseData } from "../../utils/Data/Data";
import Section from "../Section/Section";
import ImageViewer from "../ImageViewer/ImageViewer";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const StyledBtn = ({ children, selected, type, btnColor, ...restProps }) => (
	<>
		<Button
			backgroundColor={selected === type ? "#072227" : "transparent"}
			color={!(selected === type) ? btnColor : "white"}
			fontSize={12}
			fontWeight='semi-bold'
			customClass={classList.buttonHover}
			style={
				(!(selected === type)
					? { border: "none", transiton: "all 300ms ease-in" }
					: { border: "none", transiton: "all 300ms ease-in" },
				{
					borderRadius: "6px",
					transform: "scale(1.1)",
					padding: "8px",
					transiton: "all 300ms ease-in",
				})
			}
			{...restProps}>
			{children}
		</Button>
	</>
);

const AnimatedCards = ({ item, setCurrentImage, setShowModal, index }) => (
	<motion.div
		initial={{ opacity: 0, y: -20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.3, delay: index * 0.04 }}>
		<ProductCard
			setCurrentImage={setCurrentImage}
			setShowModal={setShowModal}
			imageLink={item.img}
		/>
	</motion.div>
);

const ShowCase = ({
	// backgroundColor = "#00FF00",
	backgroundColor = "#659DBD",
	// backgroundColor = "#D79922",
	btnColor = "white",
	// btnColor= "white",
	data,
}) => {
	const [selected, setSelected] = useState("airline");
	const [showModal, setShowModal] = useState(false);
	const [currentImage, setCurrentImage] = useState("");
	// console.log("selected",selected);
	// console.log("logicc", !data)

	const filterData =
		data ||
		showCaseData.filter((item) => {
			// const finder = type || selected;
			const finder = selected;

			return item?.type?.toLowerCase() === finder?.toLowerCase();
		});

	return <></>;
};

export default ShowCase;
