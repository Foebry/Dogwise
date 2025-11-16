export const details: Record<
  string,
  { blocks: { title: string; lessons: string[] }[] }
> = {
  puppy1: {
    blocks: [
      {
        title: "Blok 1 - Start puppytraining",
        lessons: [
          "Naam, oogcontact, zit",
          "Wandelen aan de lijn, aanraking wennen",
          "Begroeten zonder springen, kalmte",
          "Korte recall met lijn, bewegingen",
          "Test: zit, oogcontact, recall, begroeten",
        ],
      },
      {
        title: "Blok 2 - Herhalingsblok (vrijblijvend)",
        lessons: [
          "Aandacht, rustig volgen, korte stops",
          "Recall met lijn & spel als beloning",
          "Begroeten zonder springen",
          "Herhaling basiscommando’s & test",
        ],
      },
    ],
  },
  puppy2: {
    blocks: [
      {
        title: "Blok 1 – Basis & zelfvertrouwen",
        lessons: [
          "Blijf met lichte prikkels, rustig volgen",
          "Recall met lange lijn (rustige omgeving)",
          "Impulscontrole bij voer/spel",
        ],
      },
      {
        title: "Blok 2 – Prikkels & begroeten",
        lessons: [
          "Aandacht bij andere pups",
          "Rustig begroeten, wachten bij verleiding",
          "Praktijkwandeling met bochten & kruisingen",
        ],
      },
    ],
  },
  adolescense: {
    blocks: [
      {
        title: "Blok 1 – Start pubertraining",
        lessons: [
          "Herhaling puppy, zit/lig met duur",
          "Wandelen zonder trekken",
          "Begroeten met focus",
          "Houdingen: zit–af–rechtstaan",
          "Test: zit, lig, blijf, lijncontrole",
        ],
      },
      {
        title: "Blok 2 – Zelfbeheersing & focus",
        lessons: [
          "Aandacht bij andere honden",
          "Rustig begroeten (blijven)",
          "Variaties wandelen (tempo/bochten)",
          "Kalmte na spel",
          "Test: aandacht, begroeten, lijncontrole",
        ],
      },
      {
        title: "Blok 3 – Recall & rust (lange lijn)",
        lessons: [
          "Recall met afleiding",
          "Blijven in zit/lig (duurtijd)",
          "Gehoorzaamheid + speelse opdrachten",
          "Prikkel → rust → commando",
          "Test: recall, rust, blijf",
        ],
      },
      {
        title: "Blok 4 – Praktijktraining",
        lessons: [
          "Wandelen in drukkere omgeving",
          "Blijven op afstand (lange lijn)",
          "Groepssituaties met meerdere honden",
          "Voorwerpen/eten negeren",
          "Test: volgen, blijven, groepsdiscipline",
        ],
      },
      {
        title: "Blok 5 – Test & Diploma",
        lessons: [
          "Combinatietest: volgen, posities, recall, kalmte",
          "Diploma-uitreiking",
        ],
      },
    ],
  },
  junior: {
    blocks: [
      {
        title: "Blok 1 – Lijncontrole & posities",
        lessons: [
          "Volgen links/rechts • start/stop",
          "Bochten nauw • positie vasthouden",
          "Tempowissels met aandacht",
          "Slalom & krappe doorgang",
          "Test: volgen, bochten, tempo, positie. B1",
        ],
      },
      {
        title: "Blok 2 – Prikkels & nieuwe omgevingen",
        lessons: [
          "Geluiden & beweging (fietser/jogger)",
          "Materialen (brug, rooster) • kort stil staan",
          "Drukte simuleren • kalmteprotocol",
          "Korte praktijkwandeling",
          "Test: prikkelcontrole, kalmte, opdrachten. B2",
        ],
      },
      {
        title: "Blok 3 – Recall & afstand (lange lijn)",
        lessons: [
          "Recall op 5–10 m • directe beloning",
          "Recall met lichte afleiding",
          "Afstandszit/lig (1–2 m) • wachten",
          "Combinatie: recall → positie → kalmte",
          "Test: recall, afstandspositie, wachten. B3",
        ],
      },
      {
        title: "Blok 4 – Rust & duur (mattraining)",
        lessons: [
          "Plaats/mat aanleren • korte duur",
          "Duur opbouwen • handler beweegt weg",
          "Prikkel toevoegen • herstel naar rust",
          "Praktijk: café/terras-simulatie",
          "Test: matduur, prikkelherstel, kalmte. B4",
        ],
      },
      {
        title: "Blok 5 – Precisie volgen & bochtenwerk",
        lessons: [
          "Heuppositie fijnstellen",
          "Zigzag/slalom rond kegels",
          "Lange rechte lijn met aandacht",
          "Schakelen snel↔traag met controle",
          "Test: precisie, aandacht, schakelen. B5",
        ],
      },
      {
        title: "Blok 6 – Sociale etiquette & ontmoetingen",
        lessons: [
          "Neutraal passeren honden/mensen",
          "Gecontroleerd begroeten (blijven/loslaten)",
          "Contextkeuze: wel/niet begroeten",
          "Omkeren/omlopen bij te veel prikkel",
          "Test: passeren, begroeten, keuzes. B6",
        ],
      },
      {
        title: "Blok 7 – Praktijk: stad & natuur",
        lessons: [
          "Stoep, zebrapad, smalle doorgang",
          "Trappen/liften (veiligheid & rust)",
          "Natuurprikkels negeren",
          "Mix-route met opdrachten",
          "Test: route-opdrachten & prikkelmanagement. B7",
        ],
      },
      {
        title: "Blok 8 – Zelfbeheersing & verleiding",
        lessons: [
          "Voedsel op grond negeren",
          "Speeltjes/verleiding passeren",
          "'Laat/los' cue verfijnen",
          "Combinatie met volgen & blijf",
          "Test: verleiding negeren & cue-respons. B8",
        ],
      },
      {
        title: "Blok 9 – Cooperative care & handling",
        lessons: [
          "Aanraking poot/oor/tanden met consent-cue",
          "Muilband/borstel/handdoek positief aanleren",
          "Stil staan/liggen bij verzorging",
          "Simulatie dierenarts/trimmen",
          "Test: consent-cues & rustig meewerken. B9",
        ],
      },
      {
        title: "Blok 10 – Eindtraject & Diploma",
        lessons: [
          "Test volgen & precisie (stad/natuur mix)",
          "Test prikkelmanagement & beslissingsmomenten",
          "Test recall & afstandsposities (lange lijn)",
          "Test kalmte/matduur in praktijksetting",
          "Eindproef + diploma 'Junior Jaartraject'.",
        ],
      },
    ],
  },
  adult: {
    blocks: [
      {
        title: "Blok 1 – Basischeck & dagelijkse routines",
        lessons: [
          "Basiscommando’s in realistische setting",
          "Volgen naast/achter • wachten bij stoep",
          "Aandacht vasthouden bij routineprikkels",
          "Korte routine-route met opdrachten",
          "Test: basis, aandacht, routineopdrachten. V1",
        ],
      },
      {
        title: "Blok 2 – Geavanceerd volgen & positie-werk",
        lessons: [
          "Heuppositie verfijnen (links/rechts wissel)",
          "Bochten nauw, pivot/keerbewegingen",
          "Tempowissels met constante aandacht",
          "Doorsteken tussen obstakels",
          "Test: positie, precisie, ritmecontrole. V2",
        ],
      },
      {
        title: "Blok 3 – Prikkelmanagement in drukte",
        lessons: [
          "Markt/plein-simulatie (geluid, beweging)",
          "Afstand bewaren, veilige positie kiezen",
          "Alternatieve gedraging (kijk/terug) bij triggers",
          "Micro-rusten tijdens drukke route",
          "Test: kalmte & keuzes in drukte. V3",
        ],
      },
      {
        title: "Blok 4 – Afstandscontrole & signalen (lange lijn)",
        lessons: [
          "Recall op 10–15 m met lage prikkel",
          "Afstandszit/lig/sta • cue-herkenning op afstand",
          "Combinatie recall → positie → blijf",
          "Ketens met kalmte-anker (mat/plaats)",
          "Test: recall & afstandssignalen. V4",
        ],
      },
      {
        title: "Blok 5 – Impulscontrole & verleiding",
        lessons: [
          "Voedsel op grond negeren (“laat/los”)",
          "Speeltjes/wildgeur passeren met focus",
          "Wachten bij openen deur/poort/auto",
          "Combinatie met volgen & blijf",
          "Test: verleiding negeren & beheersing. V5",
        ],
      },
      {
        title: "Blok 6 – Ontmoetingen & sociale etiquette",
        lessons: [
          "Neutraal passeren honden/mensen",
          "Gecontroleerd begroeten op verzoek",
          "Alternatieven bij spanning (boogje/afstand)",
          "Groepsoefeningen met wachtrondes",
          "Test: passeren, begroeten, groepsdiscipline. V6",
        ],
      },
      {
        title: "Blok 7 – Praktijk stadswandeling uitgebreid",
        lessons: [
          "Route met kruispunten/zebrapaden",
          "Smalle doorgangen, terrassen, wachtrij",
          "OV-omgeving simuleren (halte/geluid)",
          "Samengestelde opdrachten onderweg",
          "Test: route & opdrachten in stad. V7",
        ],
      },
      {
        title: "Blok 8 – Rustduur & herstel (plaats/bezoek)",
        lessons: [
          "Mat/plaats met langere duur",
          "Handler beweegt, hond blijft (duur/afstand)",
          "Herstel na prikkel (snelle kalmte)",
          "Bezoek-simulatie: deur/plaats/ontmoeting",
          "Test: duur, afstand, herstel & bezoek. V8",
        ],
      },
      {
        title: "Blok 9 – Veiligheid & noodvaardigheden",
        lessons: [
          "Nood-blijf, stop-signaal aan de lijn",
          "“Kom” onder hoge prikkel (lange lijn, management)",
          "Loslaat/laat met voedsel/verleiding",
          "Managementplan voor specifieke situaties",
          "Test: noodsignalen & management. V9",
        ],
      },
      {
        title: "Blok 10 – Eindtraject & Diploma",
        lessons: [
          "Test volgen & precisie (stad/natuur mix)",
          "Test prikkelmanagement & etiquette",
          "Test afstandscontrole & recall (lange lijn)",
          "Test rustduur, herstel & bezoek-situatie",
          "Eindproef + diploma “Volwassen Gehoorzaamheid – Jaartraject”.",
        ],
      },
    ],
  },
  private: {
    blocks: [
      {
        title: "Persoonlijke begeleiding op maat",
        lessons: [
          "Locatie: bij jou thuis of op het terrein",
          "Focus op rust, vertrouwen en haalbare doelen",
          "Gratis intake (15 min) om te starten",
        ],
      },
    ],
  },
};
