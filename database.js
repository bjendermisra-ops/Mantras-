// database.js
// Complete ISKCON Gaudiya Vaishnava Mantra Database

const mantraDatabase =[
    // ------------------------------------
    // 1. CORE CHANTING MANTRAS
    // ------------------------------------
    {
        id: "maha_mantra",
        category: "Chanting",
        title: "Hare Krishna Maha Mantra",
        sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम राम राम हरे हरे ॥",
        audioUrl: "https://example.com/audio/mahamantra.mp3",
        translation: {
            en: "Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare \nHare Rama, Hare Rama, Rama Rama, Hare Hare",
            hi: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम राम राम हरे हरे ॥",
            mr: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ।\nहरे राम हरे राम राम राम हरे हरे ॥"
        },
        meaning: {
            en: "O Lord, O Energy of the Lord, please engage me in Your service.",
            hi: "हे भगवान (कृष्ण), हे भगवान की अंतरंगा शक्ति (राधा), कृपया मुझे अपनी प्रेमा-भक्ति (सेवा) में लगा लें।",
            mr: "हे प्रभू (कृष्ण), हे प्रभूच्या शक्ती (राधा), कृपया मला तुमच्या भक्तीमय सेवेत रुजू करा."
        }
    },
    {
        id: "pancha_tattva",
        category: "Chanting",
        title: "Pancha Tattva Mantra",
        sanskrit: "जय श्री कृष्ण चैतन्य प्रभु नित्यानन्द ।\nश्री अद्वैत गदाधर श्रीवासादि गौर भक्त वृन्द ॥",
        audioUrl: "https://example.com/audio/panchatattva.mp3",
        translation: {
            en: "Jaya sri-krishna-caitanya prabhu nityananda sri-advaita gadadhara srivasadi-gaura-bhakta-vrinda.",
            hi: "जय श्री कृष्ण चैतन्य प्रभु नित्यानन्द। श्री अद्वैत गदाधर श्रीवासादि गौर भक्त वृन्द।।",
            mr: "जय श्री कृष्ण चैतन्य प्रभू नित्यानन्द। श्री अद्वैत गदाधर श्रीवासादि गौर भक्त वृन्द।।"
        },
        meaning: {
            en: "I offer my obeisances unto Sri Krishna Caitanya, Prabhu Nityananda, Sri Advaita, Gadadhara, Srivasa and all others in the line of devotion.",
            hi: "मैं श्री कृष्ण चैतन्य, प्रभु नित्यानंद, श्री अद्वैत, गदाधर, श्रीवास और गौरभक्त वृन्द को सादर प्रणाम करता हूँ।",
            mr: "मी श्री कृष्ण चैतन्य, प्रभू नित्यानंद, श्री अद्वैत, गदाधर, श्रीवास आणि भक्ती मार्गावरील सर्व गौरांगांच्या भक्तांना प्रणाम करतो."
        }
    },

    // ------------------------------------
    // 2. PRANAMA MANTRAS (Obeisances)
    // ------------------------------------
    {
        id: "prabhupada_pranama",
        category: "Pranama",
        title: "Srila Prabhupada Pranam",
        sanskrit: "नमः ॐ विष्णुपादाय कृष्णप्रेष्ठाय भूतले ।\nश्रीमते भक्तिवेदान्तस्वामिन् इति नामिने ॥\nनमस्ते सारस्वते देवे गौरवाणीप्रचारिणे ।\nनिर्विशेषशून्यवादिपाश्चात्यदेशतारिणे ॥",
        audioUrl: "https://example.com/audio/prabhupada.mp3",
        translation: {
            en: "nama om vishnu-padaya krishna-preshthaya bhu-tale...\nnamas te sarasvate deve gaura-vani-pracarine...",
            hi: "नमः ॐ विष्णुपादाय कृष्णप्रेष्ठाय भूतले...\nनमस्ते सारस्वते देवे गौरवाणीप्रचारिणे...",
            mr: "नमः ॐ विष्णुपादाय कृष्णप्रेष्ठाय भूतले...\nनमस्ते सारस्वते देवे गौरवाणीप्रचारिणे..."
        },
        meaning: {
            en: "I offer my respectful obeisances unto His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, who is very dear to Lord Krishna on this earth...",
            hi: "मैं ॐ विष्णुपाद श्री श्रीमद् ए.सी. भक्तिवेदांत स्वामी प्रभुपाद को सादर प्रणाम करता हूँ, जो भगवान कृष्ण को अत्यंत प्रिय हैं... हे सरस्वती गोस्वामी के सेवक, आप निर्विशेषवाद और शून्यवाद से भरे पाश्चात्य देशों का उद्धार कर रहे हैं।",
            mr: "मी ॐ विष्णुपाद श्री श्रीमद् ए.सी. भक्तीवेदांत स्वामी प्रभुपाद यांना सादर प्रणाम करतो, जे भगवान श्रीकृष्णांना अत्यंत प्रिय आहेत... शून्यवादी आणि निर्विशेषवादी पाश्चात्य देशांचा उद्धार करणाऱ्या हे सरस्वती गोस्वामींचे सेवक, मी तुम्हाला नमन करतो."
        }
    },
    {
        id: "guru_pranama",
        category: "Pranama",
        title: "Guru Pranam Mantra",
        sanskrit: "ॐ अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया ।\nचक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः ॥",
        audioUrl: "",
        translation: {
            en: "om ajnana-timirandhasya jnananjana-salakaya\ncaksur unmilitam yena tasmai sri-gurave namah",
            hi: "ॐ अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया।\nचक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः।।",
            mr: "ॐ अज्ञानतिमिरान्धस्य ज्ञानाञ्जनशलाकया।\nचक्षुरुन्मीलितं येन तस्मै श्रीगुरवे नमः।।"
        },
        meaning: {
            en: "I offer my respectful obeisances unto my spiritual master, who has opened my eyes, which were blinded by the darkness of ignorance, with the torchlight of knowledge.",
            hi: "मैं अपने गुरुदेव को सादर प्रणाम करता हूँ, जिन्होंने मेरे अज्ञान रूपी अंधकार से अंधे हुए नेत्रों को ज्ञान रूपी अंजन की शलाका से खोल दिया है।",
            mr: "ज्यांनी अज्ञानरूपी अंधकाराने आंधळ्या झालेल्या माझ्या डोळ्यांना ज्ञानरूपी काजळाच्या साहाय्याने उघडले आहे, अशा माझ्या आध्यात्मिक गुरूंना मी प्रणाम करतो."
        }
    },
    {
        id: "krishna_pranama",
        category: "Pranama",
        title: "Krishna Pranam Mantra",
        sanskrit: "हे कृष्ण करुणासिन्धो दीनबन्धो जगत्पते ।\nगोपेश गोपिकाकान्त राधाकान्त नमोऽस्तु ते ॥",
        audioUrl: "",
        translation: {
            en: "he krishna karuna-sindho dina-bandho jagat-pate\ngopesa gopika-kanta radha-kanta namo 'stu te",
            hi: "हे कृष्ण करुणासिन्धो दीनबन्धो जगत्पते।\nगोपेश गोपिकाकान्त राधाकान्त नमोऽस्तु ते।।",
            mr: "हे कृष्ण करुणासिन्धो दीनबन्धो जगत्पते।\nगोपेश गोपिकाकान्त राधाकान्त नमोऽस्तु ते।।"
        },
        meaning: {
            en: "O my dear Krishna, You are the friend of the distressed and the source of creation. You are the master of the gopis and the lover of Radharani. I offer my respectful obeisances unto You.",
            hi: "हे कृष्ण! आप करुणा के सागर और दीनों के सखा हैं। आप संपूर्ण जगत के स्वामी, गोपियों के ईश्वर और श्रीमती राधारानी के प्राणनाथ हैं। मैं आपको सादर प्रणाम करता हूँ।",
            mr: "हे कृष्ण! तू करुणेचा सागर आणि गरिबांचा मित्र आहेस. तू विश्वाचा स्वामी, गोपिकांचा ईश्वर आणि श्रीमती राधारानींचा प्रियकर आहेस. मी तुला आदरपूर्वक प्रणाम करतो."
        }
    },
    {
        id: "radha_pranama",
        category: "Pranama",
        title: "Radha Pranam Mantra",
        sanskrit: "तप्तकाञ्चनगौराङ्गि राधे वृन्दावनेश्वरि ।\nवृषभानुसुते देवि प्रणमामि हरिप्रिये ॥",
        audioUrl: "",
        translation: {
            en: "tapta-kancana-gaurangi radhe vrindavanesvari\nvrishabhanu-sute devi pranamami hari-priye",
            hi: "तप्तकाञ्चनगौराङ्गि राधे वृन्दावनेश्वरि।\nवृषभानुसुते देवि प्रणमामि हरिप्रिये।।",
            mr: "तप्तकाञ्चनगौराङ्गि राधे वृन्दावनेश्वरि।\nवृषभानुसुते देवि प्रणमामि हरिप्रिये।।"
        },
        meaning: {
            en: "I offer my respects to Radharani, whose bodily complexion is like molten gold and who is the Queen of Vrindavana. You are the daughter of King Vrishabhanu, and You are very dear to Lord Krishna.",
            hi: "जिनकी कांति तपाए गए सोने के समान है और जो वृन्दावन की महारानी हैं, राजा वृषभानु की उन पुत्री तथा भगवान श्री कृष्ण को अत्यंत प्रिय राधारानी को मैं प्रणाम करता हूँ।",
            mr: "ज्यांची कांती वितळलेल्या सोन्यासारखी आहे आणि ज्या वृंदावनाच्या महाराणी आहेत, अशा राजा वृषभानुची कन्या आणि भगवान श्रीकृष्णांना अतिशय प्रिय असलेल्या श्रीमती राधारानीला मी वंदन करतो."
        }
    },
    {
        id: "vaishnava_pranama",
        category: "Pranama",
        title: "Vaishnava Pranam Mantra",
        sanskrit: "वाञ्छाकल्पतरुभ्यश्च कृपासिन्धुभ्य एव च ।\nपतितानां पावनेभ्यो वैष्णवेभ्यो नमो नमः ॥",
        audioUrl: "",
        translation: {
            en: "vancha-kalpatarubhyas ca kripa-sindhubhya eva ca\npatitanam pavanebhyo vaishnavebhyo namo namah",
            hi: "वाञ्छाकल्पतरुभ्यश्च कृपासिन्धुभ्य एव च।\nपतितानां पावनेभ्यो वैष्णवेभ्यो नमो नमः।।",
            mr: "वाञ्छाकल्पतरुभ्यश्च कृपासिन्धुभ्य एव च।\nपतितानां पावनेभ्यो वैष्णवेभ्यो नमो नमः।।"
        },
        meaning: {
            en: "I offer my respectful obeisances unto all the Vaishnava devotees of the Lord. They can fulfill the desires of everyone, just like desire trees, and they are full of compassion for the fallen souls.",
            hi: "मैं भगवान के सभी वैष्णव भक्तों को प्रणाम करता हूँ। वे कल्पवृक्ष के समान सभी की इच्छाओं को पूर्ण करने वाले हैं और पतित जीवों के प्रति करुणा के सागर हैं।",
            mr: "कल्पवृक्षाप्रमाणे सर्वांच्या इच्छा पूर्ण करणाऱ्या आणि पतित आत्म्यांसाठी करुणेचे सागर असणाऱ्या भगवान श्रीहरींच्या सर्व वैष्णव भक्तांना मी वारंवार प्रणाम करतो."
        }
    },

    // ------------------------------------
    // 3. TULASI PRAYERS
    // ------------------------------------
    {
        id: "tulasi_pranama",
        category: "Tulasi Prayers",
        title: "Tulasi Pranam Mantra",
        sanskrit: "वृन्दायै तुलसीदेव्यै प्रियायै केशवस्य च ।\nकृष्णभक्तिप्रदे देवि सत्यवत्यै नमो नमः ॥",
        audioUrl: "",
        translation: {
            en: "vrindayai tulasi-devyai priyayai kesavasya ca\nkrishna-bhakti-prade devi satyavatyai namo namah",
            hi: "वृन्दायै तुलसीदेव्यै प्रियायै केशवस्य च।\nकृष्णभक्तिप्रदे देवि सत्यवत्यै नमो नमः।।",
            mr: "वृन्दायै तुलसीदेव्यै प्रियायै केशवस्य च।\nकृष्णभक्तिप्रदे देवि सत्यवत्यै नमो नमः।।"
        },
        meaning: {
            en: "I offer my repeated obeisances unto Vrinda, Srimati Tulasi Devi, who is very dear to Lord Keshava. O goddess, you bestow devotional service to Lord Krishna and possess the highest truth.",
            hi: "मैं देवी वृन्दा (तुलसी देवी) को बारम्बार प्रणाम करता हूँ, जो भगवान केशव (कृष्ण) की अति प्रिय हैं और जो कृष्ण भक्ति प्रदान करने वाली सत्यस्वरूपा हैं।",
            mr: "भगवान श्री केशवांना अत्यंत प्रिय असणाऱ्या, भगवान श्रीकृष्णांची भक्ती प्रदान करणाऱ्या आणि परम सत्य स्वरूपा देवी वृंदेला (तुलसी देवीला) मी वारंवार प्रणाम करतो."
        }
    },

    // ------------------------------------
    // 4. BHOGA OFFERING MANTRAS (Food Offering)
    // ------------------------------------
    {
        id: "bhoga_offering",
        category: "Prasadam",
        title: "Bhoga Offering Mantras",
        sanskrit: "१. नमः ॐ विष्णुपादाय... \n२. नमो महावदान्याय कृष्णप्रेमप्रदाय ते । कृष्णाय कृष्णचैतन्यनाम्ने गौरत्विषे नमः ॥ \n३. नमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च । जगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥",
        audioUrl: "",
        translation: {
            en: "1. nama om vishnu-padaya...\n2. namo maha-vadanyaya...\n3. namo brahmanya-devaya...",
            hi: "१. श्रील प्रभुपाद प्रणाम...\n२. नमो महावदान्याय...\n३. नमो ब्रह्मण्यदेवाय...",
            mr: "१. श्रील प्रभुपाद प्रणाम...\n२. नमो महावदान्याय...\n३. नमो ब्रह्मण्यदेवाय..."
        },
        meaning: {
            en: "1. Obeisances to Srila Prabhupada. \n2. Obeisances to Sri Chaitanya Mahaprabhu. \n3. Obeisances to Lord Krishna, benefactor of the cows and brahmanas.",
            hi: "भोग लगाने की विधि: तीन बार श्रील प्रभुपाद प्रणाम, तीन बार भगवान चैतन्य को प्रणाम (नमो महावदान्याय) और तीन बार भगवान श्री कृष्ण को प्रणाम (नमो ब्रह्मण्यदेवाय)।",
            mr: "नैवेद्य अर्पण मंत्र: प्रथम श्रील प्रभुपाद प्रणाम, त्यानंतर भगवान श्री चैतन्य महाप्रभूंना प्रणाम (नमो महावदान्याय) आणि शेवटी भगवान श्रीकृष्णांना प्रणाम (नमो ब्रह्मण्यदेवाय)."
        }
    },

    // ------------------------------------
    // 5. PRASADAM PRAYERS
    // ------------------------------------
    {
        id: "prasadam_prayer",
        category: "Prasadam",
        title: "Prasadam Prayers (Sharira Avidya-Jal)",
        sanskrit: "शरीर अविद्या-जाल, जड़ेन्द्रिय ताहे काल,\nजीवे फेले विषय-सागरे ।\nता’र मध्ये जिह्वा अति, लोभमय सुदुर्मति,\nता’के जेता कठिन संसारे ॥\nकृष्ण बड़ दयामय, करिबारे जिह्वा जय,\nस्व-प्रसाद-अन्न दिल भाइ ।\nसेइ अन्नमृत पाओ, राधा-कृष्ण-गुण गाओ,\nप्रेमे डाक चैतन्य-निताइ ॥",
        audioUrl: "",
        translation: {
            en: "sharira avidya-jal, jadendriya tahe kal...",
            hi: "शरीर अविद्या-जाल, जड़ेन्द्रिय ताहे काल...",
            mr: "शरीर अविद्या-जाल, जड़ेन्द्रिय ताहे काल..."
        },
        meaning: {
            en: "O Lord, this material body is a place of ignorance, and the senses are a network of paths to death... but Lord Krishna is so kind, He has given us this prasadam to conquer the tongue.",
            hi: "हे भगवान, यह शरीर अविद्या का जाल है, इंद्रियाँ हमारी काल हैं... किन्तु भगवान कृष्ण बड़े कृपालु हैं, उन्होंने जिह्वा को वश में करने के लिए अपना दिव्य महाप्रसाद दिया है।",
            mr: "हे प्रभू, हे भौतिक शरीर अज्ञानाचे जाळे आहे... परंतु भगवान श्रीकृष्ण अत्यंत दयाळू आहेत, त्यांनी आपल्या जिभेवर (रसनेवर) ताबा मिळवण्यासाठी हे दिव्य महाप्रसाद आपल्याला दिले आहे. प्रेमभरे 'चैतन्य-निताई' असा जप करा."
        }
    },
    {
        id: "maha_prasade",
        category: "Prasadam",
        title: "Maha Prasade Govinde",
        sanskrit: "महा-प्रसादे गोविन्दे नाम-ब्रह्मणि वैष्णवे ।\nस्वल्प-पुण्यवतां राजन् विश्वासो नैव जायते ॥",
        audioUrl: "",
        translation: {
            en: "maha-prasade govinde nama-brahmani vaishnave...",
            hi: "महा-प्रसादे गोविन्दे नाम-ब्रह्मणि वैष्णवे ।\nस्वल्प-पुण्यवतां राजन् विश्वासो नैव जायते ॥",
            mr: "महा-प्रसादे गोविन्दे नाम-ब्रह्मणि वैष्णवे ।\nस्वल्प-पुण्यवतां राजन् विश्वासो नैव जायते ॥"
        },
        meaning: {
            en: "O king, for those who have amassed very few pious activities, their faith in maha-prasada, in Sri Govinda, in the Holy Name and in the Vaisnavas is never born.",
            hi: "हे राजन! जिसके पास पुण्यों की कमी है, उसका महा-प्रसाद में, भगवान गोविन्द में, पवित्र नाम में और वैष्णवों में कभी विश्वास नहीं होता।",
            mr: "हे राजा! ज्यांचे पुण्य खूप कमी आहे, त्यांचा भगवान श्री गोविंदांमध्ये, त्यांच्या पवित्र नावात, महाप्रसादामध्ये आणि वैष्णवांमध्ये कधीच विश्वास उत्पन्न होत नाही."
        }
    },

    // ------------------------------------
    // 6. ARATIS AND PRAYERS
    // ------------------------------------
    {
        id: "narasimha_arati",
        category: "Arati",
        title: "Narasimha Prayers",
        sanskrit: "नमस्ते नरसिंहाय प्रह्लादाह्लाद-दायिने ।\nहिरण्यकशिपोर्वक्षः-शिलाटङ्क-नखालये ॥\nइतो नृसिंहः परतो नृसिंहो,\nयतो यतो यामि ततो नृसिंहः ।",
        audioUrl: "",
        translation: {
            en: "namas te narasimhaya, prahladahlada-dayine...",
            hi: "नमस्ते नरसिंहाय प्रह्लादाह्लाद-दायिने...",
            mr: "नमस्ते नरसिंहाय प्रह्लादाह्लाद-दायिने..."
        },
        meaning: {
            en: "I offer my obeisances to Lord Narasimha, who gives joy to Prahlada Maharaja and whose nails are like chisels on the stone-like chest of the demon Hiranyakasipu. Lord Narasimha is here and also there...",
            hi: "मैं भगवान नरसिंहदेव को प्रणाम करता हूँ, जो भक्त प्रहलाद को आनंद देने वाले हैं और जिनके नाखून हिरण्यकशिपु के पत्थर रूपी हृदय पर छैनी के समान हैं। नरसिंह यहाँ हैं, नरसिंह वहाँ भी हैं...",
            mr: "मी भक्त प्रल्हादांना आनंद देणाऱ्या भगवान नरसिंहदेवांना नमस्कार करतो. ज्यांची नखे हिरण्यकश्यपूच्या पाषाणासारख्या छातीवर छिन्नीसारखी चालली आहेत. भगवान नरसिंह इथेही आहेत आणि तिथेही आहेत..."
        }
    },
    {
        id: "damodarastakam",
        category: "Arati",
        title: "Damodarastakam",
        sanskrit: "नमामीश्वरं सच्चिदानन्दरूपं,\nलसत्कुण्डलं गोकुले भ्राजमानम् ।\nयशोदाभियोलूखलाद्धावमानं,\nपरामृष्टमत्यन्ततो द्रुत्य गोप्या ॥१॥",
        audioUrl: "",
        translation: {
            en: "namamisvaram sac-cid-ananda-rupam...",
            hi: "नमामीश्वरं सच्चिदानन्दरूपं...",
            mr: "नमामीश्वरं सच्चिदानन्दरूपं..."
        },
        meaning: {
            en: "To the Supreme Lord, whose form is the embodiment of eternal existence, knowledge, and bliss... who is caught from behind by mother Yasoda—I offer my respectful obeisances.",
            hi: "जिनका स्वरूप सत, चित और आनंद से युक्त है, जो मकरन्द रूपी कुंडल पहने हैं... और जिन्हें माता यशोदा ने उखल से बांधने के लिए पीछे से पकड़ लिया है, उन भगवान को मैं प्रणाम करता हूँ।",
            mr: "जे अनंत, चिन्मय आणि आनंदस्वरूप आहेत, जे कानांत मकराकार कुंडले परिधान करून गोकुळात शोभत आहेत आणि ज्यांना माता यशोदेने उखळला बांधण्यासाठी धावत जाऊन पकडले, त्या प्रभूला माझा प्रणाम."
        }
    },
    {
        id: "jagannatha_astakam",
        category: "Prayers",
        title: "Jagannatha Pranama",
        sanskrit: "नीलाचलनिवासाय नित्याय परमात्मने ।\nबलभद्रसुभद्राभ्यां जगन्नाथाय ते नमः ॥",
        audioUrl: "",
        translation: {
            en: "nilacala-nivasaya nityaya paramatmane\nbala-bhadra-subhadrabhyam jagannathaya te namah",
            hi: "नीलाचलनिवासाय नित्याय परमात्मने।\nबलभद्रसुभद्राभ्यां जगन्नाथाय ते नमः।।",
            mr: "नीलाचलनिवासाय नित्याय परमात्मने।\nबलभद्रसुभद्राभ्यां जगन्नाथाय ते नमः।।"
        },
        meaning: {
            en: "Obeisances unto Lord Jagannatha, co-resident of Nilacala, who is the Supreme Lord. Along with Lord Balabhadra and Subhadra, He is worshipped.",
            hi: "मैं भगवान जगन्नाथ, बलभद्र और सुभद्रा महारानी को प्रणाम करता हूँ, जो जगन्नाथ पुरी (नीलाचल) में निवास करने वाले शाश्वत परमात्मा हैं।",
            mr: "नीलाचलात (जगन्नाथ पुरी) वास्तव्य करणारे आणि शाश्वत परमात्मा असणारे भगवान जगन्नाथ, भगवान बलभद्र आणि माता सुभद्रा यांना मी त्रिवार प्रणाम करतो."
        }
    }
    // Note: To expand further (e.g. Mangala Arati, Brahma Samhita full verses)
    // we follow exactly the same Object structure above.
];
