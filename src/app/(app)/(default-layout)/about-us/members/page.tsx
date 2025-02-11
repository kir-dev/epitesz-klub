import {getPayload} from "payload";
import config from "@payload-config";
import PageTitle from "@/app/(app)/Components/PageTitle";
import Presidents from "@/app/(app)/Components/Presidents";
import Members from "@/app/(app)/Components/Members";

export default async function MembersPageGetData(){
    const payload = await getPayload({ config });
    const members = await payload.find({
        collection: 'members',
        where: {
            role: {
                equals: 'tag',
            }
        },
    });

    const president = await payload.find({
        collection: 'members',
        where: {
            role: {
                equals: 'elnok',
            }
        },
    })

    const generalVicePresident = await payload.find({
        collection: 'members',
        where: {
            role: {
                equals: 'altalanos_alelnok',
            }
        },
    });

    const foreignRelationsVicePresident = await payload.find({
        collection: 'members',
        where: {
            role: {
                equals: 'kulkapcsolati_alelnok',
            }
        },
    });

    const prVicePresident = await payload.find({
        collection: 'members',
        where: {
            role: {
                equals: 'pr_alelnok',
            }
        },
    });

    const hrVicePresident = await payload.find({
        collection: 'members',
        where: {
            role: {
                equals: 'hr_alelnok',
            }
        },
    });

    const economicVicePresident = await payload.find({
        collection: 'members',
        where: {
            role: {
                equals: 'gazdasagi_alelnok',
            }
        },
    });

    return (
        <div>
            <PageTitle title={"Elnökség"}/>
            <Presidents president={president.docs[0]}
                        generalVicePresident={generalVicePresident.docs[0]}
                        foreignRelationsVicePresident={foreignRelationsVicePresident.docs[0]}
                        prVicePresident={prVicePresident.docs[0]}
                        hrVicePresident={hrVicePresident.docs[0]}
                        economicVicePresident={economicVicePresident.docs[0]} />
            <div className="h-10"></div>
            <PageTitle title={"Tagok"}/>
            <Members members={members.docs}/>
        </div>
    )
}