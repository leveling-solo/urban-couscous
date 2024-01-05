import React, { useEffect, useRef } from 'react';

const useIntersection = (callback, options) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return targetRef;
};

const CountingAnimation = () => {
  const countingRefs = Array.from({ length: 4 }, () => useIntersection(handleIntersection, { threshold: 0.5 }));

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      const elementId = entry.target.querySelector('h1').id;

      if (entry.isIntersecting) {
        // Start animation when the element enters the viewport
        startCountAnimation(elementId, Math.floor(Math.random() * 50) + 1);
      }
    });
  }

  const startCountAnimation = (elementId, targetNumber) => {
    let currentNumber = 1;
    const intervalId = setInterval(() => {
      document.getElementById(elementId).textContent = currentNumber;
      currentNumber++;

      if (currentNumber > targetNumber) {
        clearInterval(intervalId);
      }
    }, 60); // Adjust the interval for smoother animation
  };

  return (
    <div className="part4-box ">
      <div ref={countingRefs[0]} className="animation-box">
        <h1 id="count1">{}</h1>
        <p>people</p>
      </div>
      <div ref={countingRefs[1]} className="animation-box">
        <h1 id="count2">{}</h1>
        <p>Friends</p>
      </div>
      <div ref={countingRefs[2]} className="animation-box">
        <h1 id="count3">{}</h1>
        <p>places</p>
      </div>
      <div ref={countingRefs[3]} className="animation-box">
        <h1 id="count4">{}</h1>
        <p>Travel</p>
      </div>
    </div>
  );
};

export default CountingAnimation;
