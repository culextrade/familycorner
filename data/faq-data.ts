export interface FAQItem {
    id: string;
    category: string;
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    // Pernikahan
    {
        id: 'nikah-1',
        category: 'Pernikahan',
        question: 'Apa saja syarat sah pernikahan dalam Islam?',
        answer: 'Syarat sah pernikahan dalam Islam meliputi: (1) Ada calon mempelai laki-laki dan perempuan yang halal menikah, (2) Ada wali dari pihak perempuan, (3) Ada dua orang saksi yang adil, (4) Ada ijab (pernyataan dari wali) dan qabul (penerimaan dari calon suami), (5) Tidak ada halangan syar\'i seperti mahram atau masih dalam masa iddah.',
    },
    {
        id: 'nikah-2',
        category: 'Pernikahan',
        question: 'Apakah pernikahan beda agama sah menurut hukum Islam?',
        answer: 'Menurut hukum Islam, laki-laki Muslim boleh menikahi wanita Ahli Kitab (Yahudi/Nasrani) dengan syarat tertentu, namun wanita Muslimah tidak boleh menikahi laki-laki non-Muslim. Di Indonesia, berdasarkan UU Perkawinan dan fatwa MUI, pernikahan beda agama tidak diperbolehkan dan tidak dapat dicatatkan.',
    },
    {
        id: 'nikah-3',
        category: 'Pernikahan',
        question: 'Berapa batas usia minimal untuk menikah?',
        answer: 'Berdasarkan UU No. 16 Tahun 2019, batas usia minimal untuk menikah adalah 19 tahun baik untuk laki-laki maupun perempuan. Ini berlaku untuk semua warga negara Indonesia tanpa terkecuali.',
    },

    // Perceraian
    {
        id: 'cerai-1',
        category: 'Perceraian',
        question: 'Bagaimana cara mengajukan gugatan cerai?',
        answer: 'Untuk mengajukan gugatan cerai, istri harus mengajukan gugatan ke Pengadilan Agama di wilayah tempat tinggalnya atau tempat tinggal suami. Gugatan harus disertai alasan yang jelas sesuai Pasal 116 KHI. Setelah itu, akan ada proses mediasi wajib sebelum persidangan dimulai.',
    },
    {
        id: 'cerai-2',
        category: 'Perceraian',
        question: 'Apa perbedaan cerai talak dan cerai gugat?',
        answer: 'Cerai talak adalah perceraian yang diajukan oleh suami ke Pengadilan Agama. Sedangkan cerai gugat adalah perceraian yang diajukan oleh istri. Prosesnya berbeda: cerai talak diakhiri dengan ikrar talak, sementara cerai gugat diakhiri dengan putusan hakim.',
    },
    {
        id: 'cerai-3',
        category: 'Perceraian',
        question: 'Berapa lama masa iddah setelah perceraian?',
        answer: 'Masa iddah bagi wanita yang masih haid adalah 3 kali suci (quru\'), bagi wanita hamil sampai melahirkan, bagi wanita menopause adalah 3 bulan. Selama masa iddah, mantan suami wajib memberikan nafkah.',
    },
    {
        id: 'cerai-4',
        category: 'Perceraian',
        question: 'Apa itu khulu\' dan bagaimana prosedurnya?',
        answer: 'Khulu\' adalah perceraian yang diminta oleh istri dengan memberikan tebusan (iwadh) kepada suami, biasanya berupa pengembalian mahar. Prosedurnya tetap melalui Pengadilan Agama. Jika suami menerima, perceraian langsung jatuh sebagai talak ba\'in sughra.',
    },

    // Hak Asuh Anak
    {
        id: 'anak-1',
        category: 'Hak Asuh Anak',
        question: 'Siapa yang berhak mengasuh anak setelah perceraian?',
        answer: 'Untuk anak di bawah 12 tahun (mumayyiz), hak asuh ada pada ibu kecuali ada alasan kuat yang menyebabkan ibu tidak layak. Untuk anak di atas 12 tahun, anak dapat memilih ikut ayah atau ibu. Namun, ayah tetap wajib menanggung biaya pemeliharaan dan pendidikan anak.',
    },
    {
        id: 'anak-2',
        category: 'Perceraian',
        question: 'Apakah ayah wajib memberi nafkah anak setelah cerai?',
        answer: 'Ya, ayah tetap wajib memberikan nafkah anak hingga anak dewasa atau mandiri, meskipun hak asuh ada pada ibu. Nafkah ini mencakup biaya hidup, pendidikan, dan kesehatan anak.',
    },

    // Harta Bersama
    {
        id: 'harta-1',
        category: 'Harta Bersama',
        question: 'Bagaimana pembagian harta bersama (gono-gini) setelah cerai?',
        answer: 'Harta bersama (gono-gini) adalah harta yang diperoleh selama pernikahan. Menurut KHI Pasal 97, harta bersama dibagi dua antara suami dan istri, kecuali ada perjanjian pranikah yang mengatur lain. Harta bawaan masing-masing tetap menjadi milik pribadi.',
    },
    {
        id: 'harta-2',
        category: 'Harta Bersama',
        question: 'Apakah warisan termasuk harta bersama?',
        answer: 'Tidak. Warisan yang diterima oleh salah satu pihak selama pernikahan tetap menjadi harta pribadi (bukan harta bersama), kecuali sudah dicampur atau digunakan untuk kepentingan bersama dengan persetujuan kedua belah pihak.',
    },

    // Nafkah
    {
        id: 'nafkah-1',
        category: 'Nafkah',
        question: 'Apa saja hak istri yang harus dipenuhi suami setelah cerai?',
        answer: 'Hak istri setelah cerai meliputi: (1) Nafkah iddah selama masa iddah, (2) Mut\'ah (pemberian penghibur), (3) Nafkah anak jika ada, (4) Bagian harta bersama (50%), (5) Hak asuh anak (untuk anak di bawah 12 tahun).',
    },
    {
        id: 'nafkah-2',
        category: 'Nafkah',
        question: 'Berapa besaran mut\'ah yang harus diberikan?',
        answer: 'Besaran mut\'ah tidak ditentukan secara pasti, tetapi disesuaikan dengan kemampuan suami dan kelayakan. Hakim akan mempertimbangkan kondisi ekonomi suami, lama pernikahan, dan kondisi perceraian dalam menentukan besaran mut\'ah.',
    },
];
