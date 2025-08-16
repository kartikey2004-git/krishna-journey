/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

const page = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const journeyStages = [
    {
      title: "Divine Birth in Mathura",
      subtitle: "जन्म लीला - The Sacred Incarnation",
      story:
        "In the depths of Kamsa's prison, where darkness seemed eternal, a divine light pierced through the night. As the eighth child of Devaki and Vasudeva was born, the very cosmos rejoiced. The prison doors opened by themselves, the guards fell into deep slumber, and the chains that bound Vasudeva melted away like morning mist.",
      details:
        "With baby Krishna cradled in a basket upon his head, Vasudeva crossed the turbulent Yamuna river. The serpent Shesha rose from the waters to shield the divine child from the rain, while the river herself parted to make way for the Lord of the Universe.",
      moral:
        "Even in the darkest circumstances, divine grace finds a way. Krishna's birth teaches us that the Supreme comes to Earth whenever dharma is in decline.",
      shloka:
        "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
      translation:
        "Whenever there is decline in righteousness and increase in unrighteousness, I manifest myself.",
      icon: "🏛️",
      color: "from-primary/20 to-secondary/20",
      image: "img1.jpeg",
    },
    {
      title: "Childhood in Gokul & Vrindavan",
      subtitle: "बाल लीला - The Butter Thief's Divine Play",
      story:
        "In the pastoral beauty of Vrindavan, little Krishna became the heart of every home. His mischievous smile could melt the sternest heart, and his innocent pranks brought joy to all. The sound of his anklets echoing through the lanes announced his arrival, sending the gopis into delightful panic as they hid their butter pots.",
      details:
        "When Yashoda Mata tried to tie him to a mortar as punishment, she found the rope always two fingers short - a divine reminder that the infinite cannot be bound by the finite. Yet, in his love for his mother, Krishna allowed himself to be caught, teaching us that love is the only force that can bind the Supreme.",
      moral:
        "True devotion is found in simple, pure love. Krishna's childhood shows us that the Divine delights in innocent play and unconditional love.",
      shloka: "गोपीजनवल्लभो गोविन्दो गोपालो गोकुलप्रियः",
      translation:
        "He who is beloved of the gopis, Govinda, the protector of cows, dear to Gokul.",
      icon: "🧈",
      color: "from-secondary/20 to-primary/20",
      image: "img2.jpeg",
    },
    {
      title: "Miracles & Demon Defeats",
      subtitle: "राक्षस संहार - Protection of the Innocent",
      story:
        "Even as a tender child, Krishna's divine purpose manifested through miraculous deeds. When the demoness Putana came disguised as a beautiful woman to poison him with her breast milk, infant Krishna not only survived but drew out her very life force, transforming her evil heart and granting her moksha.",
      details:
        "In the sacred waters of Yamuna, the serpent Kaliya had made his home, poisoning the river with his venom. Young Krishna danced upon the serpent's multiple hoods, subduing his pride and ego. The dance was not of destruction but of transformation - Kaliya was freed from his curse and granted a place in Vaikuntha.",
      moral:
        "Evil cannot touch the pure of heart. Krishna teaches us that even the most venomous negativity can be transformed through divine grace and fearless devotion.",
      shloka: "अहिंसा परमो धर्मः धर्म हिंसा तथैव च",
      translation:
        "Non-violence is the highest dharma, but violence in service of dharma is equally sacred.",
      icon: "🐍",
      color: "from-primary/20 to-accent/20",
      image: "img3.jpeg",
    },
    {
      title: "Govardhan Leela",
      subtitle: "गिरिधर - The Mountain Lifter's Message",
      story:
        "When Indra, the king of gods, unleashed his fury upon Vrindavan with torrential rains and devastating storms, the people turned to their beloved Krishna in desperation. With a gentle smile and unwavering confidence, seven-year-old Krishna lifted the mighty Govardhan Hill on his little finger, creating a divine umbrella for all of Vrindavan.",
      details:
        "For seven days and nights, Krishna held the mountain aloft without showing any sign of fatigue. The entire population of Vrindavan - men, women, children, and cattle - found shelter under this divine protection. This leela humbled Indra's pride and established Krishna as the true protector of his devotees.",
      moral:
        "True strength lies not in power but in protection of others. Devotion and surrender to the Divine is greater than elaborate rituals and offerings.",
      shloka: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज",
      translation:
        "Abandon all varieties of dharma and surrender unto Me alone.",
      icon: "⛰️",
      color: "from-accent/20 to-primary/20",
      image: "img4.jpeg",
    },
    {
      title: "Journey to Mathura & Defeating Kamsa",
      subtitle: "कंस वध - The Fulfillment of Divine Purpose",
      story:
        "The day of departure from Vrindavan was filled with tears of separation. The gopis' hearts broke as their beloved Krishna left for Mathura, never to return as the simple cowherd boy they knew. Yet this journey marked the beginning of Krishna's role as the upholder of dharma and destroyer of evil.",
      details:
        "In Mathura's wrestling arena, Krishna and Balarama faced the mighty wrestlers Chanura and Mushtika. With divine grace and righteous fury, they defeated the demons. Then, in a moment that shook the very foundations of tyranny, Krishna leaped onto the royal platform and ended Kamsa's reign of terror with his bare hands.",
      moral:
        "Sometimes we must leave behind what we love to fulfill our greater purpose. Justice delayed is not justice denied when the Divine is the executor.",
      shloka: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्",
      translation:
        "For the protection of the good and destruction of the wicked.",
      icon: "⚔️",
      color: "from-primary/20 to-secondary/20",
      image: "img5.jpeg",
    },
    {
      title: "Life in Dwarka",
      subtitle: "द्वारकाधीश - The Golden City's Ruler",
      story:
        "Krishna established Dwarka, a magnificent city that rose from the ocean itself - a golden paradise where dharma reigned supreme. As king, Krishna balanced his divine nature with earthly responsibilities, showing how one can live in the world while remaining detached from it.",
      details:
        "His marriage to Rukmini, who chose him over worldly riches and power, exemplified divine love transcending material considerations. With Satyabhama and his other queens, Krishna demonstrated that the Supreme can manifest infinite love without division or diminishment.",
      moral:
        "True leadership serves others before self. Divine love multiplies when shared, never diminishes.",
      shloka: "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति",
      translation: "One who sees Me everywhere and sees everything in Me.",
      icon: "🏰",
      color: "from-secondary/20 to-primary/20",
      image: "img6.jpeg",
    },
    {
      title: "Kurukshetra & Bhagavad Gita",
      subtitle: "गीता उपदेश - The Eternal Teaching",
      story:
        "On the battlefield of Kurukshetra, when Arjuna's resolve wavered at the sight of his kinsmen arrayed for battle, Krishna revealed his true nature and delivered the immortal wisdom of the Bhagavad Gita. In eighteen chapters of divine discourse, he illuminated the path of dharma, karma, and devotion.",
      details:
        "Krishna showed Arjuna his Vishvarupa - the cosmic form containing all of creation within itself. This divine vision revealed that Krishna was not merely a charioteer or friend, but the Supreme Reality itself, guiding humanity through the complexities of moral duty and spiritual realization.",
      moral:
        "Duty performed without attachment to results leads to liberation. The Divine is both the path and the destination.",
      shloka: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
      translation:
        "You have the right to perform your actions, but you are not entitled to the fruits of action.",
      icon: "📜",
      color: "from-primary/20 to-accent/20",
      image: "img7.jpeg",
    },
    {
      title: "Final Leela & Departure",
      subtitle: "निर्याण लीला - The Eternal Return",
      story:
        "As the Dwapara Yuga drew to a close, Krishna's earthly mission neared completion. The Yadava dynasty, blessed with prosperity, fell victim to internal strife - a reminder that even divine grace cannot override the consequences of one's actions when dharma is abandoned.",
      details:
        "In the forest of Prabhasa, Krishna sat in meditation under a peepal tree. A hunter named Jara, mistaking Krishna's foot for a deer, shot an arrow that became the instrument of Krishna's departure from the mortal realm. Even in this final moment, Krishna blessed the hunter, showing that the Divine harbors no ill will.",
      moral:
        "Death is but a transition for the eternal soul. Krishna's departure teaches us that the Divine's physical presence may end, but the eternal teachings and love remain forever.",
      shloka: "न जायते म्रियते वा कदाचित्",
      translation: "The soul is never born, nor does it ever die.",
      icon: "🕊️",
      color: "from-accent/20 to-primary/20",
      image: "img8.jpeg",
    },
  ];

  const gitaQuotes = [
    {
      sanskrit:
        "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      translation:
        "You have the right to perform your actions, but you are not entitled to the fruits of action. Never consider yourself the cause of the results, nor be attached to not doing your duty.",
      chapter: "Chapter 2, Verse 47",
      context:
        "The foundation of Karma Yoga - performing duty without attachment to results.",
    },
    {
      sanskrit:
        "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
      translation:
        "Perform your duty equipoised, O Arjuna, abandoning all attachment to success or failure. Such equanimity is called Yoga.",
      chapter: "Chapter 2, Verse 48",
      context:
        "The essence of maintaining balance and equanimity in all circumstances.",
    },
    {
      sanskrit:
        "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
      translation:
        "Whenever there is decline in righteousness and increase in unrighteousness, O Bharata, I manifest myself.",
      chapter: "Chapter 4, Verse 7",
      context: "Krishna's promise to appear whenever dharma needs restoration.",
    },
    {
      sanskrit:
        "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
      translation:
        "Abandon all varieties of dharma and surrender unto Me alone. I will deliver you from all sinful reactions; do not fear.",
      chapter: "Chapter 18, Verse 66",
      context: "The ultimate teaching of complete surrender to the Divine.",
    },
  ];

  const scrollToJourney = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cosmic Background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, oklch(0.85 0.15 85 / 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, oklch(0.65 0.2 45 / 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 40%, oklch(0.85 0.15 85 / 0.05) 0%, transparent 50%)`,
          }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-t from-primary/20 to-secondary/20 glow-animation flex items-center justify-center">
              <div className="text-8xl md:text-9xl float-animation">🪈</div>
            </div>
            {/* Floating elements */}
            <div
              className="absolute -top-10 -right-10 text-4xl float-animation"
              style={{ animationDelay: "1s" }}
            >
              🪶
            </div>
            <div
              className="absolute -bottom-10 -left-10 text-4xl float-animation"
              style={{ animationDelay: "2s" }}
            >
              🪷
            </div>
            <div
              className="absolute top-1/2 -left-20 text-3xl float-animation"
              style={{ animationDelay: "0.5s" }}
            >
              🐄
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 shimmer-text">
            The Eternal Journey of Shri Krishna
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 font-sans">
            From Divine Birth in Mathura to the Immortal Wisdom of Kurukshetra
          </p>
          <p className="text-base md:text-lg text-primary/80 mb-8 font-serif">
            कृष्णस्य दिव्य यात्रा - A Sacred Chronicle of Love, Dharma, and
            Liberation
          </p>
          <Button
            onClick={scrollToJourney}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif text-lg px-8 py-6 rounded-full glow-animation"
          >
            पवित्र यात्रा शुरू करें
            <ChevronDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="absolute top-6 right-6 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-background/80 border-primary/50 hover:bg-primary/20"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="bg-background/80 border-primary/50 hover:bg-primary/20"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="relative py-24 px-6 ">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-primary tracking-wide">
            ✨ दिव्य यात्रा ✨
          </h2>
          <p className="text-center text-muted-foreground mb-20 font-serif text-lg">
            कृष्ण जीवन के आठ पवित्र अध्याय <br />
            <span className="text-sm tracking-widest text-primary/70">
              Eight Sacred Chapters of Krishna&apos;s Life
            </span>
          </p>

          <div className="flex flex-col space-y-32">
            {journeyStages.map((stage, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-stretch gap-12 relative`} // 🔥 changed items-center → items-stretch
              >
                {index !== journeyStages.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-32 bg-gradient-to-b from-primary/40 to-transparent transform -translate-x-1/2"></div>
                )}

                {/* Image Side */}
                <div className="w-full md:w-1/2 flex">
                  <div className="relative group w-full h-full">
                    {/* Glow Aura */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-70 group-hover:opacity-100 transition"></div>

                    {/* Full-height Image */}
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl border-2 border-primary/30"
                    />

                    
                    
                  </div>
                </div>

                {/* Card Side */}
                <div className="w-full md:w-1/2 flex">
                  <Card
                    className={`relative overflow-hidden bg-gradient-to-br ${stage.color} border-primary/20 hover:border-primary/40 transition-all duration-300 rounded-2xl flex flex-col`}
                  >
                    <CardContent className="relative p-8 space-y-6 flex-1">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{stage.icon}</div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">
                            {stage.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-secondary/30 text-secondary-foreground font-serif"
                          >
                            {stage.subtitle}
                          </Badge>
                        </div>
                      </div>

                      {/* Story */}
                      <p className="text-foreground leading-relaxed font-sans text-lg">
                        {stage.story}
                      </p>
                      <p className="text-muted-foreground leading-relaxed font-sans italic">
                        {stage.details}
                      </p>

                      {/* Moral Teaching */}
                      <div className="bg-primary/10 rounded-xl p-5 border-l-4 border-primary shadow-sm">
                        <h4 className="font-serif font-semibold text-primary mb-2 text-lg">
                          ✦ दिव्य शिक्षा ✦
                        </h4>
                        <p className="text-foreground font-sans italic">
                          {stage.moral}
                        </p>
                      </div>

                      {/* Shloka */}
                      <div className="bg-secondary/10 rounded-xl p-5 border border-secondary/20">
                        <p className="text-primary font-serif text-xl mb-3 text-center leading-relaxed">
                          &quot;{stage.shloka}&quot;
                        </p>
                        <p className="text-muted-foreground font-sans text-center italic">
                          {stage.translation}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bhagavad Gita Quotes */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-primary">
            भगवद्गीता से शाश्वत ज्ञान
          </h2>
          <p className="text-center text-muted-foreground mb-16 font-serif italic">
            आत्मा के लिए कालातीत शिक्षाएं - Timeless Teachings for the Soul
          </p>

          <div className="grid gap-8 md:gap-12">
            {gitaQuotes.map((quote, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <p className="text-xl md:text-2xl font-serif text-primary mb-4 leading-relaxed">
                      &quot;{quote.sanskrit}&quot;
                    </p>
                    <p className="text-lg text-foreground mb-4 font-sans leading-relaxed italic">
                      &quot;{quote.translation}&quot;
                    </p>
                    <Badge
                      variant="outline"
                      className="border-primary/50 text-primary font-serif"
                    >
                      {quote.chapter}
                    </Badge>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
                    <p className="text-muted-foreground font-sans text-center">
                      {quote.context}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-t from-primary/10 to-background border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-2xl md:text-3xl font-serif text-primary mb-4 shimmer-text">
              हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे
            </p>
            <p className="text-xl md:text-2xl font-serif text-primary mb-4 shimmer-text">
              हरे राम हरे राम राम राम हरे हरे
            </p>
            <p className="text-lg text-muted-foreground font-sans">
              महामंत्र - जपो और मुक्त हो जाओ
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <div className="text-3xl float-animation">🪈</div>
            <div
              className="text-3xl float-animation"
              style={{ animationDelay: "0.5s" }}
            >
              🪷
            </div>
            <div
              className="text-3xl float-animation"
              style={{ animationDelay: "1s" }}
            >
              🪶
            </div>
            <div
              className="text-3xl float-animation"
              style={{ animationDelay: "1.5s" }}
            >
              🐄
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-primary font-serif italic">
              &quot;कृष्ण के स्मरण में सभी दुःख नष्ट हो जाते हैं, सभी पाप धुल
              जाते हैं, और हृदय को शाश्वत शांति मिलती है।&quot;
            </p>
            <p className="text-sm text-muted-foreground font-sans">
              भक्ति और प्रेम के साथ बनाया गया • कृष्ण की कृपा इस पवित्र स्थान पर
              आने वाले सभी पर हो
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
