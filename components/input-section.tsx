"use client";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Combobox } from "./query/combobox";
import { useAtomValue, useSetAtom } from "jotai";
import { chainAtom, contractAtom, tokenAtom, uriAtom } from "@/lib/atoms";
import { createPublicClient, erc721Abi, http } from "viem";
import { toast } from "sonner";

const InputSection = () => {
    const contractValue = useAtomValue(contractAtom);
    const setContract = useSetAtom(contractAtom);

    const tokenValue = useAtomValue(tokenAtom);
    const setToken = useSetAtom(tokenAtom);

    const chainValue = useAtomValue(chainAtom)

    const setUri = useSetAtom(uriAtom)

    const handleQuery = async () => {

        if (!contractValue) toast.error("no contract provided")
        if (tokenValue < -1) toast.error("no token provided")
        if (!chainValue) toast.error("no chain selected")

        try {

            const publicClient = createPublicClient({
                chain: chainValue!,
                transport: http()
            })
            const uri = await publicClient.readContract({
                address: contractValue as `0x${string}`,
                abi: erc721Abi,
                functionName: "tokenURI",
                args: [BigInt(tokenValue!)]
            })
            if (uri.startsWith("https://")) {
                const jsonURI = await fetch(uri).then(res => res.json())
                setUri(jsonURI)
            } else if (uri.startsWith("ipfs://")) {
                const jsonURI = await fetch(uri.replace("ipfs://", "https://ipfs.io/ipfs/")).then(res => res.json())
                setUri(jsonURI)
            } else {
                toast.info("uri type not supported")
                // setUri(JSON.parse(uri))
            }
        } catch (error) {
            toast.error("an error occurred, please check console")
            console.log(error)
        }

    }

    return (
        <div className="flex flex-row gap-6 items-center justify-center">
            <Combobox />
            <Input placeholder="enter contract address" onChange={(e) => setContract(e.target.value as `0x${string}`)} />
            <p>token id: </p>
            <Button onClick={() => setToken((token) => (token || 0) + 1)}>+</Button>
            <Input
                placeholder="token id"
                type="number"
                value={tokenValue || 0}
                className="w-2/5"
                onChange={(e) => {
                    setToken(Number(e.target.value));
                }}
            />
            <Button onClick={() => setToken((token) => ((token || 0) - 1) >= 0 ? ((token || 0) - 1) : token)}>-</Button>
            <Button className="cursor-pointer" onClick={handleQuery}>query</Button>
        </div>
    );
};

export default InputSection;
