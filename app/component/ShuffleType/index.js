"use client"
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

function randChar() {
 let c = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";
 c = c[Math.floor(Math.random() * c.length)];
 return (Math.random() > 0.5) ? c : c.toUpperCase();
}

const ShuffleType = ({ text, classtype }) => {
 const [arr1, setArr1] = useState(text.split(''));
 const [arr2, setArr2] = useState(Array(text.length).fill(''));
 const [color, setColor] = useState('#fff');
 const [background, setBackground] = useState('#bada55');

 useEffect(() => {
    if (classtype === 'fromRight') {
      setArr2(arr1);
    } else {
      setArr2(arr1.map(randChar));
    }
 }, [classtype]);

 useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
          setArr2(arr1); // Update the state with the final word when the animation is complete
      }
  });
    let step = 0;
    tl.fromTo(null, {
        innerHTML: arr2.join(''),
        color: color,
        background: background
     }, {
        duration: arr1.length /14,
        ease: 'power4.in',
        delay: 0.1,
        color: '#fff',
        background: '#000',
        onUpdate: () => {
          const p = Math.floor(tl.progress() * (arr1.length));
          if (step !== p) {
              step = p;
              const newArr2 = arr2.slice(); // Create a shallow copy of arr2
        for (let i = 0; i < newArr2.length; i++) {
            if (newArr2[i] === '') {
                // If the progress has reached the index, replace the placeholder with the correct character
                if (p >= i) {
                    newArr2[i] = arr1[i];
                } else {
                    // Otherwise, keep the placeholder or replace it with a random character
                    newArr2[i] = randChar();
                }
            }
        }
              setArr2(newArr2);
          }
      }
     });
    }, [arr1]);
 return <div >{arr2.join('')}</div>;
};

export default ShuffleType;
