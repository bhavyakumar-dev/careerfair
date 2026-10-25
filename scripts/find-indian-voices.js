import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient();

async function main() {
  const response = await client.voices.getAll();
  const voices = response.voices || [];
  const indianVoices = voices.filter(v => {
    const desc = (v.description || "") + (v.labels?.accent || "") + (v.labels?.language || "") + (v.name || "");
    return desc.toLowerCase().includes("india") || desc.toLowerCase().includes("hindi");
  });
  console.log(`Found ${indianVoices.length} Indian accent voices:`);
  for (const v of indianVoices) {
    console.log(`- ${v.name} (ID: ${v.voice_id}) | Accent: ${v.labels?.accent || "N/A"} | Category: ${v.category}`);
  }
}

main().catch(err => {
  console.error("Error fetching voices:", err.message);
});
