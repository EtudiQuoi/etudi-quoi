import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import styled from "@emotion/styled";

import { useVoteFunctionContext } from "../lib/voteFunctionContext";

let velocity = 0;
let direction = undefined;

export const Card = ({ children, style, onVote, id, ...props }) => {
    // motion stuff
    const cardElem = useRef(null);

    const { setVoteFunction } = useVoteFunctionContext();

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const controls = useAnimation();

    const [constrained, setConstrained] = useState(true);

    const getVote = (childNode, parentNode) => {
        const childRect = childNode.getBoundingClientRect();
        const parentRect = parentNode.getBoundingClientRect();
        let result = parentRect.left >= childRect.right ? -1 : parentRect.right <= childRect.left ? 1 : undefined;
        if (parentRect.top >= childRect.bottom) result = 0;
        return result;
    };

    // determine direction of swipe based on velocity
    const getDirection = () => {
        return velocity >= 1 ? "right" : velocity <= -1 ? "left" : undefined;
    };

    const getTrajectory = () => {
        velocity = x.getVelocity();
        direction = getDirection();
    };

    const flyAway = (min) => {
        const flyAwayDistance = (direction) => {
            const parentWidth = cardElem.current.parentNode.getBoundingClientRect().width;
            const childWidth = cardElem.current.getBoundingClientRect().width;
            return direction === "left" ? -parentWidth / 2 - childWidth / 2 : parentWidth / 2 + childWidth / 2;
        };

        const flyAwayDistanceY = () => {
            const parentHeight = cardElem.current.parentNode.getBoundingClientRect().height;
            return -parentHeight * 2;
        };

        if (direction === "pass" && Math.abs(velocity) > min) {
            setConstrained(false);
            controls.start({
                y: flyAwayDistanceY(),
            });
        } else if (direction && Math.abs(velocity) > min) {
            setConstrained(false);
            controls.start({
                x: flyAwayDistance(direction),
            });
        }
    };

    useEffect(() => {
        const handleVote = (dir) => {
            if (!cardElem?.current) return;
            direction = dir;
            velocity = 600;
            flyAway(500);
        };

        props.drag && setVoteFunction(() => handleVote);
    }, [props.drag]);

    useEffect(() => {
        const unsubscribeX = x.onChange(() => {
            const childNode = cardElem.current;
            const parentNode = cardElem.current.parentNode;
            const result = getVote(childNode, parentNode);
            result !== undefined && onVote(result);
        });

        const unsubscribeY = y.onChange(() => {
            const childNode = cardElem.current;
            const parentNode = cardElem.current.parentNode;
            const result = getVote(childNode, parentNode);
            result !== undefined && onVote(result);
        });

        const unsub = () => {
            unsubscribeX();
            unsubscribeY();
        }

        return () => unsub();
    });

    return (
        <StyledCard
            animate={controls}
            dragConstraints={constrained && { left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={{ left: 1, right: 1, top: 1, bottom: 0.5 }}
            ref={cardElem}
            style={{ x, y }}
            onDrag={getTrajectory}
            onDragEnd={() => flyAway(500)}
            whileTap={{ scale: 1.1 }}
            {...props}
        >
            {children}
        </StyledCard>
    );
};

const StyledCard = styled(motion.div)`
    position: absolute;
`;
