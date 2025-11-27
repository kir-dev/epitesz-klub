import React from 'react';
import PageTitle from "@/app/(app)/Components/PageTitle";

function BecomingAMemberPage() {

  return (
    <div>
      <PageTitle title={"Taggá Válás"}/>
      <h1 className="mb-8 text-2xl font-bold">Kedves érdeklődők!</h1>
      <ul className="text-lg mb-8 dash-list">
        <li>
          Gyertek el a tagtoborzónkra, ismerkedjetek meg velünk és, hogy mivel foglalkozunk.
        </li>
        <li>
          Utána sor kerül az újakat bevonó kirándulásra, ami szintén izgalmas és mindig jól szokott sikerülni.
        </li>
        <li>
          Csatlakozzatok hozzánk a gyűléseken csütörtökönként 20 órától a Bercsényi Kollégium 5.emeleti Műtermében.
        </li>
        <li>
          Vegyetek részt a programjainkon, segítsetek a szervezésben és 2 félévnyi tagjelöltség után sor kerül a beszavazásotokra.
        </li>
      </ul>
      <p className="text-lg">Várunk titeket, legyetek részei ti is az Építész Klub Szakkollégium életének!</p>
    </div>
  );
}

export default BecomingAMemberPage;