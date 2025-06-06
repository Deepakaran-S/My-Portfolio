import React, { useState, useEffect, useRef } from "react";

const SkillCircle = ({ percentage, label, color, isVisible }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  // Animate strokeDashoffset only when visible
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    if (isVisible) {
      const progressOffset = circumference - (percentage / 100) * circumference;
      setOffset(progressOffset);
    } else {
      setOffset(circumference); // reset when not visible
    }
  }, [isVisible, percentage, circumference]);

  return (
    <div className="flex flex-col items-center">
      <svg className="w-40 h-40" viewBox="0 0 170 170">
        <circle
          stroke="#e5e7eb" // Tailwind gray-200 for background ring
          fill="transparent"
          strokeWidth="10"
          r={radius}
          cx="85"
          cy="85"
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={radius}
          cx="85"
          cy="85"
          style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fontSize="24"
          fill={color}
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>
      <p className="mt-4 text-lg font-medium">{label}</p>
    </div>
  );
};

export default function SkillCircles() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex gap-12 justify-center items-center"
    >
      <SkillCircle
        percentage={80}
        label="Design"
        color="#3b82f6" // Tailwind blue-500
        isVisible={isVisible}
      />
      <SkillCircle
        percentage={70}
        label="Development"
        color="#ef4444" // Tailwind red-500
        isVisible={isVisible}
      />
    </div>
  );
}
