import React from 'react';
import PageTitle from "@/app/(app)/Components/PageTitle";

function SzmszPage() {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-8 min-h-screen">
            {/* Text Section */}
            <div className="md:w-1/2">
                <PageTitle title={"Szervezeti és Működési szabályzat."} />
                <p className="text-lg leading-relaxed mb-6">
                    {"Az Szmsz-t "}
                    <a href="/szmsz.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
                        itt
                    </a>
                    {" tudod megtekinteni."}
                </p>
            </div>
        </div>
    );
}

export default SzmszPage;