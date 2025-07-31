'use client';
import React, { useState, useEffect, useRef } from 'react';

import './BrainSection.css';
// Using a standard img tag for static public asset


const ideas = [
  {
    id: 1,
    title: "AI that visualizes your thoughts",
    description: "What if you could input a random idea and get a mind map or byte-sized video auto-generated with narration and visuals?",
    position: "left"
  },
  {
    id: 2,
    title: "Emotion-aware productivity assistant",
    description: "An AI that knows when you're zoning out, procrastinating, or hyperfocused—and adapts your task list accordingly.",
    position: "right"
  },
  {
    id: 3,
    title: "Invisible feedback loop for learning",
    description: "What if your study tools quietly adapted to your weak spots without you even noticing? Like spaced repetition, but stealth mode.",
    position: "left"
  },
  {
    id: 4,
    title: "Zero-waste recipe recommender",
    description: "Scan your kitchen, and an AI suggests recipes based on leftover ingredients—minimizing waste, maximizing creativity.",
    position: "right"
  }
]



const BrainSection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start initial sequence
          setIsVisible(true);
          
          // Start pulsing after initial appearance
          setTimeout(() => {
            setIsPulsing(true);
          }, 2000);
          
          // Show content after pulsing starts
          setTimeout(() => {
            setShowContent(true);
          }, 3000);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref?.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return (
    <section ref={ref} className="brain-section">
      <div className="brain-content">
        <h2 className="brain-title">Inside my brain</h2>
        <p className="brain-subtitle">
          Welcome to the part of the internet where my raw, unfiltered thoughts exist. 
          Disclaimer: This isn't a structured blog or a polished portfolio: it's a space for 
          the ideas in my head, the tech experiments I think of, and the questions I keep asking myself.
        </p>
      </div>

      <div className="brain-visualization">
        <div className="brain-container">
          <img
            src="/brain.png"
            alt="Digital brain"
            className={`brain-image ${isVisible ? 'visible' : ''} ${isPulsing ? 'pulse' : ''}`}
          />
          <div className={`ideas-container ${showContent ? 'visible' : ''}`}>
            {ideas.map((idea) => (
              <div 
                key={idea.id} 
                className={`idea-block ${idea.position} ${showContent ? 'visible' : ''}`}
              >
                <div className="idea-line"></div>
                <div className="idea-content">
                  <h3>{idea.title}</h3>
                  <p>{idea.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrainSection;