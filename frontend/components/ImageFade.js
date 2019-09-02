import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";
import styled from "styled-components";

const Bcg = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  will-change: opacity;
`;

const slides = [
  {
    id: 0,
    url:
      "photo-1501441858156-e505fb04bfbc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 1,
    url:
      "photo-1524282745852-a463fa495a7f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 2,
    url:
      "photo-1524275406383-49f669cf763a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&fit=max&ixid=eyJhcHBfaWQiOjF9"
  },
  {
    id: 3,
    url:
      "photo-1519554318711-aaf73ece6ff9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
  }
];

const ImageFade = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 6000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <Bcg
      key={key}
      style={{
        ...props,
        backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`
      }}
    />
  ));
};

export default ImageFade;
