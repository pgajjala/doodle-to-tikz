'use client'; // This is a client component

import React, { useRef, useEffect } from 'react';
import * as fabric from 'fabric';

const Canvas = () => {
  const canvasEl = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let canvas: fabric.Canvas | undefined;
    if (canvasEl.current) {
      canvas = new fabric.Canvas(canvasEl.current);
      // Future logic for drawing will go here
    }
    return () => {
      if (canvas) {
        canvas.dispose();
      }
    };
  }, []);

  return <canvas ref={canvasEl} width="600" height="400" style={{ border: '1px solid black' }} />;
};

export default Canvas;