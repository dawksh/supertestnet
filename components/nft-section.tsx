"use client";

/* eslint-disable @next/next/no-img-element */
import { uriAtom } from "@/lib/atoms";
import { useAtomValue } from "jotai";
import React from "react";

const NFTSection = () => {
    const jsonUri = useAtomValue(uriAtom);

    if (!jsonUri)
        return (
            <div className="flex flex-row justify-around gap-6 w-3/4">
                <p className="italic">enter details and query</p>
            </div>
        );

    return (
        <div className="flex flex-row justify-around gap-6 w-3/4">
            <div className="w-1/2">
                <img
                    src={
                        (jsonUri.image as string).startsWith("ipfs://")
                            ? (jsonUri.image as string).replace(
                                "ipfs://",
                                "https://ipfs.io/ipfs/"
                            )
                            : (jsonUri.image as string)
                    }
                    alt="NFT Image"
                    className="w-64 h-64 rounded-2xl"
                />
            </div>
            <div className="flex flex-col w-1/2 gap-4">
                <p className="text-4xl font-extrabold">
                    {jsonUri.name as string}
                </p>
                <p>{jsonUri.description as string}</p>
                <div className="w-full mt-4">
                    <p className="text-xl font-bold">Attributes:</p>
                    <pre className="p-4 rounded-lg">
                        {JSON.stringify(jsonUri.attributes, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default NFTSection;
