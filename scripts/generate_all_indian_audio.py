import asyncio
import os
import edge_tts

FEMALE_INDIAN = "en-IN-NeerjaExpressiveNeural"
MALE_INDIAN = "en-IN-PrabhatNeural"

AUDIO_ITEMS = [
    # Career Benchmark Speeches
    {
        "filename": "speech_pilot.mp3",
        "voice": MALE_INDIAN,
        "text": "Mumbai Tower, this is Air India flight 402 on final approach. We are declaring an emergency due to localized turbulence and wind shear. Requesting immediate priority landing on Runway 27."
    },
    {
        "filename": "speech_doctor.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Good morning. The surgical team has meticulously completed the cardiac bypass. All vital parameters have stabilized satisfactorily, and the patient is currently recovering under intensive observation."
    },
    {
        "filename": "speech_anchor.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Good evening. Leading international climate delegates in Geneva have unanimously ratified a monumental treaty targeting zero carbon emissions across industrial corridors by 2035."
    },
    {
        "filename": "speech_founder.mp3",
        "voice": MALE_INDIAN,
        "text": "Our platform automates edge neural inference directly on local devices, slashing cloud compute overhead by 70% while guaranteeing enterprise-grade data confidentiality."
    },
    {
        "filename": "speech_lawyer.mp3",
        "voice": MALE_INDIAN,
        "text": "May it please the court, the evidence brought forward by the prosecution relies on mere conjecture. Fundamental statutory principles dictate that an accusation without corroboration cannot stand."
    },
    {
        "filename": "speech_hotel.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Please accept our sincere apologies for the unexpected delay during your check-in. We have upgraded your family to the Presidential Suite, with our compliments."
    },
    # Word of the Day & Vocabulary pronunciations
    {
        "filename": "word_articulate.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Articulate. Having or showing the ability to speak fluently and coherently; expressing an idea with crystalline clarity."
    },
    {
        "filename": "word_concise.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Concise. Giving a lot of information clearly in very few words. For example: A concise email respects the reader's time while clearly stating the next step."
    },
    {
        "filename": "word_nuance.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Nuance. A subtle difference in or shade of meaning, expression, or sound. For example: Good dialogue captures the nuance between what a character says and what they mean."
    },
    {
        "filename": "word_persuasive.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Persuasive. Good at persuading someone to do or believe something through reasoning. For example: A persuasive pitch explains the need, presents clear evidence, and makes an actionable request."
    },
    {
        "filename": "word_empathetic.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Empathetic. Showing an ability to understand and share the feelings of another. For example: An empathetic response can de-escalate tension and make a difficult conversation productive."
    },
    {
        "filename": "word_coherent.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Coherent. Logical and consistent; forming a unified whole. For example: A coherent argument leads the listener smoothly from the initial premise to the conclusion."
    },
    {
        "filename": "word_resonate.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Resonate. Evoke or suggest images, memories, and emotions. For example: A personal story will resonate deeply when the details are authentic and relatable."
    },
    {
        "filename": "word_credible.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Credible. Able to be believed; convincing and trustworthy. For example: A credible presentation clearly separates verified facts from future projections."
    },
    {
        "filename": "word_collaborate.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Collaborate. Work jointly on an activity or project to produce or create something. For example: Groundbreaking achievements happen when engineers, designers, and storytellers collaborate."
    },
    {
        "filename": "word_nuanced.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Nuanced. Characterized by subtle shades of meaning or expression. For example: An insightful review provides a nuanced evaluation of both strengths and areas for growth."
    },
    {
        "filename": "word_perspicacious.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Perspicacious. Having a ready insight into and understanding of things; mentally acute and penetratingly discerning."
    },
    {
        "filename": "word_equanimity.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Equanimity. Mental calmness, composure, and evenness of temper, especially in a difficult or critical situation."
    },
    {
        "filename": "word_quintessential.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Quintessential. Representing the most perfect or typical example of a quality or class."
    },
    {
        "filename": "word_pragmatic.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Pragmatic. Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations."
    },
    # Portal Welcome & Overview
    {
        "filename": "welcome_intro.mp3",
        "voice": FEMALE_INDIAN,
        "text": "Welcome to Every Career Speaks English at Kanakia International School. English is not merely an academic subject; it is the global language of leadership, technology, diplomacy, and enterprise. Explore our career pathways, practice your vocal delivery in the Speech Lab, and discover where your voice can take you."
    }
]

async def generate():
    target_dirs = [
        os.path.join("public", "audio"),
        os.path.join("audio")
    ]
    for d in target_dirs:
        os.makedirs(d, exist_ok=True)

    print(f"Generating {len(AUDIO_ITEMS)} static audio files with realistic Indian voices...")
    for item in AUDIO_ITEMS:
        filename = item["filename"]
        voice = item["voice"]
        text = item["text"]
        primary_path = os.path.join("public", "audio", filename)
        secondary_path = os.path.join("audio", filename)

        print(f"-> Generating {filename} using {voice}...")
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(primary_path)

        # Copy to secondary audio directory
        with open(primary_path, "rb") as f_src:
            data = f_src.read()
        with open(secondary_path, "wb") as f_dst:
            f_dst.write(data)

        size_kb = len(data) / 1024
        print(f"   [OK] Saved to public/audio/{filename} and audio/{filename} ({size_kb:.1f} KB)")

    print("\nAll permanent audio assets generated successfully!")

if __name__ == "__main__":
    asyncio.run(generate())
