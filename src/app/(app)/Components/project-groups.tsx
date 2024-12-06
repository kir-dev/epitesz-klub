'use client';

import { Category } from "@/payload-types";
import { Payload } from "payload";
import { useEffect, useState } from "react";

interface ProjectGroupsProps {
    payload: Payload;
}

export default function ProjectGroups(props: ProjectGroupsProps) {
    const [categories, setCategories] = useState<Category[]>([]);

    const getData = async () => {
        const data = await props.payload.find({
            collection: 'categories',
            depth: 1,
        });
        setCategories(data.docs);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {categories.map((category: Category) => (
                <div key={category.id}>
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
    );
}