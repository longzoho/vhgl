import React, { useEffect, useRef } from 'react';
import { Row } from 'antd';

const FRow = (props) => {
  const rowRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         rowRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //       } else {
  //         console.log('Element is not intersecting, scrollIntoView will not be applied.');
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );
  //
  //   const currentRowRef = rowRef.current;
  //
  //   if (currentRowRef) {
  //     observer.observe(currentRowRef);
  //   }
  //
  //   return () => {
  //     if (currentRowRef) {
  //       observer.unobserve(currentRowRef);
  //     }
  //   };
  // }, []);
  return <Row ref={rowRef}  {...props} style={{ ...(props.style || {}), minHeight: '100vh' }}/>;
}

export default FRow;
