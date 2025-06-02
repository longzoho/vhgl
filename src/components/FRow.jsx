import React, { useEffect, useRef } from 'react';
import { Row } from 'antd';

const FRow = (props) => {
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rowRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
      { threshold: 0.5 }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current);
      }
    };
  }, []);
  return <Row ref={rowRef}  {...props} style={{ ...(props.style || {}), minHeight: '100vh' }}/>;
}

export default FRow;
