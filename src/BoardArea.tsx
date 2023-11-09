import React, { useState} from 'react';
import { DragDropContext, DropResult} from 'react-beautiful-dnd';
import Board from './Board.jsx'

const Users = ["Liza", "Sveta", "Dasha"];

const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
};

const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
};

function BoardArea() {
    const data = {
        Liza: {
            idBoard: "1",
            tasks: [{ 
                idTask: "1", 
                nameUser: "Liza", 
                nameImg: "./ava.jpg", 
                task: "Закончить проект по Frontend-разработке",
                date: "26 May 2023 00:00",
            },
            { 
                idTask: "2", 
                nameUser: "Liza", 
                nameImg: "./ava.jpg", 
                task: "Закончить проект по Backend-разработке",
                date: "26 May 2023 00:00",
            },
            { 
                idTask: "3", 
                nameUser: "Liza", 
                nameImg: "./ava.jpg", 
                task: "Еще одно какое то задание которое срочно нужно кому то сделать, але!",
                date: "26 May 2023 00:00",
            },
            { 
                idTask: "4", 
                nameUser: "Liza", 
                imgSrc: "./ava.jpg", 
                task: "Нужно сделать маникюр, педикюр и вообще сделать все, чтобы я выглядела при параде!",
                date: "26 May 2023 00:00",
            }],
        },
        "Sveta": {
            id: "2",
            tasks: [],
        },
        "Dasha": {
            id: "3",
            tasks: [],
        }
    };
    const [boards, setBoards] = useState(data);

    // const onDragEnd = (result) => {
    //     if (!result.destination) {
    //       return;
    //     }

    //     console.log(boards);
    //     const listCopy = {};
    //     Object.assign(listCopy, boards);
    
    //     const sourceList = listCopy[result.source.droppableId];
    //     const [removedElement, newSourceList] = removeFromList(
    //       sourceList.tasks,
    //       result.source.index
    //     );

    //     listCopy[result.source.droppableId].tasks = newSourceList;

    //     const destinationList = listCopy[result.destination.droppableId];
    //     listCopy[result.destination.droppableId].tasks = addToList(
    //       destinationList.tasks,
    //       result.destination.index,
    //       removedElement
    //     );
            
    //     setBoards(listCopy);

    //     console.log(boards);
    //   };



    const onDragEnd = ({ source, destination }: DropResult) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null
    
        // Make sure we're actually moving the item
        if (
          source.droppableId === destination.droppableId &&
          destination.index === source.index
        )
          return null
    
        // Set start and end variables
        const start = boards[source.droppableId]
        const end = boards[destination.droppableId]
    
        // If start is the same as end, we're in the same column
        if (start === end) {
          // Move the item within the list
          // Start by making a new list without the dragged item

          const newList = start.tasks.filter(
            (_: any, idx: number) => idx !== source.index
          )
            
          console.log(newList);
          // Then insert the item at the right location
          newList.splice(destination.index, 0, start.tasks[source.index])
    
          // Then create a new copy of the column object
          const newCol = {
            idBoard: start.id,
            tasks: newList
          }
    
          // Update the state
          setBoards(state => ({ ...state, [newCol.idBoard]: newCol }))
          return null
        } else {
          // If start is different from end, we need to update multiple columns
          // Filter the start list like before
          const newStartList = start.list.filter(
            (_: any, idx: number) => idx !== source.index
          )
    
          // Create a new start column
          const newStartCol = {
            id: start.id,
            list: newStartList
          }
    
          // Make a new end list array
          const newEndList = end.list
    
          // Insert the item into the end list
          newEndList.splice(destination.index, 0, start.list[source.index])
    
          // Create a new end column
          const newEndCol = {
            id: end.id,
            list: newEndList
          }
    
          // Update the state
          setBoards(state => ({
            ...state,
            [newStartCol.id]: newStartCol,
            [newEndCol.id]: newEndCol
          }))
          return null
        }
      }


    return (
        <DragDropContext onDragEnd={onDragEnd}> 
            <div className='boardsArea'>
                {Object.values(boards).map((item, index) => (
                    <Board 
                        board={item} 
                        key={Users[index]}
                        prefix={index} 
                        name={Users[index]}
                    />  
                ))}
            </div>
        </DragDropContext>
    )
};

export default BoardArea;
