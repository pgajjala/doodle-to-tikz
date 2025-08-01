import streamlit as st
from streamlit_drawable_canvas import st_canvas
from PIL import Image
import numpy as np

st.title("Doodle -> TikZ")

drawing_mode="freedraw"
stroke_width=st.sidebar.slider("Stroke width: ", 1, 25, 3)
stroke_color=st.sidebar.color_picker("Stroke color: ")

canvas_result = st_canvas(
    fill_color="rgba(255, 165, 0, 0.3)",
    stroke_width=stroke_width,
    stroke_color=stroke_color,
    background_color="#FFF",
    height=400,
    width=600,
    drawing_mode=drawing_mode,
    key="canvas",
)