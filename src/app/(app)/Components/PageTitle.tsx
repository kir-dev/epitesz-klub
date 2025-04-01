import React from "react";

export default function PageTitle({ title }: { title: string }) {
    return (
        <>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 my-12 bg-gradient-radial from-zinc-800 to-transparent opacity-20 blur-3xl"></div>
            <div className="mx-8">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
                            {title}
                        </h1>
                        <div className="flex-grow h-1 bg-gradient-to-r from-zinc-700 to-zinc-900"></div>
                    </div>
                    <div className="w-20 h-1 bg-zinc-600"></div>
                </div>
            </div>
        </>
    );
}