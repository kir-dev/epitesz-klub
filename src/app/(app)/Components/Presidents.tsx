import {Member} from "@/payload-types";
import Image from "next/image";

interface MembersPageProps {
    president: Member;
    generalVicePresident: Member;
    foreignRelationsVicePresident: Member;
    prVicePresident: Member;
    hrVicePresident: Member;
    economicVicePresident: Member;
}

export default function Presidents(props: MembersPageProps){
    const positions = [
        { title: "Elnök", member: props.president },
        { title: "Általános alelnök", member: props.generalVicePresident },
        { title: "Külügyi alelnök", member: props.foreignRelationsVicePresident },
        { title: "PR alelnök", member: props.prVicePresident },
        { title: "HR alelnök", member: props.hrVicePresident },
        { title: "Gazdasági alelnök", member: props.economicVicePresident },
    ];

    return (
        <div className="mb-20">
            <div className="container mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {positions.map((position, index) =>
                        position.member ? (
                            <div
                                key={index}
                                className="text-center bg-gray-800 rounded-lg shadow-lg p-4"
                            >
                                <Image
                                    src={position.member.profileImage.url}
                                    alt={position.title}
                                    width={100}
                                    height={100}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <p className="font-bold text-lg">{position.title}</p>
                                <p className="">{position.member.name}</p>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="text-center bg-gray-800 rounded-lg shadow p-4"
                            >
                                <p className="text-lg font-bold">{position.title}</p>
                                <p className="">Nincs adat</p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}