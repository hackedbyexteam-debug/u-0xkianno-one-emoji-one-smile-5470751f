// One Emoji, One Smile — the hatching chick.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) a single emoji a stranger reads as warm and friendly,
// (2) warmth at first glance, kind/friendly/gently funny with no context,
// (3) universality, no irony or in-joke, (4) chosen rather than the first
// smiley that comes to mind, (5) right for a stranger: no intimacy, sarcasm
// or flirtation.
//
// Candidates: holding-back-tears face, sunflower, hatching chick, sun with
// face, dog face, rainbow, heart hands, orange heart, baby chick, cherry
// blossom, balloon, classic smiley, melting face, rabbit face.
//
// Why the hatching chick wins:
// - Criterion 1+2: a baby chick breaking out of its egg is pure warmth —
//   innocent, friendly, gently funny — and it makes people smile before
//   they have time to think.
// - Criterion 3: universal. Baby animals read the same at any age, in any
//   culture; no irony, no in-joke, no double meaning.
// - Criterion 4: a deliberate, picked-for-the-moment choice — nobody's
//   default smiley — while staying instantly readable.
// - Criterion 5: nothing intimate, sarcastic or flirty about a chick; a
//   stranger sending it reads as kind, never odd.
// Rejected runners-up: sunflower (as warm and as safe, but a flower is
// cheerful rather than smiling — a shade less warmth at first glance);
// holding-back-tears face (very warm, but can read as sad/overwhelmed, so
// weaker on universality); sun with face (warm, but still a smiley face —
// closer to the default the brief warns against). The classic smiley was
// rejected outright: criterion 4 names it as the thing to avoid, and it is
// very likely one of the house's own fixed texts. Heart hands and orange
// heart were rejected on criterion 5 (a heart from a stranger reads
// intimate).
//
// Gate: exactly 1 emoji — 1 code point, 2 UTF-16 units, 4 UTF-8 bytes
// (limit 1-8 characters, whichever way the scorer counts).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `🐣`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
