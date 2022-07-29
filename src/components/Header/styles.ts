import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.header)`
  width: 100%;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  z-index: 99999;
`;
