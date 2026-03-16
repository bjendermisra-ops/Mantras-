// database.js
const mantraDatabase =[
    {
        id: "maha_mantra",
        category: "Chanting",
        title: "Hare Krishna Maha Mantra",
        sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम राम राम हरे हरे ॥",
        audioUrl: "https://example.com/audio/mahamantra.mp3", // Replace with real audio URL
        translation: {
            en: "Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare. Hare Rama, Hare Rama, Rama Rama, Hare Hare.",
            hi: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे।।",
            mr: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे।।"
        },
        meaning: {
            en: "O Lord, O Energy of the Lord, please engage me in Your service.",
            hi: "हे भगवान, हे भगवान की शक्ति, कृपया मुझे अपनी सेवा में लगा लें।",
            mr: "हे प्रभू, हे प्रभूच्या शक्ती, कृपया मला तुमच्या सेवेत रुजू करा."
        }
    },
    {
        id: "pancha_tattva",
        category: "Pranama",
        title: "Pancha Tattva Maha Mantra",
        sanskrit: "जय श्री कृष्ण चैतन्य प्रभु नित्यानन्द ।\nश्री अद्वैत गदाधर श्रीवासादि गौर भक्त वृन्द ॥",
        audioUrl: "https://example.com/audio/panchatattva.mp3",
        translation: {
            en: "Jaya sri-krishna-caitanya prabhu nityananda sri-advaita gadadhara srivasadi-gaura-bhakta-vrinda.",
            hi: "जय श्री कृष्ण चैतन्य प्रभु नित्यानंद। श्री अद्वैत गदाधर श्रीवासादि गौर भक्त वृन्द।।",
            mr: "जय श्री कृष्ण चैतन्य प्रभु नित्यानंद। श्री अद्वैत गदाधर श्रीवासादि गौर भक्त वृन्द।।"
        },
        meaning: {
            en: "I offer my obeisances unto Sri Krishna Caitanya, Prabhu Nityananda, Sri Advaita, Gadadhara, Srivasa and all others in the line of devotion.",
            hi: "मैं श्री कृष्ण चैतन्य, प्रभु नित्यानंद, श्री अद्वैत, गदाधर, श्रीवास और भक्ति मार्ग के सभी भक्तों को प्रणाम करता हूँ।",
            mr: "मी श्री कृष्ण चैतन्य, प्रभू नित्यानंद, श्री अद्वैत, गदाधर, श्रीवास आणि भक्ती मार्गावरील सर्व भक्तांना प्रणाम करतो."
        }
    },
    {
        id: "prabhupada_pranama",
        category: "Pranama",
        title: "Srila Prabhupada Pranam",
        sanskrit: "नमः ॐ विष्णुपादाय कृष्णप्रेष्ठाय भूतले ।\nश्रीमते भक्तिवेदान्तस्वामिन् इति नामिने ॥\nनमस्ते सारस्वते देवे गौरवाणीप्रचारिणे ।\nनिर्विशेषशून्यवादिपाश्चात्यदेशतारिणे ॥",
        audioUrl: "https://example.com/audio/prabhupada.mp3",
        translation: {
            en: "nama om vishnu-padaya krishna-preshthaya bhu-tale...\nnamas te sarasvate deve gaura-vani-pracarine...",
            hi: "नमः ॐ विष्णुपादाय कृष्णप्रेष्ठाय भूतले। श्रीमते भक्तिवेदान्तस्वामिन् इति नामिने...\nनमस्ते सारस्वते देवे गौरवाणीप्रचारिणे...",
            mr: "नमः ॐ विष्णुपादाय कृष्णप्रेष्ठाय भूतले। श्रीमते भक्तिवेदान्तस्वामिन् इति नामिने...\nनमस्ते सारस्वते देवे गौरवाणीप्रचारिणे..."
        },
        meaning: {
            en: "I offer my respectful obeisances unto His Divine Grace A.C. Bhaktivedanta Swami Prabhupada...",
            hi: "मैं ॐ विष्णुपाद परमहंस परिव्राजकाचार्य अष्टोत्तर-शत श्री श्रीमद् ए.सी. भक्तिवेदांत स्वामी प्रभुपाद को सादर प्रणाम करता हूँ...",
            mr: "मी ॐ विष्णुपाद परमहंस परिव्राजकाचार्य अष्टोत्तर-शत श्री श्रीमद् ए.सी. भक्तिवेदांत स्वामी प्रभुपाद यांना सादर प्रणाम करतो..."
        }
    }
    // Future Expansion: Add Tulasi Pranam, Narasimha Prayers, Mangala Arati, etc. here
];
