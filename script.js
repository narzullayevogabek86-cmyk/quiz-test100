// 1. BARCHA SAVOLLAR BAZASI (To'liq 100 ta)
const allQuestionsData = [
    { question: "Kombinatorika necha xil turdagi birikmalarni o’z ichiga oladi?", options: ["3 xil", "4 xil", "5 xil", "2 xil"], correctText: "3 xil" },
    { question: "O’rtacha qiymatni hisoblash uchun Excelda qaysi funksiyadan foydalanamiz?", options: ["СРЗНАЧ", "ПЕРЕСТ", "ЧИСЛКОМБ", "ФАКТР"], correctText: "СРЗНАЧ" },
    { question: "Faktorialni hisoblash uchun Excelda qaysi funksiyadan foydalanamiz?", options: ["ФАКТР", "СРЗНАЧ", "ПЕРЕСТ", "ЧИСЛКОМБ"], correctText: "ФАКТР" },
    { question: "Kombinatorikaning asosiy qoidalari nechta?", options: ["2 ta", "3 ta", "4 ta", "1 ta"], correctText: "2 ta" },
    { question: "Kombinatorikaning asosiy qoidalari qaysilar?", options: ["qo’shish, ko’paytirish", "guruhlash, taqsimot", "moslik, o’rin almashtirish", "kommutativlik, assosiativlik"], correctText: "qo’shish, ko’paytirish" },
    { question: "Regression tenglamaning regression parametrlarini hisoblash uchun qaysi usuldan foydalaniladi?", options: ["eng kichik kvadratlar usulidan", "o’rta qiymatlarni toppish usulidan", "o’rinlashtirish orqali", "o’rin almashtirish orqali"], correctText: "eng kichik kvadratlar usulidan" },
    { question: "Mediana bu….", options: ["Kuzatuv natijalaridan olingan qiymatlar orasidagi o’rtaliq qiymat", "Kuzatuv natijalarida eng ko’p uchraydigan qiymat", "Hodisaning ro’y berish imkonini miqdorini ko’rsatuvchi qiymat", "To’plam elementlarini berilgan qoidalar asosida tanlash"], correctText: "Kuzatuv natijalaridan olingan qiymatlar orasidagi o’rtaliq qiymat" },
    { question: "Moda bu….", options: ["Kuzatuv natijalarida eng ko’p uchraydigan qiymat", "Kuzatuv natijalaridan olingan qiymatlar orasidagi o’rtaliq qiymat", "Hodisaning ro’y berish imkonini miqdorini ko’rsatuvchi qiymat", "To’plam elementlarini berilgan qoidalar asosida tanlash"], correctText: "Kuzatuv natijalarida eng ko’p uchraydigan qiymat" },
    { question: "Ehtimollar nazariyasi bu….", options: ["Hodisaning ro’y berish imkonini miqdorini ko’rsatuvchi qiymat", "Kuzatuv natijalaridan olingan qiymatlar orasidagi o’rtaliq qiymat", "Kuzatuv natijalarida eng ko’p uchraydigan qiymat", "To’plam elementlarini berilgan qoidalar asosida tanlash"], correctText: "Hodisaning ro’y berish imkonini miqdorini ko’rsatuvchi qiymat" },
    { question: "Kombinatorika bu….", options: ["To’plam elementlarini berilgan qoidalar asosida tanlash va joylashtirish", "Kuzatuv natijalaridan olingan qiymatlar orasidagi o’rtaliq qiymat", "Kuzatuv natijalarida eng ko’p uchraydigan qiymat", "Hodisaning ro’y berish imkonini miqdorini ko’rsatuvchi qiymat"], correctText: "To’plam elementlarini berilgan qoidalar asosida tanlash va joylashtirish" },
    { question: "Regression tenglamaning regression parametrlarini hisoblashda bizaga necha turdagi funksiyalardan tanlanadi.", options: ["7 xil", "8 xil", "3 xil", "4 xil"], correctText: "7 xil" },
    { question: "Regressiya tenglamasini chiziqli ko’rinishini ko’rsating?", options: ["y=a0+a1x", "y=a0*a1x", "y=a0/x+a1", "y=a0+a1x+a2x2"], correctText: "y=a0+a1x" },
    { question: "Regressiya tenglamasini ko’rsatkichli ko’rinishini ko’rsating?", options: ["y=a0^a1x", "y=a0+a1x", "y=a0/x+a1", "y=a0+a1x+a2x2"], correctText: "y=a0^a1x" },
    { question: "Regressiya tenglamasini giperbolik (teskari) ko’rinishini ko’rsating?", options: ["y= a0+a1/x", "y=a0+a1x", "y=a0*a1x", "y=a0+a1x+a2x2"], correctText: "y= a0+a1/x" },
    { question: "Regressiya tenglamasini ikkinchi darajali parabolic ko’rinishini ko’rsating?", options: ["y=a0+a1x+a2x2", "y=a0+a1x", "y=a0*a1x", "y=a0+a1/x"], correctText: "y=a0+a1x+a2x2" },
    { question: "Regressiya tenglamasini logorifmik ko’rinishini ko’rsating?", options: ["y= a0+a1lgx", "y=a0+a1x", "y=lnx+a0", "y=a0+a1x+a2x2"], correctText: "y= a0+a1lgx" },
    { question: "O’zaro bog’lanishda korrelyatsiya koeffisiyenti qiymati qaysi oraliqda bo’lishi kerak?", options: ["0-1", "1-2", "2-3", "-1-0"], correctText: "0-1" },
    { question: "1,2,3 raqamlardan raqamlardan ularning har biri tarkibida faqat bir marta uchraydigan nechta 3 xonali son tuzish mumkin?", options: ["6", "4", "8", "9"], correctText: "6" },
    { question: "n ta elementdan m tadan o’rinlashtirish masalasini yechishda Excel dasturining qaysi funktsiyasidan faydalaniladi?", options: ["ПЕРЕСТ", "СРЗНАЧ", "ЧИСЛКОМБ", "ФАКТР"], correctText: "ПЕРЕСТ" },
    { question: "n ta element orasidan m ta elementdan tuzilgan mosliklarni hisoblashda Excel dasturining qaysi funktsiyasidan faydalaniladi?", options: ["ЧИСЛКОМБ", "СРЗНАЧ", "ПЕРЕСТ", "ФАКТР"], correctText: "ЧИСЛКОМБ" },
    { question: "To’rt element A,B,C,D dan ikkita elementli nechta o’rinlashtirish mumkin?", options: ["12", "6", "8", "9"], correctText: "12" },
    { question: "Excel dasturida ФАКТР(4) funktsiyasi qiymati necha bo’ladi?", options: ["24", "12", "16", "36"], correctText: "24" },
    { question: "Excel dasturida o’rinlashtirish funktsiyasi ПЕРЕСТ(5;2) qiymati necha bo’ladi?", options: ["20", "16", "24", "36"], correctText: "20" },
    { question: "Excel dasturida mosliklarni hisoblash funktsiyasi ЧИСЛКОМБ(6;2) qiymatini toping?", options: ["15", "20", "18", "24"], correctText: "15" },
    { question: "n ta elementli o ‘rinlashtirishlar soni qaysi formula yordamida topiladi?", options: ["Pn=n!", "Anm=n!/(n-m)!", "Cnm=n!/m!(n-m)!", "Anm=n!/(n-m)!"], correctText: "Pn=n!" },
    { question: "n ta elementdan m tadan turli o ‘rinlashtirishlar soni qaysi formula yordamida topiladi?", options: ["Anm=n!/(n-m)!", "Cnm=n!/m!(n-m)!", "Pn=n!", "Anm=n!/(n-m)!"], correctText: "Anm=n!/(n-m)!" },
    { question: "n ta element orasidan m ta elementdan turli mosliklar soni qaysi formula yordamida topiladi?", options: ["Cnm=n!/m!(n-m)!", "Anm=n!/(n-m)!", "Pn=n!", "Anm=n!/(n-m)!"], correctText: "Cnm=n!/m!(n-m)!" },
    { question: "n ta elementdan m tadan takrorlanishli o ‘rinlashtirishlar soni qaysi formula yordamida topiladi?", options: ["Anm=nm", "Cnm=m!/(n-m)!", "Anm=n!/(n-m)!", "Pn=n!"], correctText: "Anm=nm" },
    { question: "Tijorat banki boshqarmasi turli lavozimlarga 8 ta nomzoddan 3 tasini tanlamoqda. Har bir nomzod bir xil imkoniyatga ega. 8 ta nomzoddan 3 kishidan iborat nechta guruh tuzish mumkin?", options: ["336", "340", "720", "504"], correctText: "336" },
    { question: "Tijorat banki boshqarmasi bir xil lavozimlarga 10 ta nomzoddan 3 tasini tanlamoqda. 10 ta nomzoddan 3 kishidan iborat nechta guruh tuzish mumkin?", options: ["120", "336", "620", "720"], correctText: "120" },
    { question: "Seyfning shifrli kodi olti xonali sondan iborat. Kodlashtirganda nechta turli kombinatsiya tuzish mumkin?", options: ["100000", "100", "1000", "10000"], correctText: "100000" },
    { question: "A va В hodisaning yig'indisi A + В deb nimaga aytiladi?", options: ["yoki A hodisaga, yoki В hodisaga, yoki ularning ikkalasiga ham tegishli bo'lgan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "A va В larning har ikkalasiga tegishli bo'lgan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "A ga tegishli va В ga tegishli bo'lmagan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "A va B hodisalarning ikkalasiga ham tegishli, yoki ikkalasiga ham tegishli bo'lmagan"], correctText: "yoki A hodisaga, yoki В hodisaga, yoki ularning ikkalasiga ham tegishli bo'lgan elementar hodisalardan iborat bo'lgan hodisaga aytiladi." },
    { question: "A va В hodisaning ko’paytmasi A * В deb nimaga aytiladi?", options: ["A va В larning har ikkalasiga tegishli bo'lgan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "yoki A hodisaga, yoki В hodisaga, yoki ularning ikkalasiga ham tegishli bo'lgan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "A ga tegishli va В ga tegishli bo'lmagan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "A va B hodisalarning ikkalasiga ham tegishli, yoki ikkalasiga ham tegishli bo'lmagan"], correctText: "A va В larning har ikkalasiga tegishli bo'lgan elementar hodisalardan iborat bo'lgan hodisaga aytiladi." },
    { question: "A va В hodisaning ayirmasi A \\ В deb nimaga aytiladi?", options: ["A ga tegishli va В ga tegishli bo'lmagan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "yoki A hodisaga, yoki В hodisaga, yoki ularning ikkalasiga ham tegishli bo'lgan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "A va В larning har ikkalasiga tegishli bo'lgan elementar hodisalardan iborat bo'lgan hodisaga aytiladi.", "A va B hodisalarning ikkalasiga ham tegishli, yoki ikkalasiga ham tegishli bo'lmagan"], correctText: "A ga tegishli va В ga tegishli bo'lmagan elementar hodisalardan iborat bo'lgan hodisaga aytiladi." },
    { question: "«Klassik» ehtimollik yoki nisbiy chastota formulasini ko’rsating?", options: ["P(A)=m/n", "P(A)=m+n", "P(A)=m-n", "P(A)=m*n"], correctText: "P(A)=m/n" },
    { question: "Nishonga otishda tekkazishlar nisbiy chastotasi 0,6 bo‘lgan. Agar mergan 12 marta nishonga tekkiza olmagan bo‘lsa, jami b’olib necha marta o‘q otilgan?", options: ["30", "20", "15", "10"], correctText: "30" },
    { question: "Modelning o‘rganilayotgan jarayonga mos kelishi nima deb ataladi?", options: ["adekvatlik", "multikollenearlik", "optimallik", "apriorlik"], correctText: "adekvatlik" },
    { question: "Modelni idensifikatsiyalash bu –", options: ["Modelning parametrlarni statistik baholash", "Kerakli statistik ma’lumotlarni yig‘ish", "Modelning ma’lumotlar aniqligini tekshirish", "Modelning shaklini, tuzilishini va uning bog‘lanishlar shaklini ta’riflash"], correctText: "Modelning parametrlarni statistik baholash" },
    { question: "Modelni verifikatsiyalash bu –", options: ["Modelning adekvatligini va aniqligini tekshirish", "Kerakli statistik ma’lumotlarni yig‘ish", "Modelning shaklini, tuzilishini va uning bog‘lanishlar shaklini ta’riflash", "Modelning parametrlarni statistik baholash"], correctText: "Modelning adekvatligini va aniqligini tekshirish" },
    { question: "Fisher mezoni quyidagini ko‘rsatadi", options: ["Olingan modelning o‘rganilayotgan jarayonga mosligini", "Omillar orasidagi bog‘lanish zichligini", "Olingan modeldagi koeffitsiyentlarning ahamiyatliligini", "Korrelyatsiya koeffitsiyentining ishonchliligini"], correctText: "Olingan modelning o‘rganilayotgan jarayonga mosligini" },
    { question: "Regressiya tenglamasi bu-", options: ["Natijaviy omil va unga ta’sir etuvchi omillar orasidagi bog‘lanish formulasi", "Тa’sir etuvchi omillar orasidagi munosabati", "Asosiy omil va unga ta’sir etuvchi omillar orasidagi bog‘lanish zichligi", "Omillar orasidagi munosabatni ko‘rsatmaydi"], correctText: "Natijaviy omil va unga ta’sir etuvchi omillar orasidagi bog‘lanish formulasi" },
    { question: "Eng kichik kvadratlar usuli qanday maqsadda foydalaniladi?", options: ["Dinamik qatorlarni tekislash uchun", "Omillar orasidagi bog‘lanish zichligini aniqlash uchun", "Dinamik qatorlardagi o‘rtacha qiymatlarni aniqlash uchun", "Omillarning o‘rtacha kvadrat chetlanishini aniqlash uchun"], correctText: "Dinamik qatorlarni tekislash uchun" },
    { question: "Iqtisodiy jarayonlarni bashoratlashdan maqsad nima?", options: ["Ko‘rsatkichlarning istiqboldagi holatini aniqlash", "Bir birlik mahsulot ishlab chiqarishga ketadigan o‘rtacha xarajatlarni aniqlash", "Foyda darajasini maksimallashtirish", "Reja ko‘rsatkichlarini bilan xarajatlarni taqqoslash"], correctText: "Ko‘rsatkichlarning istiqboldagi holatini aniqlash" },
    { question: "Regressiya tenglamasining koeffitsiyentlarini ahamiyatligini qaysi mezon orqali tekshiriladi?", options: ["Styudent t-statistikasi", "Determinatsiya koeffitsiyenti", "Elastik koeffitsiyenti", "Xi kvadrat"], correctText: "Styudent t-statistikasi" },
    { question: "Statistik bashoratlashda qo‘llanadigan usul nima deb ataladi?", options: ["Ekstrapolyatsiya usuli", "Potensiallar usuli", "Simpleks usuli", "Evristik usuli"], correctText: "Ekstrapolyatsiya usuli" },
    { question: "Natijaviy ko‘rsatkich va unga ta’sir etuvchi omillar o‘rtasidagi bog‘lanishning zichligini aniqlovchi koeffitsiyent qanday nomlanadi?", options: ["Korrelyatsiya koeffitsiyenti", "Styudent koeffitsiyenti", "Elastik koeffitsiyenti", "Doimiy koeffitsiyent"], correctText: "Korrelyatsiya koeffitsiyenti" },
    { question: "Excel dasturida formulalarni yozishda qanday belgidan foydalaniladi?", options: ["=", "^", "$", "&"], correctText: "=" },
    { question: "Elektron jadvalda A1;B3 soha ajratilgan. Ajratilgan yacheykalar soni nechta?", options: ["2", "6", "4", "3"], correctText: "2" },
    { question: "Excelda katagiga qiymatni kiritib bo’lgandan so’ng ‘’#####“ belgisi paydo bo’ldi. Bunga sabab nima?", options: ["Katak kengligi kichik bo’lib, qiymatni to’liq ko’rsatish imkonini bermaydi.", "Qiymat xato kiritilgan.", "Katak qiymat himoyalangan va qat’iy format o’rnatilgan", "Katak formati noto’g’ri belgilangan."], correctText: "Katak kengligi kichik bo’lib, qiymatni to’liq ko’rsatish imkonini bermaydi." },
    { question: "Excelda ПРОИЗВЕД(B5:B10) funksiyasi nimani hisoblaydi?", options: ["B5 dan B10 gacha bo’lgan kataklardagi sonli qiymatlarning ko’paytmasini hisoblaydi.", "B5 dan B10 gacha bo’lgan kataklardagi sonli qiymatlarning yig’indisini hisoblaydi.", "B5 dan B10 gacha bo’lgan kataklardagi sonli qiymatlarning eng kattasini hisoblaydi.", "Faqat B5 va B10 kataklardagi sonli qiymatlarning ko’paytmasini hisoblaydi."], correctText: "B5 dan B10 gacha bo’lgan kataklardagi sonli qiymatlarning ko’paytmasini hisoblaydi." },
    { question: "Ma’lumotlarni filtrlash deganda nima tushuniladi?", options: ["Ma’lumotlarni biror shart asosida guruhlash, ajratib olish.", "Ma’lumotlarni alfavit bo’yicha teskari saralash orqali ajratib olish.", "Ma’lumotlarni alfavitga teskari saralash", "Ma’lumotlarni o’sib borish tartibida joylastirish."], correctText: "Ma’lumotlarni biror shart asosida guruhlash, ajratib olish." },
    { question: "Excelda A1 katakdan A5 katakgacha 1, 2, 3, 4, 5 sonlari mos ravishda kiritilgan bo’lsa, A6 katagiga kiritilgan =ПРОИЗВЕД(A1:A5) formulaning qiymatini aniqlang?", options: ["120", "15", "1", "5"], correctText: "120" },
    { question: "Excelda A1 katakdan A5 katakgacha 1, 2, 3, 4, 5 sonlari mos ravishda kiritilgan bo’lsa, A6 katagiga kiritilgan =ПРОИЗВЕД(A1;A5) formulaning qiymatini aniqlang?", options: ["5", "15", "1", "120"], correctText: "5" },
    { question: "Excelda A1 katakda 10 soni bo’lsa, B1 katakdagi =A1/2 va C1 katakdagi =A1+B1 formula bajarilsa, C1 katakda qanday natija hosil bo’ladi?", options: ["15", "20", "10", "5"], correctText: "15" },
    { question: "Excelda A1 katakga 4, B1 katakga =КОРЕНЬ(A1) formula kiritilgan. B1 katakdagi qiymat necha?", options: ["2", "16", "32", "4"], correctText: "2" },
    { question: "Excelda A1 katakda 10 soni bo’lsa, B1 katakdagi =A1/2 va C1 katakdagi = СУММ(A1:B1)*A1 formulalarning bajarilishi natijasida C1 katakda qanday natija hosil bo’ladi?", options: ["150", "100", "50", "200"], correctText: "150" },
    { question: "Excelda СРЗНАЧ(A5:A50) funksiyasi nimani hisoblaydi?", options: ["A5 dan A50 gacha bo’lgan kataklardagi sonli qiymatlarning o’rta arifmetigini hisoblaydi.", "A5 dan A50 gacha bo’lgan kataklardagi sonli qiymatlarning ko’paytmasini hisoblaydi.", "A5 dan A50 gacha bo’lgan kataklardagi sonli qiymatlarni kamayish tartibida tasvirlab beradi.", "Faqat A5 va A50 kataklardagi sonli qiymatlarning o’rta arifmetigini hisoblaydi."], correctText: "A5 dan A50 gacha bo’lgan kataklardagi sonli qiymatlarning o’rta arifmetigini hisoblaydi." },
    { question: "Statistika fanining predmeti nimani o'rganadi?", options: ["Ommaviy ijtimoiy hodisa va jarayonlaming sifat mazmunini miqdoriy tomondan o'rganadi", "Mamlakatlar aholisi, iqtisodiyotini va madaniyatini o 'rganadi", "Bir turdagi mmaviy hodisalar arayonlaming iqdor va sifat tomonlarini o 'rganadi", "Turli xil ommaviy ijtimoiy hodisa va jarayonlami sifat tomonlarini o'rganadi"], correctText: "Ommaviy ijtimoiy hodisa va jarayonlaming sifat mazmunini miqdoriy tomondan o'rganadi" },
    { question: "Statistik to'plam deganda nimani tushunasiz?", options: ["Umumiy sifat asosida birlashgan, bir xil vaqtda, ammo bir-biridan turli xil belgilari bilan farq qiladigan hodisalar to 'plamini", "Faqat statistika o'rganadigan birlik to'plami", "Bir birlari bilan tub belgilariga qarab farq qiladigan birliklar to'plami", "Umumiy miqdor asosida birlashgan, ammo bir-biridan turli xil belgilari bilan farq qilgan birliklar to 'plamini"], correctText: "Umumiy sifat asosida birlashgan, bir xil vaqtda, ammo bir-biridan turli xil belgilari bilan farq qiladigan hodisalar to 'plamini" },
    { question: "Statistik ko'rsatkich nima?", options: ["Sifat mazmuniga ega bo'lgan ijtimoiy xodisalaming miqdoriy o'lchami", "Statistika o'rganadigan eng muxim xodisa va jarayonlaming miqdoriy o'lchami", "Ijtimoiy xodisa darajalarining miqdoriy va sifat o'lchami", "Miqdoriy tomonidan bo'lgan ijtimoiy xodisalaming sifat o'lchami"], correctText: "Sifat mazmuniga ega bo'lgan ijtimoiy xodisalaming miqdoriy o'lchami" },
    { question: "\"Statistika\" atamasi lotincha «Status» so'zidan olingan bo'lib, ………. ma`noni anglatadi.", options: ["Hodisaning holati, ahvoli", "Davlat", "Ma'lumotlar jamlanmasi", "Barcha javoblar to'g'ri"], correctText: "Hodisaning holati, ahvoli" },
    { question: "Statistik to'plamni tashkil qiluvchi har bir element nima deyiladi?", options: ["To`plam birligi", "Qator", "Ma'lumot", "To'plam"], correctText: "To`plam birligi" },
    { question: "Statistik kuzatish, bu har qanday statistik tadqiqot ishlarining………", options: ["Dastlabki bosqichidir", "So'ngi bosqichdir", "Dastlabki va so'ngi bosqichdir", "Barcha javoblar to'gri"], correctText: "Dastlabki bosqichidir" },
    { question: "Statistik kuzatish deb nimaga aytiladi?", options: ["Ijtimoiy hayot, hodisa va jarayonlari to'g'risidagi ma'lumotlami muntazam ravishda rejali, ilmiy asosda to plashga aytiladi", "Ijtimoiy hayot hodisalari to'g'risidagi ma'lumotlami to'plashga aytiladi", "Ijtimoiy hayot odisalari, hodisa va jarayonlari to'grisidagi ma'lumotlami yig'ishga aytiladi", "Barchajavoblar to'g'ri"], correctText: "Ijtimoiy hayot, hodisa va jarayonlari to'g'risidagi ma'lumotlami muntazam ravishda rejali, ilmiy asosda to plashga aytiladi" },
    { question: "Statistik kuzatish qanday belgilariga qarab tasniflanadi?", options: ["Kuzatish turlari, ma'lumotlar manba'lari va ma'lumotlami to'plash usullariga qarab", "Tashkiliy shakllari, kuzatish turlariga qarab", "Tashkiliy shakllari, kuzatish turlari, ma'lumotlar manbalari va ma'lumot to 'plash usullariga qarab", "Barcha javoblar to'g'ri"], correctText: "Kuzatish turlari, ma'lumotlar manba'lari va ma'lumotlami to'plash usullariga qarab" },
    { question: "Statistik kuzatish to'planadigan ma'lumotlar manbaiga qarab qanday turlarga bo'linadi?", options: ["barcha javoblar to'g'ri", "bevosita kuzatishga", "hujjatli kuzatishga", "bevosita, hujjatli va so'roq orqali kuzatishga"], correctText: "barcha javoblar to'g'ri" },
    { question: "Statistik kuzatishning rejasi nimalarni qamrab oladi?", options: ["dastur - uslubiy masalalarni", "tashkiliy masalalarni", "dastur - uslubiy va tashkiliy masalalarni", "barcha javoblar to'g'ri"], correctText: "dastur - uslubiy masalalarni" },
    { question: "Tajribaning asosiy bosqichlaridan biri nima hisoblanadi?", options: ["Tajriba maʼlumotlarini qayta ishlash", "Eksperimentni yozib olish", "Nazariyani takrorlash", "Tahlilsiz kuzatish"], correctText: "Tajriba maʼlumotlarini qayta ishlash" },
    { question: "Tajribalar qaysi sohalarda qo‘llaniladi?", options: ["Ijtimoiy, tabiiy, texnik, iqtisodiy, harbiy", "Faqat texnik sohada", "Faqat iqtisodiy sohada", "Faqat sotsiologik sohada"], correctText: "Ijtimoiy, tabiiy, texnik, iqtisodiy, harbiy" },
    { question: "Tajriba natijasida quriladigan model qanday maqsadlarda ishlatiladi?", options: ["Bashorat, boshqarish, optimallashtirish", "Faqat ma'lumot saqlash", "Faqat jarayonni qayta ishlash", "Faqat statistik tahlil"], correctText: "Bashorat, boshqarish, optimallashtirish" },
    { question: "Tajriba o‘tkazishdagi muhim jarayonlardan biri nima?", options: ["Tajriba sharoitlarini yaratish", "Ob'ektni nazoratga topshirish", "Hodisani tasodifan o‘rganish", "Faqat grafik chizish"], correctText: "Tajriba sharoitlarini yaratish" },
    { question: "Tajribada kuzatiladigan ob'ekt qanday nomlanadi?", options: ["Tajriba predmeti", "Sinov modeli", "EHM ob’ekti", "Tadqiqot asosi"], correctText: "Tajriba predmeti" },
    { question: "Tajribalarni sinflarga bo‘lish mezonlaridan biri nima?", options: ["O‘tkazilish maqsadiga ko‘ra", "Faqat vaqtiga qarab", "Ishtirokchilar soniga ko‘ra", "Xonadagi jihozlarga ko‘ra"], correctText: "O‘tkazilish maqsadiga ko‘ra" },
    { question: "Fizik tajribalar nima bilan tavsiflanadi?", options: ["Fizik miqdorlarni bir necha bor o‘lchash bilan", "Faqat nazariy tahlil bilan", "Faqat statistik usullar bilan", "Shakl va rasm chizish bilan"], correctText: "Fizik miqdorlarni bir necha bor o‘lchash bilan" },
    { question: "Tajriba natijalari keng ma’noda nimani anglatadi?", options: ["Sabab-oqibat bog‘liqliklarini aniqlash", "Grafik natijalarni chiqarish", "Javoblarni avtomatik tanlash", "Raqamli ko‘rsatkichlarni taqqoslash"], correctText: "Sabab-oqibat bog‘liqliklarini aniqlash" },
    { question: "Tor ma’noda tajriba natijasi nimani bildiradi?", options: ["Funktsional bog‘liqlik modelini yaratish", "Hisobot tuzish", "Diagramma yasash", "Statistik jadval to‘ldirish"], correctText: "Funktsional bog‘liqlik modelini yaratish" },
    { question: "Tajriba natijalarini statistik qayta ishlashda nimalar muhim?", options: ["Rejim va algoritmlarni tanlash", "Ob’ektni rasmga olish", "Ko‘rsatkichlarni o‘rganmaslik", "Nazariyasiz ishlash"], correctText: "Rejim va algoritmlarni tanlash" },
    { question: "Statistik qayta ishlashning birinchi rejimi qanday?", options: ["Ma’lumotlarni to‘liq yig‘ib, so‘ngra qayta ishlash", "Paralel qayta ishlash", "Faqat grafik tahlil", "Faqat dasturda hisoblash"], correctText: "Ma’lumotlarni to‘liq yig‘ib, so‘ngra qayta ishlash" },
    { question: "Tajribaning asosiy tarkibiy qismlaridan biri?", options: ["Tajriba o‘tkazish sharoiti", "Nazariy maqola", "Ko‘rsatkichlar o‘zgaruvchiligi", "Grafiklar to‘plami"], correctText: "Tajriba o‘tkazish sharoiti" },
    { question: "Tajribani qayta ishlashda dastlabki bosqich nima?", options: ["Ehtimollik modelini tuzish", "Modelni chizish", "Diagramma yaratish", "Raqamlar yig‘ish"], correctText: "Ehtimollik modelini tuzish" },
    { question: "Statistik tahlilda odatda qanday usullar qo‘llaniladi?", options: ["Regressiya, dispersiya, faktorli tahlil", "Matematika va fizika formulalari", "Chizma va grafik", "Faqat jadval tahlili"], correctText: "Regressiya, dispersiya, faktorli tahlil" },
    { question: "Statistik qayta ishlashda algoritm qanday bo‘lishi kerak?", options: ["Aniqlik va turg‘unlikka ega", "Murakkab va tez ishlovchi", "Faqat kuchli xotira talab qiluvchi", "Juda noaniq"], correctText: "Aniqlik va turg‘unlikka ega" },
    { question: "Avtomatlashtirilgan tajriba nimani anglatadi?", options: ["Inson ishtirokisiz amalga oshiriladi", "Faqat qo‘lda o‘tkaziladi", "Faqat EHM ishlaydi", "Model qo‘lda chiziladi"], correctText: "Inson ishtirokisiz amalga oshiriladi" },
    { question: "Tajribani statistik tahlilga tayyorlashda nima qilinadi?", options: ["Taqsimot qonunlari aniqlanadi", "Raqamlar bo‘yicha qo‘shiladi", "Tashqi ko‘rinish tahlil qilinadi", "Raqamlar chizmaga aylanadi"], correctText: "Taqsimot qonunlari aniqlanadi" },
    { question: "Tajriba natijalarini tahlil qilishda qanday qaror qabul qilinadi?", options: ["Tajribani davom ettirish yoki tugatish", "Faqat grafik ko‘rinishini ko‘rsatish", "Statistik dasturlarni bekor qilish", "Modelni avtomatik o‘chirish"], correctText: "Tajribani davom ettirish yoki tugatish" },
    { question: "Dispersiya tahlilining mohiyati nimada?", options: ["Natijaviy o‘zgaruvchining dispersiyasini tashkil etuvchilarga ajratish", "Korrelyatsiyani yo‘qotish", "Ichki faktorlarni modellashtirish", "Chiziqli bog‘liqliklarni yaratish"], correctText: "Natijaviy o‘zgaruvchining dispersiyasini tashkil etuvchilarga ajratish" },
    { question: "Regressiyali tahlil nimani aniqlashga yordam beradi?", options: ["Miqdoriy o‘zgaruvchilar orasidagi model parametrlarini", "Sifat belgilarining mavjudligini", "Ichki faktorlarning mavjudligini", "Dispersiya o‘zgarishini"], correctText: "Miqdoriy o‘zgaruvchilar orasidagi model parametrlarini" },
    { question: "Faktorli tahlilning asosiy maqsadi nima?", options: ["Tashqi faktorlarni ichki faktorlar bilan almashtirish zarurligini aniqlash", "Dispersiyani hisoblash", "Bashorat formulalarini tekshirish", "To‘g‘ri regressiyani yaratish"], correctText: "Tashqi faktorlarni ichki faktorlar bilan almashtirish zarurligini aniqlash" },
    { question: "Statistik tahlilning asosiy turiga nimalar kiradi?", options: ["Korrelyatsiyali, dispersiya, regressiyali, faktorli tahlillar", "Faqat regressiyali tahlil", "Faqat korrelyatsiyali tahlil", "Faqat statistik taqqoslash"], correctText: "Korrelyatsiyali, dispersiya, regressiyali, faktorli tahlillar" },
    { question: "Tajriba ma’lumotlarini qayta ishlashdagi birinchi bosqich qaysi?", options: ["Korrelyatsiyali tahlil", "Regressiyali tahlil", "Bashoratni aniqlash", "Model sinovi"], correctText: "Korrelyatsiyali tahlil" },
    { question: "Korrelyatsiya nima?", options: ["O‘zgaruvchilar o‘rtasidagi chiziqli bog‘liqlik darajasi", "Kuzatuv soni", "Statistik taqqoslash", "O‘zgaruvchilar soni"], correctText: "O‘zgaruvchilar o‘rtasidagi chiziqli bog‘liqlik darajasi" },
    { question: "Regressiya tahlili qaysi holatda qo‘llaniladi?", options: ["Miqdoriy o‘zgaruvchilar mavjud bo‘lsa", "Sifatli baholar bo‘lsa", "Modellar aniq bo‘lmasa", "Faktorlar noma’lum bo‘lsa"], correctText: "Miqdoriy o‘zgaruvchilar mavjud bo‘lsa" },
    { question: "Dispersiya tahlili nimani baholashga imkon beradi?", options: ["Faktorlarning ta’sir kuchini", "Model chiziqliligini", "Tashqi faktorlar sonini", "O‘zgaruvchilar nisbatini"], correctText: "Faktorlarning ta’sir kuchini" },
    { question: "Faktorli tahlilda ichki faktorlar qanday xarakterga ega?", options: ["O‘lchash qiyin yoki mumkin emas", "Oddiy kuzatish orqali aniqlanadi", "Faqat tasnif orqali ko‘rsatiladi", "Har doim aniqlanadi"], correctText: "O‘lchash qiyin yoki mumkin emas" },
    { question: "Korrelyatsiyali tahlil natijasi nimani aniqlashga yordam beradi?", options: ["Eng salmoqli regressorlarni tanlashga", "O‘rtacha qiymatni hisoblashga", "Jadval tuzishga", "Diagramma chizishga"], correctText: "Eng salmoqli regressorlarni tanlashga" },
    { question: "Regressiya tahlilining vazifasi nima?", options: ["Modellash va moslikni baholash", "Grafik yasash", "Statistik taqqoslash", "Faktorlar ro‘yxatini tuzish"], correctText: "Modellash va moslikni baholash" },
    { question: "Statistik bashoratlar nazariyasi nimaga asoslanadi?", options: ["Model parametrlari haqida xulosa chiqarishga", "Faqat eksperiment ma’lumotlariga", "O‘rta qiymatlarni o‘lchashga", "Korrelyatsiyani kamaytirishga"], correctText: "Model parametrlari haqida xulosa chiqarishga" },
    { question: "Dispersiyani ajratish orqali nima aniqlanadi?", options: ["Faktorlar ta’sir darajasi", "Chiziqli regressiya", "Kuzatish soni", "Bashorat qiymati"], correctText: "Faktorlar ta’sir darajasi" },
    { question: "Faktorli tahlil yordamida nimalar aniqlanadi?", options: ["Bog‘liqlik strukturasi va ichki faktorlar", "Statistik taqqoslash natijalari", "Dispersiyaning nisbiy o‘zgarishi", "Korrelyatsiya yo‘nalishi"], correctText: "Bog‘liqlik strukturasi va ichki faktorlar" },
    { question: "Dispersiya tahlilida nima buyruq rolini o‘ynaydi?", options: ["Ma’lumotlar bir jinsliligini tekshirish", "Model parametrlari ko‘rsatilishi", "Ichki faktorlar chiqarilishi", "Faoliyat xaritasi tuzish"], correctText: "Ma’lumotlar bir jinsliligini tekshirish" }
];

// LOGIKA
let currentQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let isClickable = true;

// Elementlar
const welcomeScreen = document.getElementById('welcome-screen');
const quizApp = document.getElementById('quiz-app');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const currentStatusEl = document.getElementById('current-status');
const scoreStatusEl = document.getElementById('score-status');
const progressBar = document.getElementById('progress-bar');
const modeNameEl = document.getElementById('mode-name');

function startMode(mode) {
    welcomeScreen.style.display = 'none';
    quizApp.style.display = 'block';
    
    if (mode === 'practice') {
        currentQuestions = [...allQuestionsData]; 
        modeNameEl.innerText = "Takrorlash";
    } else {
        // 30 talik Random Imtihon
        const shuffled = [...allQuestionsData].sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, 30);
        modeNameEl.innerText = "Imtihon (30)";
    }

    currentQuizIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    isClickable = true;
    optionsList.innerHTML = '';
    
    const currentData = currentQuestions[currentQuizIndex];
    
    // Savol matni
    questionEl.innerText = `${currentQuizIndex + 1}. ${currentData.question}`;
    
    // Progress
    const progressPercent = ((currentQuizIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentStatusEl.innerText = `${currentQuizIndex + 1} / ${currentQuestions.length}`;
    scoreStatusEl.innerText = `${score} to'g'ri`;

    // Variantlarni aralashtirish
    let shuffledOptions = [...currentData.options].sort(() => 0.5 - Math.random());
    const correctText = currentData.correctText;

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(opt, correctText, btn);
        optionsList.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btnElement) {
    if (!isClickable) return;
    isClickable = false; // Ketma-ket bosishni oldini olish

    const buttons = document.querySelectorAll('.option-btn');
    
    if (selected === correct) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        // To'g'risini ko'rsatamiz
        buttons.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
    }

    scoreStatusEl.innerText = `${score} to'g'ri`;

    // 1.2 sekunddan keyin keyingisiga o'tish
    setTimeout(() => {
        currentQuizIndex++;
        if (currentQuizIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

function showResults() {
    quizApp.style.display = 'none';
    resultScreen.style.display = 'flex';
    
    const total = currentQuestions.length;
    const percentage = (score / total) * 100;
    
    document.getElementById('total-count').innerText = `/ ${total}`;
    document.getElementById('final-score').innerText = score;
    
    const msgEl = document.getElementById('result-message');
    if (percentage >= 80) msgEl.innerText = "Ajoyib natija! 🎉";
    else if (percentage >= 60) msgEl.innerText = "Yaxshi, lekin yana o'qing. 📚";
    else msgEl.innerText = "Qayta urinib ko'ring. 💪";
}