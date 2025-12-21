const JPKosher = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JPKosher;