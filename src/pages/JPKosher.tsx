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

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">מסלול הטיול</h2>
              <p className="text-slate-600">המסלול המפורט יתווסף בקרוב...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JPKosher;
