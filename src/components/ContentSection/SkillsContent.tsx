import React, { useState, useRef } from "react";

interface Props {
  content: Skills;
}

export interface Skills {
  type: string;
  details: string[];
}

export const SkillsContent: React.FC<Props> = ({ content: { details } }) => {
  const [skillsList, setSkillsList] = useState<string[]>(details);

  const skillBadgeRefs = useRef<any[]>([]);

  // reorders the items in the array randomly
  const shuffleList = () => {
    const newArray = [...skillsList];
    let i = newArray.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[ri]] = [newArray[ri], newArray[i]];
    }
    setSkillsList(newArray);
  };

  const toggleWiggle = () => {
    // starting index
    let index = 0;
    // will loop through the skill badge refs and toggle class name at set interval
    setInterval(() => {
      // if the index is equal to the length we are done with all the refs
      if (index === skillBadgeRefs.current.length) {
        // exit the loop
        return;
      } else {
        // toggle the wiggle class name and set the next index
        skillBadgeRefs.current[index].classList.toggle("wiggle");
        index++;
      }
    }, 50);
  };

  const clickHandler = () => {
    toggleWiggle();
    // shuffleList();
    // toggleWiggle();
  };

  return (
    <ul>
      {skillsList.map((skill, index) => (
        <li
          key={index}
          ref={(el) => (skillBadgeRefs.current[index] = el)}
          onClick={clickHandler}
        >
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
};
