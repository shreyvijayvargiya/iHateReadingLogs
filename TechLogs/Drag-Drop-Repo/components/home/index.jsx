import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import data from "./data";

const Home = () => {
	const [state, setState] = useState(data);

	const handleDragDrop = (result) => {
		if (!result.destination) return;
		const items = Array.from(state);
		const [reorder] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorder);
		setState(items);
	};

	const DragComponent = ({ item, index }) => (
		<Draggable key={item.id} index={index} draggableId={item.id}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className="p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2"
				>
					<p>{item.name}</p>
				</div>
			)}
		</Draggable>
	);

	return (
		<div>
			<p className="text-3xl text-center">Drag drop example</p>
			<hr className="w-screen" />
			<br />
			<DragDropContext onDragEnd={handleDragDrop}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<div
							ref={provided.innerRef}
							{...provided.droppableProps}
							className="w-3/5 mx-auto"
						>
							{state.map((item, index) => (
								<DragComponent key={item.id} item={item} index={index} />
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};
export default Home;

// const [state, setState] = useState(data);

// const handleDragDrop = (result) => {
//   if (!result.destination) return;
//   const items = Array.from(state);
//   const [reorder] = items.splice(result.source.index, 1);
//   items.splice(result.destination.index, 0, reorder);
//   setState(items);
// };

// const DragComponent = ({ item, index }) => {
//   return (
//     <Draggable key={item.id} index={index} draggableId={item.id}>
//       {(provided) => (
//         <div
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           className="p-4 w-3/5 mx-auto bg-gray-200 rounded-xl hover:bg-gray-300 my-2"
//         >
//           {item.name}
//         </div>
//       )}
//     </Draggable>
//   );
// };
