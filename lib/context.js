import React, { createContext, useContext, useMemo, useState } from "react";

const VoteFunctionContext = createContext();

export default function VoteFunctionWrapper({ children }) {
    const [voteFunction, setVoteFunction] = useState([]);
    const value = useMemo(() => ({ voteFunction, setVoteFunction }), [voteFunction]);

    return <VoteFunctionContext.Provider value={value}>{children}</VoteFunctionContext.Provider>;
}

export function useVoteFunctionContext() {
    return useContext(VoteFunctionContext);
}
