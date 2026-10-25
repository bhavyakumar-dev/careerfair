import { ElevenLabsClient } from "elevenlabs";
import { createWriteStream, existsSync } from "fs";
import { pipeline } from "stream/promises";
import { Readable } from "stream";
import path from "path";

const client = new ElevenLabsClient();

const INDIAN_VOICE_ID = "KSSOzt6V7IiEnDiQtnOJ";
const FALLBACK_VOICE_ID = "JBFqnCBsd6RMkjVDRZzb";

const STATIC_AUDIO_ITEMS = [
  {
    filename: "speech_pilot.mp3",
    text: "Mumbai Tower, this is Air India flight 402 on final approach. We are declaring an emergency due to localized turbulence and wind shear. Requesting immediate priority landing on Runway 27."
  },
  {
    filename: "speech_doctor.mp3",
    text: "Good morning. The surgical team has meticulously completed the cardiac bypass. All vital parameters have stabilized satisfactorily, and the patient is currently recovering under intensive observation."
  },
  {
    filename: "speech_anchor.mp3",
    text: "Good evening. Leading international climate delegates in Geneva have unanimously ratified a monumental treaty targeting zero carbon emissions across industrial corridors by 2035."
  },
  {
    filename: "speech_founder.mp3",
    text: "Our platform automates edge neural inference directly on local devices, slashing cloud compute overhead by 70% while guaranteeing enterprise-grade data confidentiality."
  },
  {
    filename: "speech_lawyer.mp3",
    text: "May it please the court, the evidence brought forward by the prosecution relies on mere conjecture. Fundamental statutory principles dictate that an accusation without corroboration cannot stand."
  },
  {
    filename: "speech_hotel.mp3",
    text: "Please accept our sincere apologies for the unexpected delay during your check-in. We have upgraded your family to the Presidential Suite, with our compliments."
  },
  {
    filename: "word_articulate.mp3",
    text: "Articulate. Having or showing the ability to speak fluently and coherently; expressing an idea with crystalline clarity."
  },
  {
    filename: "word_perspicacious.mp3",
    text: "Perspicacious. Having a ready insight into and understanding of things; mentally acute and penetratingly discerning."
  },
  {
    filename: "word_equanimity.mp3",
    text: "Equanimity. Mental calmness, composure, and evenness of temper, especially in a difficult or critical situation."
  },
  {
    filename: "word_quintessential.mp3",
    text: "Quintessential. Representing the most perfect or typical example of a quality or class."
  },
  {
    filename: "word_pragmatic.mp3",
    text: "Pragmatic. Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations."
  }
];

async function generateSingleAudio(item, voiceId) {
  const outPath = path.join("public", "audio", item.filename);
  if (existsSync(outPath)) {
    console.log(`[SKIP] Already exists: ${item.filename}`);
    return;
  }
  console.log(`[GENERATING] ${item.filename} with voice ${voiceId}...`);
  try {
    const audioStream = await client.textToSpeech.convert(voiceId, {
      text: item.text,
      modelId: "eleven_multilingual_v2"
    });
    const writeStream = createWriteStream(outPath);
    await pipeline(Readable.fromWeb(audioStream), writeStream);
    console.log(`[DONE] Saved ${item.filename}`);
  } catch (err) {
    if (voiceId !== FALLBACK_VOICE_ID) {
      console.warn(`[RETRY] Falling back to standard narrator for ${item.filename}: ${err.message}`);
      const audioStream = await client.textToSpeech.convert(FALLBACK_VOICE_ID, {
        text: item.text,
        modelId: "eleven_multilingual_v2"
      });
      const writeStream = createWriteStream(outPath);
      await pipeline(Readable.fromWeb(audioStream), writeStream);
      console.log(`[DONE] Saved ${item.filename} with fallback voice`);
    } else {
      throw err;
    }
  }
}

async function main() {
  console.log("Beginning ElevenLabs static audio generation...");
  for (const item of STATIC_AUDIO_ITEMS) {
    await generateSingleAudio(item, INDIAN_VOICE_ID);
  }
  console.log("All static audio assets generated successfully.");
}

main().catch(err => {
  console.error("Audio generation failed:", err.message);
  process.exit(1);
});
