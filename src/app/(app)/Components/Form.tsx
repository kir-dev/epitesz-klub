'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState} from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    fetch("/api/kir-mail/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
        }).then((response) => {
        if (response.ok) {
            alert("E-mail elküldve!");
        } else {
            alert("Hiba történt az e-mail küldése közben!");
    }});
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <Card className="bg-zinc-800 border-zinc-700">
        <CardContent className="p-6 h-full">
          <div className="space-y-6 h-full">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Név:
              </label>
              <Input
                id="name"
                placeholder="Adja meg a nevét"
                value={name}
                className="pl-2 bg-zinc-900 border-zinc-700 text-zinc-100"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                E-mail:
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Adja meg e-mail címét"
                value={email}
                className="bg-zinc-900 border-zinc-700 text-zinc-100 pl-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300 mb-2"
              >
                Üzenet:
              </label>
              <Textarea
                id="message"
                placeholder="Írja be üzenetét"
                value={message}
                className="bg-zinc-900 border-zinc-700 text-zinc-100 min-h-[100px] pl-2"
                style={{ resize: "none" }}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div>
              <Button
                  className="w-full bg-zinc-700 hover:bg-zinc-600 text-zinc-100 mt-6"
                  onClick={handleSubmit}>
                Küldés
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
