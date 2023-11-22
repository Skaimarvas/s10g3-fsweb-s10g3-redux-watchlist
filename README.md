# Redux Modül Projesi: Film İzleme Listesi

Bu proje, öğrendiğiniz redux kavram ve yöntemlerini uygulayacağınız, logger middlewarei ile redux adımlarını takip edeceğiniz küçük bir film izleme listesi oluşturma projesidir.

## Giriş

Dünkü projede, büyük bir film yönetim uygulaması ile çalıştınız. Film ekleme, silme, favorilere ekleme gibi görevleri size sağlanan actionlarla ve verilen ipuçları ile tamamladınız. Bugün redux ile ilgili kısımların **_tamamını_** kendiniz oluşturacaksınız.

**_Görevlerinizi tek tek tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun._**

## Talimatlar

### Görev 1: Proje Kurulumu

- [x] Forklayın.
- [x] Klonlayın
- [x] Ana dizine gidinx
- [x] `npm install`
- [x] `npm start`

### Görev 2: Proje Gereksinimleri

Proje `movies.js` dosyasında yer alan filmleri sırayla görüntüleyebildiniz ve isterseniz görüntülediğiniz filmi izleme listenize eklemenize, eklediklerinizi çıkarmanıza izin veren bir uygulama.

- Filmler arasında "Sıradaki" butonu ile dolaşılabilmeli,
- Listeye eklenen filmler anasayfada görüntülenmemeli.

* [x] Projeyi inceleyin ve componentların birbiriyle ilişkisini anlayın.

* [x] `redux` ve `react-redux` paketlerini projenize ekleyin.

* [x] Projede kullanılan verilerin hangileri redux store'u içerisinde tutulmalı? Bu verilerden `initialState` olarak kullanılması gereken var mı? Planlayın.

* [x] Proje içerisinde store içerisindeki veriyi hangi fonksiyonlarla değiştirmeniz gerekecek? Düşünün ve reducerınızı oluşturmaya başlayın.

* [x] **`store`** oluşturmanın vakti geldi. Tüm uygulamanızı kapsayacak şekilde bir store oluşturun.

* [x] Store içerisinde duran veriler projede nerede kullanılacak? **`useSelector`** hooku ile store içerisinden gerekli verileri alın ve ilgili yerlerde kullanın.

* [x] Artık `action`larla çalışmaya hazırız. Hangi actionlar olmalı, hangi kısımlarda tetiklenmeli? İlgili yerlerde bu actionları **`dispatch`** edin.

### Görev 3: Projeye redux-logger eklemek

- [x] Projenize [redux-logger](https://github.com/LogRocket/redux-logger) paketini ekleyin.

- [x] Dokümantasyonunda tarif edildiği gibi projenize eklemeye çalışın. Sorun yaşarsanız hap bilgiler içerisindeki örneği takip edin.

- [x] Store ile ilgili değişiklikler yaptığınızda logger paketinin vermiş olduğu logları inceleyin.

### Esnek Görevler

- [x] Filmler arasında gezinmeyi kolaylaştırmak için bir "Önceki", bir de "Başa dön" butonu ekleyin. Bunları görüntülemeniz gereken yerleri bulun ve ekleyin.

- [x] Proje stillerini kendi istediğiniz şekilde değiştirmeye çalışın.

- [x] Film listesi 20 adet film içeriyor. Filmler arasında gezinirken son filme geldiğinizde "Sıradaki" butonunun, ilk filme geldiğinizde "Önceki" butonunun görüntülenmemesini sağlayın.
