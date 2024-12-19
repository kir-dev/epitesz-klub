'use client'

import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import React from "react"

export default function ContactForm() {
    return (
        <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-6 h-full">
                <form className="space-y-6 h-full">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                            Név:
                        </label>
                        <Input id="name" placeholder="Adja meg a nevét" className="pl-2 bg-zinc-900 border-zinc-700 text-zinc-100" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                            E-mail:
                        </label>
                        <Input id="email" type="email" placeholder="Adja meg e-mail címét" className="bg-zinc-900 border-zinc-700 text-zinc-100 pl-2" />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                            Üzenet:
                        </label>
                        <Textarea id="message" placeholder="Írja be üzenetét" className="bg-zinc-900 border-zinc-700 text-zinc-100 min-h-[100px] pl-2" style={{resize: 'none'}} />
                    </div>

                    <div>
                        <Button className="w-full bg-zinc-700 hover:bg-zinc-600 text-zinc-100 mt-6">
                            Küldés
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}