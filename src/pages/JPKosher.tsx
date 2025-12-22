import LanguageSwitcher from '@/components/LanguageSwitcher';

const JPKosher = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-4">
            <LanguageSwitcher />
          </div>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
              טיול פרטי שומרי מסורת ביפן
            </h1>
            <p className="text-xl text-slate-600">
              Private Kosher Tour in Japan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed">
                ברוכים הבאים לטיול המיוחד שלנו ביפן - חוויה ייחודית המשלבת את קסם התרבות היפנית 
                עם שמירה מלאה על כשרות ומסורת.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-r-4 border-primary">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">פרטי הטיול</h2>
              <div className="space-y-3 text-slate-700">
                <p>📅 תאריכים: בהתאם לבקשה</p>
                <p>🍽️ כשרות: כל הארוחות כשרות למהדרין</p>
                <p>🕍 שבת: מלון עם עירוב ובית כנסת</p>
                <p>👥 קבוצה: פרטית ומותאמת אישית</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 overflow-hidden">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">מסלול הטיול</h2>
              
              <div className="space-y-12">
                {/* Day 1 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 1: שני, 16.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        הגעה, אנרגיה ראשונית וכוכב נולד
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Morning/Afternoon */}
                    <div className="bg-gradient-to-l from-amber-50 to-transparent p-6 rounded-lg border-r-4 border-amber-400">
                      <h4 className="font-bold text-lg text-amber-900 mb-3">🌅 בוקר/צהריים</h4>
                      <p className="text-slate-700 leading-relaxed">
                        הגעה לנמל התעופה (נריטה/הנדה). נסיעה נוחה למלון בטוקיו (המלצה: אזור שיבמָטָה - קרוב לתחנת רכבת מרכזית ולבית חב"ד).
                      </p>
                    </div>

                    {/* Afternoon */}
                    <div className="bg-gradient-to-l from-blue-50 to-transparent p-6 rounded-lg border-r-4 border-blue-400">
                      <h4 className="font-bold text-lg text-blue-900 mb-3">☀️ אחר הצהריים</h4>
                      <p className="text-slate-700 leading-relaxed">
                        התארגנות במלון ומנוחה קלה.
                      </p>
                    </div>

                    {/* Evening */}
                    <div className="bg-gradient-to-l from-purple-50 to-transparent p-6 rounded-lg border-r-4 border-purple-400">
                      <h4 className="font-bold text-lg text-purple-900 mb-3">🌙 ערב</h4>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4 items-start">
                          <img 
                            src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/67934b1a-965e-4840-9b69-e8314b00da6b.jpg"
                            alt="Chabad House Tokyo"
                            className="w-32 h-24 object-cover rounded-lg shadow-md flex-shrink-0"
                          />
                          <div>
                            <p className="font-semibold text-slate-900 mb-2">ארוחת ערב כשרה ראשונה</p>
                            <p className="text-slate-700 leading-relaxed">
                              נסיעה לבית חב"ד טוקיו לארוחת ערב ביתית וחמה. מקום מצוין לקבלת מידע מקומי וטיפים.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4 items-start">
                          <img 
                            src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/ec02a5e7-d1af-4834-ad48-8ed3010169f8.jpg"
                            alt="Shibuya Crossing"
                            className="w-32 h-24 object-cover rounded-lg shadow-md flex-shrink-0"
                          />
                          <div>
                            <p className="font-semibold text-slate-900 mb-2">סיור ערב מסנוור ✨</p>
                            <p className="text-slate-700 leading-relaxed">
                              אחרי הארוחה, קחו רכבת תחתית קלה לשיבויה. חוו את "צומת הרחובות העמוס בעולם" (Shibuya Scramble) בהארת הלילה, צלמו את פסל הכלב הנאמן חאצ'יקו, וספגו את האורות, הצלילים והאנרגיה הבלתי-נגמרת. נסיעה קצרה חזרה למלון.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 2: שלישי, 17.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        מסורת, קיסר ואופנה
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        יום מלא בניגודים יפניים אופייניים
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Morning */}
                    <div className="bg-gradient-to-l from-red-50 to-transparent p-6 rounded-lg border-r-4 border-red-400">
                      <h4 className="font-bold text-lg text-red-900 mb-3">🏮 בוקר</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/d96faee2-4171-466b-bec2-0c73a405d983.jpg"
                          alt="Senso-ji Temple Asakusa"
                          className="w-40 h-32 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">התחלה עתיקה ברובע אסאקוּסה (Asakusa)</p>
                          <p className="text-slate-700 leading-relaxed mb-3">
                            היכנסו דרך "שער הרעם" (קמינארימון) עם הפנס האדום הענק, ושוטטו ברחוב נאקמיסה-דורי השוקק דוכני מזכרות מסורתיות וחטיפים. בסופו, הגיעו למקדש סנסו-ג'י, מקדש הבודהה העתיק והחשוב בטוקיו.
                          </p>
                          <p className="text-slate-700 leading-relaxed text-sm">
                            <span className="font-semibold">מאסאקוסה:</span> צאו לכיוון הנהר וצפו בקו הרקיע המודרני של רובע סומידה עם מגדל Tokyo Skytree ברקע (מראה מדהים לצילום).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Afternoon - Imperial Palace */}
                    <div className="bg-gradient-to-l from-green-50 to-transparent p-6 rounded-lg border-r-4 border-green-400">
                      <h4 className="font-bold text-lg text-green-900 mb-3">🏯 צהריים</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/8635449a-d2f1-46fd-94c7-7faf4acb7f26.jpg"
                          alt="Imperial Palace Tokyo"
                          className="w-40 h-32 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">הארמון הקיסרי טוקיו</p>
                          <p className="text-slate-700 leading-relaxed">
                            נסיעה להארמון הקיסרי טוקיו. התהלכו בגנים החיצוניים היפהפיים ותצפו על גשר ניז'ובאשי המפורסם – סמל של טוקיו והכניסה הראשית לארמון.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Afternoon - Harajuku */}
                    <div className="bg-gradient-to-l from-pink-50 to-transparent p-6 rounded-lg border-r-4 border-pink-400">
                      <h4 className="font-bold text-lg text-pink-900 mb-3">🌸 אחר הצהריים</h4>
                      <div className="flex gap-4 items-start mb-4">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/13f2c866-0fae-4c6a-9502-8c854e211250.jpg"
                          alt="Meiji Shrine"
                          className="w-40 h-32 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">אזור האראג'וקו (Harajuku)</p>
                          <p className="text-slate-700 leading-relaxed">
                            נסיעה לאזור האראג'וקו. התחילו במקדש מייג'י (Meiji Jingu) – נווה מדבר ירוק ושקט המוקדש לנשמות הקיסר מייג'י.
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold">אח"כ:</span> צללו לתוך ההמולה הצבעונית של רחוב טייקשיטה (Takeshita Street) – מקדש האופנה הצעירה, המתוקה והקיצונית. 🎀
                      </p>
                    </div>

                    {/* Evening */}
                    <div className="bg-gradient-to-l from-indigo-50 to-transparent p-6 rounded-lg border-r-4 border-indigo-400">
                      <h4 className="font-bold text-lg text-indigo-900 mb-3">🌆 ערב</h4>
                      <div className="space-y-3">
                        <p className="text-slate-700 leading-relaxed">
                          <span className="font-semibold">ארוחת ערב:</span> נסיעה לבית חב"ד טוקיו לארוחת ערב כשרה.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          <span className="font-semibold">אחרי הארוחה:</span> אם יש כוחות, בקרו באזור שינג'וקו להצצה אל חיי הלילה התוססים או חזרו לשיבויה. 🌃
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 3: רביעי, 18.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        טכנולוגיה, שווקים ונוף פנורמי
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        יום של חוויות מגוונות מגבהים שונים
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Morning - Akihabara */}
                    <div className="bg-gradient-to-l from-cyan-50 to-transparent p-6 rounded-lg border-r-4 border-cyan-400">
                      <h4 className="font-bold text-lg text-cyan-900 mb-3">⚡ בוקר</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/5489b641-39c0-4a90-b41e-6dbf9ba6b03c.jpg"
                          alt="Akihabara Electric Town"
                          className="w-40 h-32 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">ביקור באקיהברה (Akihabara)</p>
                          <p className="text-slate-700 leading-relaxed">
                            "עיר החשמל והתת-תרבות" – טכנולוגיה חדישה לצד עולם האנימה, המנגה והמשחקים. 🎮
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ueno Market */}
                    <div className="bg-gradient-to-l from-orange-50 to-transparent p-6 rounded-lg border-r-4 border-orange-400">
                      <h4 className="font-bold text-lg text-orange-900 mb-3">🏪 משם</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/695e6a59-762f-4281-bef7-912b36519022.jpg"
                          alt="Ameyoko Market Ueno"
                          className="w-40 h-32 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">אוּאֵנוֹ (Ueno) - שוק אמייזה-יוקוצ'ו</p>
                          <p className="text-slate-700 leading-relaxed">
                            נסיעה קצרה לאוּאֵנוֹ. בקרו בשוק אמייזה-יוקוצ'ו (Ameya-Yokocho) השוקק – שוק פתוח עם אווירה נוסטלגית, דוכני אוכל, פירות ים טריים, ומזכרות. מקום מעולה לאווירה ולצילומים. 📸
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Afternoon - Observatory */}
                    <div className="bg-gradient-to-l from-sky-50 to-transparent p-6 rounded-lg border-r-4 border-sky-400">
                      <h4 className="font-bold text-lg text-sky-900 mb-3">🏙️ צהריים</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/8f5270df-1445-499a-80e2-4403d9e2663f.jpg"
                          alt="Tokyo Metropolitan Government Building"
                          className="w-40 h-32 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">תצפית הגג של בניין הממשל המטרופוליני</p>
                          <p className="text-slate-700 leading-relaxed">
                            נסיעה לרובע שינג'וקו. עלו לתצפית הגג של בניין הממשל המטרופוליני של טוקיו (Tokyo Metropolitan Government Building). הכניסה <span className="font-bold text-green-600">חינם</span>, והנוף מהקומה ה-45 הוא אחד היפים בעיר (ובמזל טוב – גם הר פוג'י). 🗻
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Afternoon - Shinjuku */}
                    <div className="bg-gradient-to-l from-violet-50 to-transparent p-6 rounded-lg border-r-4 border-violet-400">
                      <h4 className="font-bold text-lg text-violet-900 mb-3">🌺 אחר הצהריים</h4>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold">סיור ברובע שינג'וקו עצמו</span> – עיר בתוך עיר עם גורדי שחקים, חנויות כלבו ענקיות (כמו Isetan), ואתרים כמו גני שינג'וקו גְיוֹאֵן (יפים במיוחד אם הסאקורה פורחת מוקדם השנה). 🌸
                      </p>
                    </div>

                    {/* Evening */}
                    <div className="bg-gradient-to-l from-amber-50 to-transparent p-6 rounded-lg border-r-4 border-amber-400">
                      <h4 className="font-bold text-lg text-amber-900 mb-3">🍷 ערב</h4>
                      <p className="text-slate-700 leading-relaxed">
                        ארוחת ערב כשרה אחרונה בבית חב"ד טוקיו, לסיכום החוויה הטוקיואית. 🙏
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 4: חמישי, 19.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        מהעיר להר: דרכים גיאותרמיות ונופים
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        המסע מטוקיו להר פוג'י דרך חצי האי האקון-הָאְקוֹנֶה המפורסם
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Early Morning */}
                    <div className="bg-gradient-to-l from-green-50 to-transparent p-6 rounded-lg border-r-4 border-green-400">
                      <h4 className="font-bold text-lg text-green-900 mb-3">🛒 בוקר מוקדם</h4>
                      <p className="text-slate-700 leading-relaxed mb-2">
                        <span className="font-semibold">איסוף מצרכים כשרים</span> מבית חב"ד טוקיו או מהסופרמרקט הכשר לארוחות שלושת הימים הבאים (ארוחות בוקר, צהריים וערב).
                      </p>
                      <p className="text-sm text-amber-700 bg-amber-50 p-2 rounded">
                        ⚠️ חשוב לתאם את הקנייה מראש עם בית חב"ד
                      </p>
                    </div>

                    {/* Departure */}
                    <div className="bg-gradient-to-l from-blue-50 to-transparent p-6 rounded-lg border-r-4 border-blue-400">
                      <h4 className="font-bold text-lg text-blue-900 mb-3">🚗 יציאה מטוקיו</h4>
                      <p className="text-slate-700 leading-relaxed">
                        השכרת רכב או נסיעה ברכבת שינקנסן מהירה לכיוון סטיישן אודווארה (Odawara). מהתחנה, השכרת רכב היא האפשרות הנוחה ביותר לאזור פוג'י-הָקוֹנֶה ולסופש ללא תחבורה ציבורית. קחו את הדרך הנופית. 🛣️
                      </p>
                    </div>

                    {/* Lake Ashi */}
                    <div className="bg-gradient-to-l from-teal-50 to-transparent p-6 rounded-lg border-r-4 border-teal-400">
                      <h4 className="font-bold text-lg text-teal-900 mb-3">🏞️ הפסקה ראשונה</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/22b904d4-7899-45a3-b6aa-85034fe76beb.jpg"
                          alt="Lake Ashi with Mount Fuji"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">אגם אשי (Lake Ashi) בהאקונה</p>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            נסיעה לאורך האגם היפהפה. אם מזג האוויר בהיר, תוכלו לראות את הר פוג'י משתקף במים – אחת התמונות האיקוניות של יפן.
                          </p>
                          <p className="text-slate-600 text-sm">
                            ניתן לעלות על אחת הספינות המעטרות כמו פיראטיות לשייט קצר. 🏴‍☠️
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Owakudani */}
                    <div className="bg-gradient-to-l from-orange-50 to-transparent p-6 rounded-lg border-r-4 border-orange-400">
                      <h4 className="font-bold text-lg text-orange-900 mb-3">🌋 הפסקה שנייה</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f7681140-b8b3-475d-9497-b761a5294655.jpg"
                          alt="Owakudani Volcanic Valley"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">עמק האוואקודני (Owakudani) - "עמק התה הגדול"</p>
                          <p className="text-slate-700 leading-relaxed mb-3">
                            שדה גיאותרמי פעיל עם סירחון של גופרית, קיטור העולה מהאדמה ומראות מרהיבים.
                          </p>
                          <div className="bg-slate-100 p-3 rounded-lg">
                            <p className="text-slate-800 text-sm font-semibold mb-1">🥚 חוויה מומלצת:</p>
                            <p className="text-slate-700 text-sm leading-relaxed">
                              קנו "ביצה שחורה" (Kuro-tamago) – ביצה שבושלה במי המעיינות החמים והפכה לשחורה. האמונה אומרת שהיא מאריכה את החיים ב-7 שנים!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Continue Journey */}
                    <div className="bg-gradient-to-l from-purple-50 to-transparent p-6 rounded-lg border-r-4 border-purple-400">
                      <h4 className="font-bold text-lg text-purple-900 mb-3">🗻 המשך נסיעה</h4>
                      <p className="text-slate-700 leading-relaxed">
                        נסיעה נופית נוספת לכיוון חצי האי אִידְזוּ (Izu Peninsula) ולאזור קאוואגוצ'יקו (Kawaguchiko) – המקום האולטימטיבי לצפייה בפוג'י.
                      </p>
                    </div>

                    {/* Evening */}
                    <div className="bg-gradient-to-l from-rose-50 to-transparent p-6 rounded-lg border-r-4 border-rose-400">
                      <h4 className="font-bold text-lg text-rose-900 mb-3">♨️ ערב</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/9aa4e32c-adf9-4560-8579-ecf759dc45d4.jpg"
                          alt="Villa with Mount Fuji view"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            הגעה לוילה המפנקת שלכם עם הנוף להר פוג'י. התמקמות, הכנת ארוחת ערב מהמצרכים שהבאתם, והנאה מג'קוזי או אונסן (מעיין חם) פרטי עם הנוף הבלתי נתפס.
                          </p>
                          <p className="text-sm text-amber-700 bg-amber-50 p-2 rounded">
                            💡 שימו לב: ודאו שהמעיינות החמים בוילה הם מעורבים או שיש לכם הזמנה לזמן פרטי אם אתם שומרים על צניעות.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 5: שישי, 20.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        חצי האי אִידְזוּ: קפיברות, הרים געשיים ונופי פוג'י
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        טבע געשי, חופים, וחוויות מיוחדות, עם חזרה להכנות לשבת
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Morning */}
                    <div className="bg-gradient-to-l from-emerald-50 to-transparent p-6 rounded-lg border-r-4 border-emerald-400">
                      <h4 className="font-bold text-lg text-emerald-900 mb-3">🌅 בוקר</h4>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        יציאה לטיול בחצי האי אִידְזוּ (אם הווילה שלכם באזור זה או בקאוואגוצ'יקו).
                      </p>
                      
                      <p className="font-semibold text-slate-900 mb-3">אתרים מומלצים:</p>
                      
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="font-semibold text-slate-900 mb-2">🏔️ הר אומורוֹיָאמָה (Mt. Omuroyama) – "ההר הקירח"</p>
                          <p className="text-slate-700 leading-relaxed text-sm">
                            לוע געשי כבוי בצורת חרוט מושלם. עולים לראשו ברכבל ומקבלים תצפית פנורמית של 360 מעלות על כל חצי האי אידזו והאוקיינוס. מראה עוצר נשימה.
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="flex gap-3 items-start">
                            <img 
                              src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/bf96d06a-f3a9-457f-82e2-67db082cae32.jpg"
                              alt="Capybaras in Onsen"
                              className="w-32 h-24 object-cover rounded-lg shadow-md flex-shrink-0"
                            />
                            <div>
                              <p className="font-semibold text-slate-900 mb-2">🦫 גני הספא איזוּ (Izu Shaboten Zoo) – בית הקפיברות!</p>
                              <p className="text-slate-700 leading-relaxed text-sm mb-2">
                                גן חיות קטן וחביב שבו ניתן לראות קפיברות – החיה החמודה להפליא.
                              </p>
                              <p className="text-slate-700 text-sm">
                                <span className="font-semibold">החוויה המפורסמת:</span> "אונסן הקפיברות" – בריכת מעיינות חמים שבה הקפיברות נחות בנינוחות. צילום חובה! 📸
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <p className="font-semibold text-slate-900 mb-2">🗻 תצפיות פוג'י</p>
                          <p className="text-slate-700 leading-relaxed text-sm">
                            לאורך כל הדרכים בחצי האי, חפשו נקודות תצפית על הר פוג'י מעל מפרצים וים – נוף ייחודי ושונה מזה של האגמים.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div className="bg-gradient-to-l from-yellow-50 to-transparent p-6 rounded-lg border-r-4 border-yellow-400">
                      <h4 className="font-bold text-lg text-yellow-900 mb-3">☀️ צהריים</h4>
                      <p className="text-slate-700 leading-relaxed">
                        ארוחת פיקניק מהמצרכים שהבאתם באחת מתצפות הנוף. 🧺
                      </p>
                    </div>

                    {/* Shabbat Prep */}
                    <div className="bg-gradient-to-l from-purple-50 to-transparent p-6 rounded-lg border-r-4 border-purple-400">
                      <h4 className="font-bold text-lg text-purple-900 mb-3">🕯️ אחר הצהריים</h4>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        חזרה לווילה בקאוואגוצ'יקו <span className="font-bold">לפני כניסת השבת</span>. זמן להכנות לשבת, הכנת הארוחות ובישולים לקראת שבת שלווה.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold">לפני שקיעה:</span> צאו להליכה קצרה בנחת כדי לספוג את האווירה השקטה ואת הנוף המהפנט של פוג'י לקראת כניסת השבת.
                      </p>
                    </div>

                    {/* Shabbat Evening */}
                    <div className="bg-gradient-to-l from-indigo-50 to-transparent p-6 rounded-lg border-r-4 border-indigo-400">
                      <h4 className="font-bold text-lg text-indigo-900 mb-3">✨ ערב</h4>
                      <p className="text-slate-700 leading-relaxed">
                        קבלת שבת שלווה ומיוחדת במיוחד בווילה שלכם, עם נוף להר פוג'י. חוויה בלתי נשכחת. 🙏
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 6 - Shabbat */}
                <div className="relative animate-fade-in bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 6: שבת, 21.03.2026
                      </h3>
                      <p className="text-lg text-indigo-700 font-semibold">
                        שבת שלווה על שפת האגם ⭐
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        מנוחה, הליכה נינוחה והתבוננות בנוף המופלא
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Shabbat Morning */}
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-blue-300">
                      <h4 className="font-bold text-lg text-blue-900 mb-3">🌄 בוקר שבת</h4>
                      <p className="text-slate-700 leading-relaxed">
                        ארוחת בוקר שבת שלווה בווילה. קריאה, מנוחה, תפילה (אם יש לכם מניין קטן) – בהנאה מהשקט והנוף. 📖
                      </p>
                    </div>

                    {/* Afternoon */}
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-green-300">
                      <h4 className="font-bold text-lg text-green-900 mb-3">☀️ צהריים</h4>
                      <p className="text-slate-700 leading-relaxed">
                        ארוחת צהריים שבת. 🍽️
                      </p>
                    </div>

                    {/* Shabbat Walk */}
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-teal-300">
                      <h4 className="font-bold text-lg text-teal-900 mb-3">🚶 אחר הצהריים</h4>
                      <div className="bg-teal-50 p-4 rounded-lg mb-3">
                        <p className="text-teal-900 font-semibold mb-2">💎 חוויה מיוחדת</p>
                        <p className="text-slate-700 leading-relaxed text-sm">
                          הליכה שבתית רגועה לאורך אגם קאוואגוצ'יקו. זו תהיה אחת החוויות השובות והפיוטיות ביותר בטיול.
                        </p>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        אווירת האגם שקטה, הנוף אל פוג'י (אם לא מעונן) מרהיב. ניתן ללכת בשבילים המסודרים לאורך הגדה, לשבת על ספסל ולהתבונן. זו הדרך המושלמת לחוות את הטבע היפני בשלווה. 🌅
                      </p>
                    </div>

                    {/* Evening */}
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-purple-300">
                      <h4 className="font-bold text-lg text-purple-900 mb-3">🌙 מנחה/ערב</h4>
                      <p className="text-slate-700 leading-relaxed mb-2">
                        עם צאת השבת, תוכלו להכין ארוחת ערב קלה, אולי אפילו לצאת שוב לטיול קצר לראות את פוג'י באור הכוכבים (אם האזור מואר מספיק). ⭐
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold">לילה:</span> עוד ערב של נופש בווילה.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 7 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      7
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 7: ראשון, 22.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        מסע מפוג'י לקיוטו, דרך נגויה ובמבוק
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        נסיעה ארוכה עם שתי עצירות מרתקות
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Morning - Departure */}
                    <div className="bg-gradient-to-l from-sky-50 to-transparent p-6 rounded-lg border-r-4 border-sky-400">
                      <h4 className="font-bold text-lg text-sky-900 mb-3">🚄 בוקר</h4>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        יציאה מוקדמת מהווילה בקאוואגוצ'יקו. החזרת הרכב בתחנת הרכבת המרכזית באזור (למשל, תחנת Fujisan או Mishima).
                      </p>
                      <p className="text-sm text-amber-700 bg-amber-50 p-2 rounded mb-3">
                        ⚠️ נקודה קריטית: וודאו שהשכרת הרכב מאפשרת החזרה בתחנה אחרת, רצוי ליד תחנת שינקנסן.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold">נסיעה בשינקנסן:</span> עלייה על רכבת השינקנסן (קו טוקאידו) לכיוון קיוטו.
                      </p>
                    </div>

                    {/* Nagoya Stop */}
                    <div className="bg-gradient-to-l from-red-50 to-transparent p-6 rounded-lg border-r-4 border-red-400">
                      <h4 className="font-bold text-lg text-red-900 mb-3">🏭 עצירה ראשונה: נגויה</h4>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        <span className="font-semibold">מוזיאון טויוטה</span> (Toyota Commemorative Museum of Industry and Technology). יורדים בתחנת נגויה (Nagoya). 
                      </p>
                      <p className="text-slate-700 leading-relaxed mb-2">
                        המוזיאון הזה מרתק גם אם אתם לא חובבי מכוניות. הוא מציג את ההיסטוריה של החברה מהמצאת הנולים ועד לרובוטיקה מתקדמת. תצוגה מעולה ואינטראקטיבית. 🤖
                      </p>
                      <p className="text-sm text-slate-600">
                        💡 חשבו זמן: 2-3 שעות מספיקות. אחסנו את המזוודות בתאי הנעילה בתחנה.
                      </p>
                    </div>

                    {/* Arashiyama */}
                    <div className="bg-gradient-to-l from-green-50 to-transparent p-6 rounded-lg border-r-4 border-green-400">
                      <h4 className="font-bold text-lg text-green-900 mb-3">🎋 עצירה שנייה: ארָשיָאמָה</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/b7fe50ba-3d3b-4465-ad36-e006ab6c6d26.jpg"
                          alt="Arashiyama Bamboo Grove"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            המשך נסיעה: עלייה על השינקנסן להמשך הדרך לקיוטו. יורדים בתחנת קיוטו, מניחים את המזוודות במלון (או בתאי אחסון), ונוסעים בקו רכבת מקומי לאראסיאמה.
                          </p>
                          <p className="font-semibold text-slate-900 mb-2">המטרה: חורשת הבמבוק המפורסמת</p>
                          <p className="text-slate-700 text-sm">
                            💡 לבקרו בשעות אחר הצהריים המאוחרות יכול להיות פחות עמוס.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Evening */}
                    <div className="bg-gradient-to-l from-purple-50 to-transparent p-6 rounded-lg border-r-4 border-purple-400">
                      <h4 className="font-bold text-lg text-purple-900 mb-3">🌆 ערב</h4>
                      <p className="text-slate-700 leading-relaxed mb-2">
                        הגעה למלון בקיוטו, התארגנות.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold">ארוחת ערב:</span> ארוחה כשרה שמספק בית חב"ד קיוטו. חשוב לתאם מראש את כל הארוחות איתם. 🍽️
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 8 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      8
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 8: שני, 23.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        קיוטו הקלאסית: זהב, אבנים ושווקים
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        סיור באתרי החובה המרכזיים של קיוטו
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Golden Pavilion */}
                    <div className="bg-gradient-to-l from-yellow-50 to-transparent p-6 rounded-lg border-r-4 border-yellow-400">
                      <h4 className="font-bold text-lg text-yellow-900 mb-3">✨ בוקר</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/f773b676-9575-4435-bbc4-a64a420f43b7.jpg"
                          alt="Kinkaku-ji Golden Pavilion"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">קינקקוּ-ג'י (Kinkaku-ji) – הביתן המוזהב</p>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            המקדש המצופה זהב טהור המשתקף באגם – מראה מהפנט.
                          </p>
                          <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                            💡 מומלץ להגיע עם פתיחה כדי להקדים את ההמונים
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ryoan-ji */}
                    <div className="bg-gradient-to-l from-stone-50 to-transparent p-6 rounded-lg border-r-4 border-slate-400">
                      <h4 className="font-bold text-lg text-slate-900 mb-3">🪨 משם</h4>
                      <p className="font-semibold text-slate-900 mb-2">רְיואָן-ג'י (Ryoan-ji) – גן הסלעים היבש</p>
                      <p className="text-slate-700 leading-relaxed">
                        המפורסם בעולם. שבו בהתבוננות מול 15 הסלעים המונחים על חצץ מגורפת – סמל לצמצום ושלווה באסתטיקה היפנית. 🧘
                      </p>
                    </div>

                    {/* Nishiki Market */}
                    <div className="bg-gradient-to-l from-orange-50 to-transparent p-6 rounded-lg border-r-4 border-orange-400">
                      <h4 className="font-bold text-lg text-orange-900 mb-3">🏪 צהריים</h4>
                      <p className="font-semibold text-slate-900 mb-2">שוק נישיקי (Nishiki Ichiba) – "המטבח של קיוטו"</p>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        חזרה למרכז קיוטו. רחוב צר ומכוסה עם מאות דוכנים של מטעמים מקומיים, חטיפים, ירקות כבושים, דגים טריים ומזכרות אוכל.
                      </p>
                      <p className="text-sm text-slate-600">
                        💡 טיפ: ניתן לטעום דברים שאינם דורשים בישול (כמו מוצ'י, ירקות כבושים), אך הארוחה העיקרית תהיה מהמצרכים הכשרים שלכם או מבית חב"ד.
                      </p>
                    </div>

                    {/* Kyoto Station */}
                    <div className="bg-gradient-to-l from-blue-50 to-transparent p-6 rounded-lg border-r-4 border-blue-400">
                      <h4 className="font-bold text-lg text-blue-900 mb-3">🏗️ אחר הצהריים</h4>
                      <p className="text-slate-700 leading-relaxed">
                        ביקור בתחנת הרכבת קיוטו. המבנה האדריכלי המודרני והיפה itself הוא אטרקציה. עלו למרפסת התצפית או פשוט התרשמו מהעיצוב. 🏛️
                      </p>
                    </div>

                    {/* Evening - Gion */}
                    <div className="bg-gradient-to-l from-pink-50 to-transparent p-6 rounded-lg border-r-4 border-pink-400">
                      <h4 className="font-bold text-lg text-pink-900 mb-3">🌸 ערב</h4>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        <span className="font-semibold">ארוחת ערב:</span> ארוחת ערב כשרה מבית חב"ד קיוטו.
                      </p>
                      <p className="font-semibold text-slate-900 mb-2">אחרי הארוחה: רובע גיון (Gion)</p>
                      <p className="text-slate-700 leading-relaxed">
                        טיול ערב ברובע הגיישות המפורסם. סיכוי לראות גיישה או מייקו (גיישה מתלמדת) ממהרת בין הביתנים. הרחובות המוארים במנורות מסורתיות הם קסומים. בקרו בחצר המקדש יאסקה (Yasaka Jinja) המואר. 🏮
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 9 */}
                <div className="relative animate-fade-in bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-br from-red-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      9
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 9: שלישי, 24.03.2026
                      </h3>
                      <p className="text-lg text-red-700 font-semibold">
                        יום הירושימה ומיאג'ימה (אינטנסיבי מאוד!) ⚠️
                      </p>
                      <div className="bg-red-100 p-3 rounded-lg mt-2">
                        <p className="text-red-900 text-sm font-semibold">
                          🚨 הערה לוגיסטית קריטית: זהו יום ארוך מאוד (כ-3.5 שעות נסיעה בכיוון אחד). חייבים לצאת מוקדם מאוד!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Early Morning */}
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-amber-300">
                      <h4 className="font-bold text-lg text-amber-900 mb-3">⏰ בוקר מוקדם (6:00-7:00)</h4>
                      <p className="text-slate-700 leading-relaxed">
                        עלייה על שינקנסן סאניו (Sanyo Shinkansen) מקיוטו לכיוון הירושימה (Hiroshima). 🚄
                      </p>
                    </div>

                    {/* Hiroshima Peace Memorial */}
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-slate-400">
                      <h4 className="font-bold text-lg text-slate-900 mb-3">☮️ בוקר בהירושימה</h4>
                      <div className="flex gap-4 items-start mb-4">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/bee391c6-6272-4387-9464-4865412c7aef.jpg"
                          alt="Hiroshima Peace Memorial"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            הגעה להירושימה. נסיעה ברכבת מקומית (או חשמלית נוסטלגית) לפארק השלום (Heiwa Koen).
                          </p>
                          <p className="font-semibold text-slate-900 mb-2">כיפת הגנבּאקו (Atomic Bomb Dome)</p>
                          <p className="text-slate-700 text-sm">
                            השלד של המבנה ששרד את הפיצוץ, אתר מורשת עולמית מטריד וחזק.
                          </p>
                        </div>
                      </div>
                      <div className="bg-slate-100 p-3 rounded-lg">
                        <p className="font-semibold text-slate-900 mb-1">מוזיאון השלום של הירושימה</p>
                        <p className="text-slate-700 text-sm">
                          חובה מבחינה היסטורית ורגשית. תכננו לפחות שעתיים. 🕊️
                        </p>
                      </div>
                    </div>

                    {/* Miyajima */}
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-red-300">
                      <h4 className="font-bold text-lg text-red-900 mb-3">⛩️ אחר הצהריים: מיאג'ימה</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/92cbd690-ecfb-4cb1-a7bc-0bf504f94bd6.jpg"
                          alt="Miyajima Floating Torii"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            נסיעה ברכבת מהירה (JR) ותחבורת מעבורת למיאג'ימה (Miyajima) – האי הקדוש.
                          </p>
                          <p className="font-semibold text-slate-900 mb-2">שער הטוריי הצף של אִיצוּקוּשימה</p>
                          <p className="text-slate-700 text-sm leading-relaxed">
                            צפו בשער הטוריי האדום הענקי הנראה כאילו צף על המים בזמן הגאות (תלוי בשעה). שוטטו ברחוב הראשי עם האיילים הרבים והחנויות. 🦌
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Return */}
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-blue-300">
                      <h4 className="font-bold text-lg text-blue-900 mb-3">🌙 ערב</h4>
                      <p className="text-slate-700 leading-relaxed mb-2">
                        חזרה ברכבת מהירה (שינקנסן) לקיוטו. זו נסיעה ארוכה. הגעה מאוחרת.
                      </p>
                      <p className="text-slate-700 leading-relaxed text-sm">
                        <span className="font-semibold">ארוחת ערב:</span> אם תיאומתם מראש, ארוחה כשרה שהזמנתם מבית חב"ד קיוטו תהיה מחכה לכם (וודאו איתם על האפשרות לארוחה מאוחרת).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 10 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      10
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 10: רביעי, 25.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        שערים אדומים ואיילים קדושים
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        שניים מהאתרים הסמליים ביותר באזור קנסאי
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Fushimi Inari */}
                    <div className="bg-gradient-to-l from-red-50 to-transparent p-6 rounded-lg border-r-4 border-red-500">
                      <h4 className="font-bold text-lg text-red-900 mb-3">⛩️ בוקר</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/b05decab-5bc9-4e14-be38-6103f0b0ba68.jpg"
                          alt="Fushimi Inari Torii Gates"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">פוּשִימִי אִינָארִי (Fushimi Inari Taisha)</p>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            מקדש השינטו המפורסם עם אלפי שערי הטוריי האדומים (Senbon Torii) היוצרים שבילים על ההר.
                          </p>
                          <p className="text-sm text-green-700 bg-green-50 p-2 rounded">
                            💡 מומלץ להגיע מוקדם מאוד (לפני 8:00) כדי להמנע מההמונים. הליכה של כשעה בשביל הראשי תספיק לחוויה מלאה.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Nara */}
                    <div className="bg-gradient-to-l from-amber-50 to-transparent p-6 rounded-lg border-r-4 border-amber-400">
                      <h4 className="font-bold text-lg text-amber-900 mb-3">🦌 צהריים בנארה</h4>
                      <div className="flex gap-4 items-start mb-4">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/ffbf2147-b8ef-4ee6-8a35-e3be3430aad7.jpg"
                          alt="Nara Deer Park"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            נסיעה ברכבת לנארה (Nara).
                          </p>
                          <p className="font-semibold text-slate-900 mb-2">טוֹדָאִי-ג'י (Todai-ji)</p>
                          <p className="text-slate-700 text-sm mb-3">
                            אולם העץ הגדול בעולם, ובו פסל הבודהה הענק (דָאיבּוּטסוּ). 🛕
                          </p>
                          <p className="text-slate-700 text-sm">
                            בפארק נארה תפגשו אלפי איילים חופשיים ונחמדים שנחשבים לקדושים. ניתן לקנות עבורם קרקרים מיוחדים להאכלה.
                          </p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-slate-700 text-sm">
                          <span className="font-semibold">ביקור נוסף אפשרי:</span> מקדש קאסוּגָה טאישה (Kasuga Taisha) עם מאות מנורות האבן. 🏮
                        </p>
                      </div>
                    </div>

                    {/* Evening */}
                    <div className="bg-gradient-to-l from-indigo-50 to-transparent p-6 rounded-lg border-r-4 border-indigo-400">
                      <h4 className="font-bold text-lg text-indigo-900 mb-3">🌆 ערב</h4>
                      <p className="text-slate-700 leading-relaxed">
                        חזרה לקיוטו.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 11 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      11
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 11: חמישי, 26.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        מאוסקה הקלאסית למרפסת השמיים
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        מעבר מקיוטו לקובה דרך אוסקה התוססת
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Osaka Castle */}
                    <div className="bg-gradient-to-l from-orange-50 to-transparent p-6 rounded-lg border-r-4 border-orange-400">
                      <h4 className="font-bold text-lg text-orange-900 mb-3">🏯 בוקר</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/ba8396d8-2f99-403a-995b-069949db747f.jpg"
                          alt="Osaka Castle"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            אריזת מזוודות ונסיעה ברכבת מהירה (שינקנסן) מתחנת קיוטו לתחנת שין-אוסקה (Shin-Osaka). הפקדת המזוודות בתאי אחסון.
                          </p>
                          <p className="font-semibold text-slate-900 mb-2">טירת אוסקה (Osaka Castle)</p>
                          <p className="text-slate-700 text-sm">
                            הטירה המפוארת. ניתן להיכנס למוזיאון המודרני שבתוכה (העליות לתצפית נהדרות) או להסתפק בצילום החיצוני והליכה בגנים היפים.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Umeda Sky Building */}
                    <div className="bg-gradient-to-l from-sky-50 to-transparent p-6 rounded-lg border-r-4 border-sky-400">
                      <h4 className="font-bold text-lg text-sky-900 mb-3">🏙️ צהריים</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/fb03e58d-25f1-49a3-9f66-615dd36f68b4.jpg"
                          alt="Umeda Sky Building"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">אומדה סקי בילדינג (Umeda Sky Building)</p>
                          <p className="text-slate-700 text-sm">
                            מעבר לאזור אומדה (Umeda). עלייה לתצפית הפנורמית המרהיבה מגגו הצף ("הגן השמימי"). 🌤️
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dotonbori */}
                    <div className="bg-gradient-to-l from-yellow-50 to-transparent p-6 rounded-lg border-r-4 border-yellow-400">
                      <h4 className="font-bold text-lg text-yellow-900 mb-3">🎭 אחר הצהריים</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/e4d440e9-2c95-49c3-9f73-ce0b732fb91a.jpg"
                          alt="Dotonbori"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">דוטונבורי (Dotonbori)</p>
                          <p className="text-slate-700 text-sm">
                            טבילה באווירה השוקקת, הצבעונית והקולינרית של אוסקה. ראו את השלטים המכניים הענקיים (הליצן של גליקו, התמנון של קוני-דוראקו), את תעלת המים, וספגו את האנרגיה. ✨
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Evening - Kobe */}
                    <div className="bg-gradient-to-l from-purple-50 to-transparent p-6 rounded-lg border-r-4 border-purple-400">
                      <h4 className="font-bold text-lg text-purple-900 mb-3">🌆 ערב</h4>
                      <p className="text-slate-700 leading-relaxed mb-2">
                        נסיעה קצרה ברכבת מהירה (שינקנסן) מתחנת שין-אוסקה לקובה (Kobe). התמקמות במלון.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold">ארוחת ערב:</span> ארוחה כשרה בבית חב"ד קובה. חשוב לתאם מראש את כל הארוחות (כולל שבת). 🍽️
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 12 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      12
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 12: שישי, 27.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        יוקרה, גשרים ומקדשי מים באי אַוָואגִ'י
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        טיול יום מרתק לאי המפורסם בגשר הענק שלו
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Akashi Bridge */}
                    <div className="bg-gradient-to-l from-blue-50 to-transparent p-6 rounded-lg border-r-4 border-blue-400">
                      <h4 className="font-bold text-lg text-blue-900 mb-3">🌉 בוקר</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/244161ed-a16d-49c4-83ef-e8f5ca9093f1.jpg"
                          alt="Akashi Kaikyo Bridge"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="font-semibold text-slate-900 mb-2">גשר עַקַאשִי-קַאִיקְיוֹ (Akashi-Kaikyo Bridge)</p>
                          <p className="text-slate-700 text-sm leading-relaxed mb-2">
                            נסיעה לחציית הגשר התלוי הארוך בעולם בעת בנייתו. ניתן לחצות באוטובוס תיירים מיוחד או להשקיף עליו ממוזיאון הגשר.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Awaji Island */}
                    <div className="bg-gradient-to-l from-teal-50 to-transparent p-6 rounded-lg border-r-4 border-teal-400">
                      <h4 className="font-bold text-lg text-teal-900 mb-3">🏝️ באי אַוָואגִ'י</h4>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="font-semibold text-slate-900 text-sm mb-1">פארק הנוף של גשר הענק עַקַאשִי</p>
                          <p className="text-slate-700 text-sm">
                            נקודות תצפית מרהיבות על הגשר ועל הים הפנימי סטו. 🌊
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="font-semibold text-slate-900 text-sm mb-1">מקדש מים ייחודי</p>
                          <p className="text-slate-700 text-sm">
                            מקדש אִיזוּמוֹ נוֹ אוֹקוּנִי – פסלי אבן עומדים בתוך בריכה רדודה. 💧
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="font-semibold text-slate-900 text-sm mb-1">מקדש אונאקומי (Onokorojima)</p>
                          <p className="text-slate-700 text-sm">
                            המקדש היפני העתיק ביותר – לפי המיתולוגיה, זהו האי הראשון שנוצר ביפן. ⛩️
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Return for Shabbat */}
                    <div className="bg-gradient-to-l from-indigo-50 to-transparent p-6 rounded-lg border-r-4 border-indigo-400">
                      <h4 className="font-bold text-lg text-indigo-900 mb-3">🕯️ אחר הצהריים</h4>
                      <p className="text-slate-700 leading-relaxed mb-2">
                        חזרה לקובה <span className="font-bold">לפני כניסת השבת</span>. הכנות לשבת.
                      </p>
                      <p className="text-slate-700 leading-relaxed">
                        <span className="font-semibold">ערב:</span> קבלת שבת בקובה (בבית חב"ד או במלון, בהתאם לתיאום). ✨
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 13 - Shabbat in Kobe */}
                <div className="relative animate-fade-in bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      13
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 13: שבת, 28.03.2026
                      </h3>
                      <p className="text-lg text-indigo-700 font-semibold">
                        שבת שלווה בקובה ⭐
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        מנוחה והליכות נינוחות בעיר ההררית והיפה
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-blue-300">
                      <h4 className="font-bold text-lg text-blue-900 mb-3">🌄 בוקר וצהריים שבת</h4>
                      <p className="text-slate-700 leading-relaxed">
                        מנוחה, תפילה (אם יש מניין), ארוחות שבת. 📖
                      </p>
                    </div>

                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-green-300">
                      <h4 className="font-bold text-lg text-green-900 mb-3">🚶 אחר הצהריים</h4>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        הליכה שבתית רגועה באזור המלון או באחד מהרבעים היפים של קובה. אפשרויות נעימות:
                      </p>
                      <div className="space-y-2">
                        <p className="text-slate-700 text-sm">🏘️ רובע קיטַאנוֹ (Kitano) עם ה"איז'ינקאן" – הבתים המערביים הישנים של סוחרים זרים</p>
                        <p className="text-slate-700 text-sm">⚓ הטיילת של נמל קובה (Kobe Harborland) עם אווירה מרווחת וימית</p>
                        <p className="text-slate-700 text-sm">🌳 פארק סוריקוגוצ'ן (Sorakuen Garden) – גן יפני מסורתי ויפה</p>
                      </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg border-r-4 border-purple-300">
                      <h4 className="font-bold text-lg text-purple-900 mb-3">🌙 ערב</h4>
                      <p className="text-slate-700 leading-relaxed">
                        הבדלה וארוחת ערב קלה.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 14 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      14
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 14: ראשון, 29.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        טירות לבנות ועיירות תעלות
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        מעבר לקוראשיקי עם ביקור באחד מסמלי יפן
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Himeji Castle */}
                    <div className="bg-gradient-to-l from-slate-50 to-transparent p-6 rounded-lg border-r-4 border-slate-400">
                      <h4 className="font-bold text-lg text-slate-900 mb-3">🏯 בוקר</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/cb0c078a-3fa0-46b7-9f22-bcc40cdd3d0f.jpg"
                          alt="Himeji Castle"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            אריזת מזוודות ונסיעה ברכבת מהירה (שינקנסן) מקובה לתחנת הִימֵגִ'י (Himeji). הפקדת מזוודות.
                          </p>
                          <p className="font-semibold text-slate-900 mb-2">טירת הימג'י (Himeji Castle) – "טירת הלובן"</p>
                          <p className="text-slate-700 text-sm">
                            הטירה היפהפייה והשמורה ביותר ביפן, אתר מורשת עולמית. הביקור (כולל עלייה למגדל הראשי) אורך 2-3 שעות. חובה! ⭐
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Kurashiki */}
                    <div className="bg-gradient-to-l from-cyan-50 to-transparent p-6 rounded-lg border-r-4 border-cyan-400">
                      <h4 className="font-bold text-lg text-cyan-900 mb-3">🏘️ צהריים ואחר הצהריים</h4>
                      <div className="flex gap-4 items-start">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/07fa0e52-92d8-4d91-8b19-242daeee2f29.jpg"
                          alt="Kurashiki Bikan Quarter"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            נסיעה ברכבת מהירה מהימג'י לקוּרָאשִיקִי (Kurashiki). הגעה לוילה והתמקמות.
                          </p>
                          <p className="font-semibold text-slate-900 mb-2">רובע בִּיקָאן (Bikan) ההיסטורי</p>
                          <p className="text-slate-700 text-sm">
                            אם נשאר זמן, צאו לסיור ראשון – תעלות מים שקטות, עצי ערבה, ומחסנים לבנים מימי הסמוראים. אווירה פיוטית במיוחד. 🌸
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-l from-green-50 to-transparent p-6 rounded-lg border-r-4 border-green-400">
                      <h4 className="font-bold text-lg text-green-900 mb-3">🍽️ ערב</h4>
                      <p className="text-slate-700 leading-relaxed">
                        ארוחת ערב ביתית ראשונה בווילה מהמצרכים הכשרים שלכם (אולי קניות שהוזמנו מראש או שהבאתם מקובה).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 15 */}
                <div className="relative animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      15
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 15: שני, 30.03.2026
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        יום אמנות ואיים בים הפנימי
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        חוויה אמנותית עכשווית ייחודית באי נָאוֹשִימָה – "אי האמנות"
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 mr-20">
                    {/* Naoshima Art Island */}
                    <div className="bg-gradient-to-l from-yellow-50 to-transparent p-6 rounded-lg border-r-4 border-yellow-400">
                      <h4 className="font-bold text-lg text-yellow-900 mb-3">🎨 בוקר מוקדם</h4>
                      <div className="flex gap-4 items-start mb-4">
                        <img 
                          src="https://cdn.poehali.dev/projects/c4212dcd-652d-4010-aca8-ce0bf3b0da2c/files/dfd18685-0ad8-4c5b-897d-439a2ac42ea3.jpg"
                          alt="Naoshima Art Island"
                          className="w-48 h-36 object-cover rounded-lg shadow-md flex-shrink-0"
                        />
                        <div>
                          <p className="text-slate-700 leading-relaxed mb-2">
                            נסיעה מתחנת קוראשיקי לאונן (Uno) (כ-30 דקות ברכבת). מעבורת קצרה מ-Uno לנאושימה.
                          </p>
                          <p className="font-semibold text-slate-900 mb-1">באי נאושימה:</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="font-semibold text-slate-900 text-sm mb-1">🏛️ מוזיאון צ'יצ'ו (Chichu Art Museum)</p>
                          <p className="text-slate-700 text-sm mb-2">
                            מוזיאון תת-קרקעי שתוכנן על ידי טאדאו אנדו ומציג יצירות של מונה וג'יימס טורל.
                          </p>
                          <p className="text-sm text-red-700 bg-red-50 p-2 rounded">
                            ⚠️ חובה להזמין כרטיסים מראש באינטרנט!
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="font-semibold text-slate-900 text-sm mb-1">🖼️ בית בנוסה (Benesse House Museum)</p>
                          <p className="text-slate-700 text-sm">מוזיאון ואתר אמנות נוסף</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm">
                          <p className="font-semibold text-slate-900 text-sm mb-1">🎃 הדלעת הצהובה של יאיואי קוסאמה</p>
                          <p className="text-slate-700 text-sm">על הרציף – אייקון של האי</p>
                        </div>
                      </div>
                    </div>

                    {/* Return */}
                    <div className="bg-gradient-to-l from-blue-50 to-transparent p-6 rounded-lg border-r-4 border-blue-400">
                      <h4 className="font-bold text-lg text-blue-900 mb-3">🌅 אחר הצהריים</h4>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        חזרה מהאי. אם יש זמן, ניתן לנסוע לגני רִיצוּרִין (Ritsurin Garden) בטַאקָאמַאצוּ (Takamatsu) – אחד הגנים היפנים היפים ביותר, אך זה יאריך את היום משמעותית (כשעה נסיעה מקוראשיקי).
                      </p>
                      <p className="text-slate-700 text-sm">
                        💡 <span className="font-semibold">אלטרנטיבה נינוחה יותר:</span> חזרה לקוראשיקי וטיול ברובע ביקאן.
                      </p>
                    </div>

                    <div className="bg-gradient-to-l from-purple-50 to-transparent p-6 rounded-lg border-r-4 border-purple-400">
                      <h4 className="font-bold text-lg text-purple-900 mb-3">🌙 ערב</h4>
                      <p className="text-slate-700 leading-relaxed">
                        ארוחת ערב שניה בווילה בקוראשיקי.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 16 - Final Day */}
                <div className="relative animate-fade-in bg-gradient-to-br from-amber-50 to-rose-50 p-6 rounded-2xl border-2 border-amber-200">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-gradient-to-br from-amber-500 to-rose-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">
                      16
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        יום 16: שלישי, 31.03.2026
                      </h3>
                      <p className="text-lg text-amber-700 font-semibold">
                        מסע חזרה והמראה לישראל ✈️
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mr-20">
                    <div className="bg-white/80 backdrop-blur p-6 rounded-lg">
                      <p className="text-slate-700 leading-relaxed mb-3">
                        <span className="font-semibold text-slate-900">בוקר:</span> אריזת מזוודות ויציאה מהווילה בקוראשיקי.
                      </p>
                      <p className="text-slate-700 leading-relaxed mb-3">
                        <span className="font-semibold text-slate-900">נסיעה:</span> רכבת מהירה (שינקנסן) או רכבת מקומית לכיוון נמל התעופה קנסאי (Kansai International Airport - KIX).
                      </p>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        <span className="font-semibold text-slate-900">המראה:</span> טיסה חזרה לישראל עם זיכרונות בלתי נשכחים מארץ השמש העולה. 🌅
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg text-center">
                        <p className="text-lg font-bold text-slate-900 mb-2">🎌 סוף מסע מופלא! 🎌</p>
                        <p className="text-slate-700 text-sm">
                          מאחלים לכם נסיעה בטוחה ושמירה על כל החוויות המיוחדות שצברתם ביפן
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JPKosher;