'use client';
//import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState} from "react";
import axios from "axios";

const url = "https://mail.kir-dev.hu/api/send";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      alert("Minden mezőt ki kell tölteni!");
      return;
    }
    console.log(name, email, message);
      const response = await axios.post(
          url,
          {
            from: {
              name: name || "Teszt Név",
              email: email || "teszt@example.com",
            },
            to: "liptak.peti.98@gmail.com",
            subject: "Próba5",
            html: message || "<h1>Ez egy teszt üzenet</h1>",
            replyTo: email,
            queue: "send",
          },
          {
            headers: {
              Authorization: `Api-Key <your_token>`, // Helyes formátum
              "Content-Type": "application/json",
            },
          }
      );
      console.log("E-mail sikeresen elküldve:", response.data);
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
                className="bg-zinc-900 border-zinc-700 text-zinc-100 min-h-[100px] pl-2"
                style={{ resize: "none" }}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div>
              <button
                  className="w-full bg-zinc-700 hover:bg-zinc-600 text-zinc-100 mt-6"
                  onClick={handleSubmit}>
                Küldés
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
