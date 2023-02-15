import React, { useState } from 'react';
import './ExpandingList.css';


function ExpandingList() {

  const data = [
    {
      category: "Intervals",
      items: [
        {
          problemId: 45,
          problemName: "Implement Trie Prefix Tree",
          problemDifficulty: "Medium",
          problemLinkToCode: "Link to code"
        },
        {
          problemId: 15,
          problemName: "Design Add And Search Words Data Structure",
          problemDifficulty: "Hard",
          problemLinkToCode: "Link to code"
        },
        {
          problemId: 9465,
          problemName: "Word Search II",
          problemDifficulty: "Medium",
          problemLinkToCode: "Link to code"
        },
        {
          problemId: 47,
          problemName: "Design Twitter",
          problemDifficulty: "Medium",
          problemLinkToCode: "Link to code"
        },
        {
          problemId: 3186,
          problemName: "Find Median From Data Stream",
          problemDifficulty: "Ease",
          problemLinkToCode: "Link to code"
        },
      ]
    },
    {
      category: "Arrays & Hashing",
      items: [
        {
          problemId: 147,
          problemName: "Implement Trie Prefix Tree",
          problemDifficulty: "Medium",
          problemLinkToCode: "Link to code"
        },
        {
          problemId: 258,
          problemName: "Design Add And Search Words Data Structure",
          problemDifficulty: "Hard",
          problemLinkToCode: "Link to code"
        },
        {
          problemId: 369,
          problemName: "Word Search II",
          problemDifficulty: "Medium",
          problemLinkToCode: "Link to code"
        },
      ]
    },
    {
      category: "Binary Search",
      items: [
        {
          problemId: 789,
          problemName: "Implement Trie Prefix Tree",
          problemDifficulty: "Medium",
          problemLinkToCode: "Link to code"
        },
        {
          problemId: 456,
          problemName: "Design Add And Search Words Data Structure",
          problemDifficulty: "Hard",
          problemLinkToCode: "Link to code"
        },
        {
          problemId: 123,
          problemName: "Word Search II",
          problemDifficulty: "Medium",
          problemLinkToCode: "Link to code"
        },
      ]
    }
  ];


  const [openedCategory, setOpenCategory] = useState([]);

  const toggleList = (index) => {
    setOpenCategory((prevState) => {
      const updOpenedCategory = [...prevState];
      updOpenedCategory[index] = !updOpenedCategory[index];
      return updOpenedCategory;
    });

  };


  const [lists, setLists] = useState(data);
  const addNewCategory = () => {
    let name = prompt('type category name', 'CATEGORY NAME');
    setLists([
      ...lists,
      {
        category: name,
        items: []
      }
    ])
  };

  const addNewProblem = (val, index) => {
    let aa = JSON.stringify(lists);
    let bb = JSON.parse(aa);
    bb[index].items.push({
      problemId: '000',
      problemName: val,
      problemDifficulty: "Medium",
      problemLinkToCode: "Link to code"
    });
    setLists(bb);
  }


  return (
    <div>
      <button onClick={addNewCategory} className="add">ADD CATEGORY</button>


      {lists.map((list, index) => (
        <div key={index} className="lists">

          <button onClick={() => toggleList(index)} className={`list__toggle ${openedCategory[index] ? "open" : ""}`}>
            {/* {open[index] ? `Скрыть ${list.taskTitle}` : `Показать ${list.taskTitle}`} */}
            {list.category}
          </button>

          <ul className={`list ${openedCategory[index] ? "open" : ""}`}>
            <div className="list__body">
              <div>ADD NEW PROBLEM
                <input placeholder='type problem name' onBlur={(event) => addNewProblem(event.target.value, index)} type="text" />
              </div>
              <div className="list__header">
                <div className="list__id">ID</div>
                <div className="list__problem">Problem</div>
                <div className="list__difficulty">Difficulty</div>
                <div className="list__code">Code</div>
              </div>

              {list.items.map((item, index) => (
                <li key={index} className="list__item item">
                  <div className="item__id">{item.problemId}</div>
                  <div className="item__name">{item.problemName}</div>
                  <div className="item__difficulty">{item.problemDifficulty}</div>
                  <div className="item__link">{item.problemLinkToCode}</div>
                </li>
              ))}
            </div>

          </ul>

        </div>
      ))}

    </div>
  );
}




export default ExpandingList;