# Retaurant Website

### PIZZA ROMANO RESTAURANT <br/>
Bu projenin içeriği bir pizza restoranının web sitesi hakkındadır.Bu web sitesi, pizza restoranının kullanıcılara çeşitli pizza seçeneklerini sunmak,kullanıcıların web sitesi üzerinden sipariş vermelerini kolaylaştırmak,restoranın konumu,çalışma saatleri vb. hakkında bilgi sağlamak amacıyla oluşturuldu. 
<br/>
<br/>
### MOTİVASYON <br/>
Projenin tasarlanmasının ana nedenini HTML,CSS,JS gibi programlama dillerini bir arada kullanarak dilediğimiz şekilde ortaya bir web sitesi tasarımı çıkartmak,kullanılabilir bir şekilde sunmak ve kendimizi kod yazma aşamasında geliştirmek için olduğunu söyleyebiliriz
<br/>
Proje içeriğini ise bir restoran çeşidi olarak seçmemizin sebeplerini kodlama aşamasında daha pratik yazılabilmesi,grup içerisinde iş bölümü yapılmasına elverişli olması ve daha kısa süreli bir şekilde hazırlanabilmesi şeklinde maddeleyebiliriz.
<br/>
<br/>
### YAPI DURUMU <br/>
Projemizde genel itibariyle HTML vs CSS kodları bitmiştir. Web sayfamızın tasarımında ve genel görüntüsünde karşılaşabileceğiniz bir sorun bulunmamaktadır. Bu genel web tasarımı uygun kod bloklarıyla değiştirilerek özelleştirilebilir.
Web sayfamızın JavaScript kısmı ise henüz tam anlamıyla tamamlanmamıştır. Basit fonksiyonlar (tıklama, seçme vs) dışında search kısmında arama yapılması veya sosyal medya hesaplarının aktif bir hesaba erişmemesi gibi eksiklikler bulunmaktadır. Bu sorunların çözülmesi için JavaScript kullanımında belirli bir bilgi seviyesine ulaşmak gerekir. Tutorial örnek kaynakları youtube, udemy, roadmap gibi platformlar olabilir.
<br/>
<br/>
### EKRAN GÖRÜNTÜLERİ <br/>
Restoran web sayfamızın genel görünümü bu şekildedir: <br/>
![home png](https://github.com/Rumeysacck/retaurant-website/blob/master/images/readme-home.png)
<br/>
![about png](https://github.com/Rumeysacck/retaurant-website/blob/master/images/readme-about.png)
<br/>
<br/>
### KULLANILAN TEKNOLOJİ/ÇERÇEVE <br/>
Bir İtalyan pizza restoranı olan Pizza Romano'nun web sitesini tasarladığımız projemizde Visual Studio Code düzenleyicisiyle Html, CSS ve JavaScript dillerini kullandık. Sitemizden restoranımızla ilgili bilgi edinebilir nefis İtalyan pizzalarımızı inceleyebilirsiniz.
<br/>
<br/>
### ÖZELLİKLER <br/>
<br/>
<br/>

### KOD ÖRNEKLERİ <br/>
Menü classlarımızı oluşturduk:
```
<nav class="navbar">
   <a href="index.html" class="active">Home</a>
   <a href="#about" >About</a>
   <a href="#menu" >Menu</a>
   <a href="#review" >Review</a>
   <a href="#contact" >Contact</a>
</nav>
```
<br/>
Sayfada kullanılan renklerin hızlıca seçilmesi için tanımlanan css kodları: <br/>

```
:root{
    --main-color: #353637; /*sayfada kullanılan renklerin hızlıca seçilebilmesi için tanımlanan kodlar*/
    --black-color: #000000;
    --border: 0.1rem solid rgba(255,255,255,0.4);
}
```
