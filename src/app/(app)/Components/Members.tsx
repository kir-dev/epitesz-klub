import {Member} from "@/payload-types";
import Image from "next/image";

interface MemberProps {
    members: Member[];
}

export default function Members(props: MemberProps){
    return (
        <div className="">
            <div className="container mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {props.members.map((member, index) =>
                            <div
                                key={index}
                                className="text-center bg-gray-800 rounded-lg shadow-lg p-4"
                            >
                                <Image
                                    src={member.profileImage.url}
                                    alt={member.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <p className="">{member.name}</p>
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}