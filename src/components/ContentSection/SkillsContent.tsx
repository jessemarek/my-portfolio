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

  /*
   * Loops through skill badges and toggles a wiggle animation
   * Starts at element that was clicked and moves left and right
   * through entire array
   */
  const toggleWiggle = (index: number) => {
    // set the intial values for left and right pointers
    let left = index;
    let right = left + 1;
    // the length of the array
    const length = skillBadgeRefs.current.length;

    setInterval(() => {
      // if the left is less than 0 and the right is equal
      // to the length then we have toggled the entire array
      if (left < 0 && right === length) {
        // exit the loop
        return;
      } else {
        // toggle the wiggle class name and set the next index to the right
        if (right < skillBadgeRefs.current.length) {
          skillBadgeRefs.current[right].classList.toggle("wiggle");
          right++;
        }
        // toggle the wiggle class name and set the next index to the left
        if (left >= 0) {
          skillBadgeRefs.current[left].classList.toggle("wiggle");
          left--;
        }
      }
    }, 100);
  };

  const clickHandler = (id: string) => {
    toggleWiggle(Number(id));
  };

  return (
    <ul>
      {skillsList.map((skill, index) => (
        <li
          id={`${index}`}
          key={index}
          ref={(el) => (skillBadgeRefs.current[index] = el)}
          onClick={(e) => clickHandler(e.currentTarget.id)}
        >
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
};
