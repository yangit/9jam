angular.module('9jam')
    .factory('i18n', function () {
        var i18n = {
            from: {en: 'From', my: 'Daripada'},
            to: {en: 'To', my: 'Kepada'},
            yes: {en: 'Yes', my: 'Ya'},
            home: {en: 'Home', my: 'Rumah'},
            hello: {en: 'Hello', my: 'Selamat datang'},
            hour: {en: 'hour', my: 'jam'},
            profile: {en: 'Profile', my: 'Profil'},
            name: {en: 'Name', my: 'Nama'},
            mobilePhone: {en: 'Mobile phone', my: 'Telefon bimbit'},
            hideLastName: {en: 'Hide last name', my: 'Menyembunyikan nama akhir'},
            pleseFillProfile: {en: 'Please fill in your profile. All information is public.', my: 'Sila isi dalam profil anda. Semua maklumat adalah awam.'},
            age: {en: 'Age', my: 'Umur'},
            language: {en: 'Language', my: 'Bahasa'},
            location: {en: 'Location', my: 'Locasi'},
            rate: {en: 'Rate', my: 'Setiap jam'},
            langProf: {en: 'Language proficiency', my: 'Kemahiran bahasa'},
            langMy: {en: 'Malay', my: 'Bahasa Malay'},
            langEn: {en: 'English', my: 'Bahasa Inggeris'},
            langMn: {en: 'Mandarin', my: 'Mandarin'},
            langTm: {en: 'Tamil', my: 'Tamil'},
            none: {en: 'None', my: 'Kosong'},
            canLeaveBlank: {en: 'You may leave this blank', my: 'Anda boleh membiarkan bahagian ini kosong'},
            realName: {en: 'Real name please!', my: 'Nama sebenar sila!'},
            firstName: {en: 'First name', my: 'Nama pertama'},
            middleName: {en: 'Middle name', my: 'Nama tengah'},
            lastName: {en: 'Last name', my: 'Nama akhir'},
            beginner: {en: 'Beginner', my: 'Permulaan'},
            intermediate: {en: 'Beginner', my: 'Perantaraan'},
            advanced: {en: 'Beginner', my: 'Advanced'},
            education: {en: 'Education', my: 'Pendidikan'},
            school: {en: 'High school', my: 'Sekolah tinggi'},
            bachelor: {en: 'Bachelor', my: 'Universiti'},
            masters: {en: 'Masters', my: 'Masters'},
            publishMyProfile: {en: 'Publish my profile', my: 'Publish profil saya'},
            nobodyWillFind: {en: 'Nobody will find your profile on', my: 'Tiada siapa yang akan mencari anda di'},
            login: {en: 'Login', my: 'Login'},
            logout: {en: 'Logout', my: 'Logout'},
            no: {en: 'No', my: 'Tidak'},
            strict: {en: 'Strict', my: 'Ketat'},
            strictExplain: {en: 'Show only with this education level', my: 'Menunjukkan hanya dengan gred pendidikan ini'},
            years: {en: 'yrs', my: 'thn'},
            findWorker: {en: 'Find worker', my: 'Mencari pekerja'},
            findJob: {en: 'Find job', my: 'Mencari pekerjaan'},
            searchResults: {en: 'Found', my: 'Cari'}
        };
        // Public API here
        return {
            get: function () {
                return i18n;
            }
        }

    });