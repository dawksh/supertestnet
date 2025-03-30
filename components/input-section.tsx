"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Combobox } from "./query/combobox";
import { useAtomValue, useSetAtom } from "jotai";
import { contractAtom, tokenAtom } from "@/lib/atoms";

const InputSection = () => {
    const setContract = useSetAtom(contractAtom);

    const tokenValue = useAtomValue(tokenAtom);
    const setToken = useSetAtom(tokenAtom)

    return (
        <div className="flex flex-row gap-6 items-center justify-center">
            <Combobox />
            <Input placeholder="enter contract address" />
            <p>token id: </p>
            <Button onClick={() => setToken((token) => (token || 0) + 1)}>+</Button>
            <Input
                placeholder="token id"
                type="number"
                value={tokenValue || 0}
                className="w-2/5"
                onChange={(e) => {
                    setContract(e.target.value as `0x${string}`);
                }}
            />
            <Button onClick={() => setToken((token) => ((token || 0) - 1) >= 0 ? ((token || 0) - 1) : token)}>-</Button>
            <Button>query</Button>
        </div>
    );
};

export default InputSection;
