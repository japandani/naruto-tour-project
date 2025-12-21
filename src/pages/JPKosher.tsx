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

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JPKosher;