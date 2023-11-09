import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BoardArea from './BoardArea.tsx'
import AddBox from './AddBox.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        {/* <AddBox /> */}
        <BoardArea />
    </>
);